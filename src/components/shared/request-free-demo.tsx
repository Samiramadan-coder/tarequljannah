"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { FieldError } from "../ui/field";
import { Label } from "../ui/label";
import FormPhoneInput from "../reusable/phone-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const contactUsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone number is required"),
  gender: z.enum(["male", "female"], "Gender is required"),
  captcha: z.string().min(1, "Please verify that you are not a robot"),
});

type ContactUsFormValues = z.infer<typeof contactUsSchema>;

export default function RequestFreeDemo() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      gender: undefined,
      captcha: "",
    },
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit: SubmitHandler<ContactUsFormValues> = async (data) => {
    console.log(data);
  };

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <section
      id="request-free-demo"
      className="container max-w-5xl py-20"
      aria-labelledby="request-demo-title"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 rounded-sm bg-[#F1F2F8] p-6"
      >
        <h2 id="request-demo-title" className="text-lg font-semibold">
          Request Free Demo
        </h2>

        <div>
          <Label htmlFor="demo-name" className="sr-only">
            Your Name
          </Label>

          <Input
            id="demo-name"
            type="text"
            placeholder="Your Name *"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "demo-name-error" : undefined}
            className="h-11 rounded-sm border-none bg-white"
            {...register("name")}
          />

          <div id="demo-name-error">
            <FieldError errors={[errors.name]} className="mt-1" />
          </div>
        </div>

        <div>
          <Label className="sr-only">Phone Number</Label>

          <FormPhoneInput name="phone" control={control} />
        </div>

        <div>
          <Label htmlFor="demo-gender" className="sr-only">
            Gender
          </Label>

          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="demo-gender"
                  aria-invalid={!!errors.gender}
                  aria-describedby={
                    errors.gender ? "demo-gender-error" : undefined
                  }
                  className="min-h-11 w-full rounded-sm border-none bg-white"
                >
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>

                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />

          <div id="demo-gender-error">
            <FieldError errors={[errors.gender]} className="mt-1" />
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          By filling out this form and clicking submit, you agree to our privacy
          policy.
        </p>

        {recaptchaSiteKey && (
          <Controller
            name="captcha"
            control={control}
            render={({ field, fieldState }) => (
              <div
                role="group"
                aria-label="Security verification"
                className="space-y-1"
              >
                <ReCAPTCHA
                  sitekey={recaptchaSiteKey}
                  onChange={(token) => {
                    field.onChange(token ?? "");
                  }}
                  onExpired={() => {
                    field.onChange("");
                  }}
                />

                <FieldError errors={[fieldState.error]} />
              </div>
            )}
          />
        )}

        <div className="flex justify-end">
          <Button
            className="h-11 w-45 rounded-sm font-semibold tracking-widest"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && <Spinner />}
            Request Free Demo
          </Button>
        </div>
      </form>
    </section>
  );
}
