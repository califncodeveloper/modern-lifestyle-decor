/**
 * WhatsApp enquiry link generator.
 * Encodes dynamic enquiry messages directed to Modern LifeStyle Decor's official contact.
 */

export const PRIMARY_WHATSAPP_NUMBER = "919551080470";

export function createWhatsAppProductEnquiryUrl(
  productName: string,
  categoryLabel?: string,
  phone: string = PRIMARY_WHATSAPP_NUMBER
): string {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  
  // Format category label naturally (e.g. "Mosquito Nets" -> "mosquito net")
  let normalizedCategory = "";
  if (categoryLabel) {
    const lower = categoryLabel.toLowerCase().trim();
    if (lower.endsWith("s")) {
      normalizedCategory = ` ${lower.slice(0, -1)}`;
    } else {
      normalizedCategory = ` ${lower}`;
    }
  }

  const message = `Hello Modern LifeStyle Decor,\n\nI am interested in your ${productName}${normalizedCategory}.\n\nPlease share more information about this product.\n\nThank you.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppChatbotQuoteUrl(
  productName?: string,
  phone: string = PRIMARY_WHATSAPP_NUMBER
): string {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  const productLine = productName ? `your ${productName}` : "your products";
  const message = `Hello Modern LifeStyle Decor,\n\nI am interested in ${productLine}.\n\nCould you please share more information and pricing?\n\nThank you.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppChatbotEnquiryUrl(
  topic?: string,
  phone: string = PRIMARY_WHATSAPP_NUMBER
): string {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  const subject = topic ? ` regarding ${topic}` : "";
  const message = `Hello Modern LifeStyle Decor,\n\nI would like to enquire${subject}.\n\nPlease connect with me with more details.\n\nThank you.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppGeneralEnquiryUrl(
  topic?: string,
  phone: string = PRIMARY_WHATSAPP_NUMBER
): string {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  const subject = topic ? ` regarding ${topic}` : "";
  const message = `Hello Modern LifeStyle Decor,\n\nI would like to enquire${subject}.\n\nPlease connect with me with more details.\n\nThank you.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export interface WhatsAppContactFormData {
  fullName: string;
  phone: string;
  email?: string;
  interestedIn: string;
  message: string;
}

export function createWhatsAppContactFormUrl(
  data: WhatsAppContactFormData,
  phone: string = PRIMARY_WHATSAPP_NUMBER
): string {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  const emailLine = data.email && data.email.trim() ? `\nEmail: ${data.email.trim()}` : "";
  const message = `Hello Modern LifeStyle Decor,\n\nI would like to submit an enquiry via your website:\n\n• Name: ${data.fullName.trim()}\n• Phone: ${data.phone.trim()}${emailLine ? `\n• Email: ${data.email?.trim()}` : ""}\n• Interested In: ${data.interestedIn}\n\nMessage:\n${data.message.trim()}\n\nThank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

