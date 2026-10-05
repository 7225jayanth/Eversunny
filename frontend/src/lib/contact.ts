import { site } from "../data/site";

export interface ContactMessage {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export type SendResult = "sent" | "mailto";

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

// Posts the enquiry to VITE_CONTACT_ENDPOINT when configured; otherwise opens the
// visitor's email app with the message pre-filled so no enquiry is lost.
export const sendContactMessage = async (message: ContactMessage): Promise<SendResult> => {
  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(message),
    });
    if (!response.ok) {
      throw new Error(`Contact request failed with status ${response.status}`);
    }
    return "sent";
  }

  const subject = `New enquiry from ${message.name}${message.company ? ` (${message.company})` : ""}`;
  const details = [
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    message.company && `Company: ${message.company}`,
    message.service && `Service: ${message.service}`,
    message.budget && `Budget: ${message.budget}`,
  ].filter(Boolean);
  const body = `${details.join("\n")}\n\n${message.message}`;

  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return "mailto";
};
