"use client";

import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const countries = [
  {
    code: "AE",
    dialCode: "+971",
    name: "UAE",
  },
  {
    code: "SA",
    dialCode: "+966",
    name: "Saudi Arabia",
  },
  {
    code: "EG",
    dialCode: "+20",
    name: "Egypt",
  },
  {
    code: "KW",
    dialCode: "+965",
    name: "Kuwait",
  },
  {
    code: "QA",
    dialCode: "+974",
    name: "Qatar",
  },
];

type FormPhoneInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  required?: boolean;
  className?: string;
  defaultCountry?: string;
};

export default function FormPhoneInput<T extends FieldValues>({
  name,
  control,
  label,
  required,
  className,
  defaultCountry = "AE",
}: FormPhoneInputProps<T>) {
  const [countryCode, setCountryCode] = React.useState(defaultCountry);

  const country =
    countries.find((country) => country.code === countryCode) ?? countries[0];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const phoneNumber =
          typeof field.value === "string"
            ? field.value.replace(country.dialCode, "")
            : "";

        return (
          <Field className={className} data-invalid={fieldState.invalid}>
            {label && (
              <FieldLabel
                className={cn(
                  "text-xs font-semibold uppercase tracking-widest text-primary/50",
                  required &&
                    "after:ms-1 after:text-destructive after:content-['*']",
                )}
              >
                {label}
              </FieldLabel>
            )}

            <FieldContent>
              <div className="flex gap-2">
                <Select
                  value={countryCode}
                  onValueChange={(value) => {
                    const newCountry = countries.find(
                      (country) => country.code === value,
                    );
                    if (!newCountry) return;
                    setCountryCode(value);
                    field.onChange(
                      phoneNumber ? `${newCountry.dialCode}${phoneNumber}` : "",
                    );
                  }}
                >
                  <SelectTrigger className="bg-white min-h-11 w-50 rounded-sm border-none">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <span className="flex items-center gap-2">
                          <span>{country.dialCode}</span>
                          <span className="text-muted-foreground">
                            {country.name}
                          </span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Input
                  type="tel"
                  inputMode="tel"
                  placeholder="50 123 4567"
                  value={phoneNumber}
                  onBlur={field.onBlur}
                  onChange={(event) => {
                    const number = event.target.value.replace(/[^\d\s-]/g, "");
                    field.onChange(
                      number
                        ? `${country.dialCode}${number.replace(/\D/g, "")}`
                        : "",
                    );
                  }}
                  className="border-none rounded-sm h-11 bg-white"
                />
              </div>

              <FieldError errors={[fieldState.error]} />
            </FieldContent>
          </Field>
        );
      }}
    />
  );
}
