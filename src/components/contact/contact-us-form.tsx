"use client";

import z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import FormPhoneInput from "../reusable/phone-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { FieldError } from "../ui/field";
import { Spinner } from "../ui/spinner";

const contactUsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactUsFormValues = z.infer<typeof contactUsSchema>;

export default function ContactUsForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit: SubmitHandler<ContactUsFormValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="container max-w-5xl pb-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-[#F1F2F8] rounded-sm grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <p className="text-lg font-semibold col-span-2">Get in touch with us</p>

        <div>
          <Input
            type="text"
            className="h-11 bg-white rounded-sm border-none"
            placeholder="Your Name *"
            {...register("name")}
          />
          <FieldError errors={[errors.name]} className="mt-1" />
        </div>

        <div>
          <Input
            type="email"
            className="h-11 bg-white rounded-sm border-none"
            placeholder="Your Email *"
            {...register("email")}
          />
          <FieldError errors={[errors.email]} className="mt-1" />
        </div>

        <FormPhoneInput
          name="phone"
          control={control}
          className="sm:col-span-2"
        />

        <div className="sm:col-span-2">
          <Input
            type="text"
            className="h-11 bg-white rounded-sm border-none"
            placeholder="Subject *"
            {...register("subject")}
          />
          <FieldError errors={[errors.subject]} className="mt-1" />
        </div>

        <div className="sm:col-span-2">
          <Textarea
            className="h-32 bg-white rounded-sm border-none"
            placeholder="Your Message *"
            {...register("message")}
          />
          <FieldError errors={[errors.message]} className="mt-1" />
        </div>

        <div className="col-span-2 flex justify-end">
          <Button
            className="rounded-sm h-11 w-40 font-semibold tracking-widest"
            type="submit"
          >
            {isSubmitting && <Spinner />} Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
