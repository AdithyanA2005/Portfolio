import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import SkewRect from "../SkewRect";
import ContactHeading from "./ContactHeading";
import ContactInfo from "./ContactInfo";
import ContactInput from "./ContactInput";
import ContactSubmitBtn from "./ContactSubmitBtn";
import ContactSocials from "./ContactSocials";
import { emailValidationRules, messageValidationRules, nameValidationRules, subjectValidationRules } from "@/utils/forms/validations";
import { ContactFormValues } from "@/utils/forms/contact/typings";
import { Social } from "@/utils/api/typings";

type Props = {
  address: string | undefined;
  email: string | undefined;
  socials: Social[] | undefined;
};


export default function ContactSection({ email, address, socials }: Props) {
  const { handleSubmit, control, formState: { errors } } = useForm<ContactFormValues>();

  // Handle form submission
  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const emailBody = `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`;
    const mailLink = `mailto:${email}?subject=${encodeURIComponent('Contact Form Submission')}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailLink);
  };

  return (
    <SectionWrapper id="contact" >
      <div className="z-10 h-full flex flex-col max-w-7xl mx-auto overflow-x-hidden">
        <SectionHeading title="contact me" />

        <div className="z-[inherit] px-1 pb-2 flex gap-8 flex-col lg:flex-row items-center justify-between overflow-y-auto">
          <motion.div 
            initial={{x: -200, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className="flex flex-col space-y-5 w-full max-w-2xl lg:max-w-[50%]"
          >
            <ContactHeading />
            <ContactInfo email={email} address={address} />
            <ContactSocials socials={socials} />
          </motion.div>

          <motion.form
            initial={{x: 200, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            noValidate={true}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full max-w-2xl"
          >
            {/* Name Input Field */}
            <ContactInput
              name="name"
              type="text"
              label="Name"
              placeholder="Ex: John Doe - HR Manager"
              control={control}
              errors={errors}
              rules={nameValidationRules}
            />

            {/* Email Input Field */}
            <ContactInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="Ex: someone@gmail.com"
              control={control}
              errors={errors}
              rules={emailValidationRules}
            />

            {/* Subject Input Field */}
            <ContactInput
              name="subject"
              type="text"
              label="Subject"
              placeholder="Ex: Job offer"
              control={control}
              errors={errors}
              rules={subjectValidationRules}
            />

            {/* Message Input Field */}
            <ContactInput
              name="message"
              type="textarea"
              label="Email Address"
              placeholder="Enter your message"
              control={control}
              errors={errors}
              rules={messageValidationRules}
            />

            {/* Submit Btn */}
            <ContactSubmitBtn text="Open in Mail" />
          </motion.form>
        </div>
      </div>

      <SkewRect from="left" />
    </SectionWrapper>
  );
}
