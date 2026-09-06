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
    defaultValues: { name: "", phone: "", gender: undefined, captcha: "" },
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit: SubmitHandler<ContactUsFormValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="container max-w-5xl py-20" id="request-free-demo">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-[#F1F2F8] rounded-sm grid grid-cols-1 gap-4"
      >
        <p className="text-lg font-semibold">
          <span>Request Free Demo</span>
        </p>

        {/* Name Input Field */}
        <div>
          <Input
            type="text"
            className="h-11 bg-white rounded-sm border-none"
            placeholder="Your Name *"
            {...register("name")}
          />
          <FieldError errors={[errors.name]} className="mt-1" />
        </div>

        {/* Phone Input Field */}
        <FormPhoneInput name="phone" control={control} />

        {/* Gender Select Field */}
        <div>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                <SelectTrigger className="w-full min-h-11 bg-white rounded-sm border-none">
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
          <FieldError errors={[errors.gender]} className="mt-1" />
        </div>

        <p className="text-muted-foreground text-sm">
          By filling out this form and clicking submit, you agree to our privacy
          policy.
        </p>

        <Controller
          name="captcha"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-1">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
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

        <div className="flex justify-end">
          <Button
            className="rounded-sm h-11 w-45 font-semibold tracking-widest"
            type="submit"
          >
            {isSubmitting && <Spinner />} Request Free Demo
          </Button>
        </div>
      </form>
    </div>
  );
}
