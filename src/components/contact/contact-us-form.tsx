"use client";

import { useForm } from "react-hook-form";
import FormPhoneInput from "../reusable/phone-input";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ContactUsForm() {
  const { control } = useForm<{
    phone: string;
  }>();
  return (
    <div className="container max-w-5xl pb-20">
      <form className="p-6 bg-[#F1F2F8] rounded-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p className="text-lg font-semibold col-span-2">Get in touch with us</p>

        <Input
          type="text"
          className="h-11 bg-white rounded-sm border-none"
          placeholder="Your Name *"
        />

        <Input
          type="email"
          className="h-11 bg-white rounded-sm border-none"
          placeholder="Your Email *"
        />

        <FormPhoneInput
          name="phone"
          control={control}
          className="sm:col-span-2"
        />

        <Input
          type="text"
          className="h-11 bg-white rounded-sm border-none sm:col-span-2"
          placeholder="Subject *"
        />

        <Textarea
          className="h-32 bg-white rounded-sm border-none sm:col-span-2"
          placeholder="Your Message *"
        />

        <div className="col-span-2 flex justify-end">
          <Button
            className="rounded-sm h-11 w-40 font-semibold tracking-widest"
            type="submit"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
