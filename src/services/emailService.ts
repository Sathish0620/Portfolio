import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!serviceId || !templateId || !publicKey) {
  throw new Error("Missing EmailJS environment variables.");
}

export interface ContactFormData extends Record<string, string> {
  from_name: string;
  from_email: string;
  message: string;
  subject: string;
}

export const sendEmail = async (
  formData: ContactFormData
): Promise<void> => {
  await emailjs.send(
    serviceId,
    templateId,
    formData,
    {
      publicKey,
    }
  );
};