"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { interestedInOptions } from "@/data/contact";
import type { InterestedInOption } from "@/types/contact";
import {
  createWhatsAppContactFormUrl,
  PRIMARY_WHATSAPP_NUMBER,
} from "@/utils/whatsapp";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  interestedIn: InterestedInOption | "";
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  interestedIn?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    interestedIn: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReady, setSubmissionReady] = useState(false);
  const [preparedUrl, setPreparedUrl] = useState<string>("");

  // Validation logic
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "fullName": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your full name.";
        if (trimmed.length < 2) return "Full name must be at least 2 characters.";
        return undefined;
      }
      case "phone": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your phone number.";
        // Indian phone number regex: allows optional +91 or 0 prefix followed by 10 digits starting with 6-9
        const clean = trimmed.replace(/[\s\-()]/g, "");
        const indianPhoneRegex = /^(?:\+?91|0)?[6-9]\d{9}$/;
        if (!indianPhoneRegex.test(clean)) {
          return "Please enter a valid 10-digit Indian mobile number (e.g. +91 9551080470).";
        }
        return undefined;
      }
      case "email": {
        const trimmed = value.trim();
        if (!trimmed) return undefined; // Email is optional
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(trimmed)) {
          return "Please enter a valid email address (e.g. name@example.com).";
        }
        return undefined;
      }
      case "interestedIn": {
        if (!value) return "Please select a product or service category.";
        return undefined;
      }
      case "message": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your message or enquiry.";
        if (trimmed.length < 10) return "Message must be at least 10 characters long.";
        return undefined;
      }
      default:
        return undefined;
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent duplicate submissions

    // Mark all as touched
    const allTouched: Record<string, boolean> = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp transmission URL with all validated data
    const url = createWhatsAppContactFormUrl({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      interestedIn: formData.interestedIn || "General Enquiry",
      message: formData.message,
    });

    // Provide smooth interactive state transition
    setTimeout(() => {
      setPreparedUrl(url);
      setSubmissionReady(true);
      setIsSubmitting(false);
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      interestedIn: "",
      message: "",
    });
    setErrors({});
    setTouched({});
    setSubmissionReady(false);
    setPreparedUrl("");
  };

  return (
    <div
      id="enquiry-form-section"
      className="relative overflow-hidden rounded-xs border border-neutral-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 hover:border-[#004AAD]/40"
    >
      {/* Decorative Brand Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#004AAD] via-[#FFC30C] to-[#004AAD]" />

      <AnimatePresence mode="wait">
        {!submissionReady ? (
          <motion.div
            key="form-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#004AAD]/20 bg-[#EEF4FD] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#004AAD] shadow-2xs mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFC30C]" />
                Direct Enquiry Form
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-[#151717]">
                Send an Enquiry to Our Team
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#525252] font-light leading-relaxed">
                Fill in your details below for an accurate quote, catalogue request, or on-site consultation.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#151717] mb-1.5"
                  >
                    Full Name <span className="text-[#004AAD]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={touched.fullName && !!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Rajesh Kumar"
                    className={`w-full h-11 px-3.5 rounded-xs border text-base sm:text-sm text-[#151717] placeholder:text-neutral-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#004AAD]/20 focus:border-[#004AAD] ${
                      touched.fullName && errors.fullName
                        ? "border-red-500 bg-red-50/20"
                        : "border-neutral-300 hover:border-neutral-400"
                    }`}
                  />
                  {touched.fullName && errors.fullName && (
                    <p
                      id="fullName-error"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#151717] mb-1.5"
                  >
                    Phone Number <span className="text-[#004AAD]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    aria-required="true"
                    aria-invalid={touched.phone && !!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 98765 43210"
                    className={`w-full h-11 px-3.5 rounded-xs border text-base sm:text-sm font-mono text-[#151717] placeholder:text-neutral-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#004AAD]/20 focus:border-[#004AAD] ${
                      touched.phone && errors.phone
                        ? "border-red-500 bg-red-50/20"
                        : "border-neutral-300 hover:border-neutral-400"
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p
                      id="phone-error"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email Address & Interested In */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address (Optional) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#151717] mb-1.5"
                  >
                    Email Address <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@example.com"
                    className={`w-full h-11 px-3.5 rounded-xs border text-base sm:text-sm text-[#151717] placeholder:text-neutral-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#004AAD]/20 focus:border-[#004AAD] ${
                      touched.email && errors.email
                        ? "border-red-500 bg-red-50/20"
                        : "border-neutral-300 hover:border-neutral-400"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p
                      id="email-error"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Interested In */}
                <div>
                  <label
                    htmlFor="interestedIn"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#151717] mb-1.5"
                  >
                    Interested In <span className="text-[#004AAD]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      required
                      aria-required="true"
                      aria-invalid={touched.interestedIn && !!errors.interestedIn}
                      aria-describedby={errors.interestedIn ? "interestedIn-error" : undefined}
                      value={formData.interestedIn}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full h-11 px-3.5 rounded-xs border text-base sm:text-sm text-[#151717] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#004AAD]/20 focus:border-[#004AAD] cursor-pointer appearance-none ${
                        touched.interestedIn && errors.interestedIn
                          ? "border-red-500 bg-red-50/20"
                          : "border-neutral-300 hover:border-neutral-400"
                      }`}
                    >
                      <option value="" disabled>
                        Select a category...
                      </option>
                      {interestedInOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {/* Select arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                  {touched.interestedIn && errors.interestedIn && (
                    <p
                      id="interestedIn-error"
                      className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.interestedIn}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#151717] mb-1.5"
                >
                  Message &amp; Requirements <span className="text-[#004AAD]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-required="true"
                  aria-invalid={touched.message && !!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Describe your window dimensions, room requirements, fabric preferences, or installation timeline..."
                  className={`w-full p-3.5 rounded-xs border text-base sm:text-sm text-[#151717] placeholder:text-neutral-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#004AAD]/20 focus:border-[#004AAD] resize-y ${
                    touched.message && errors.message
                      ? "border-red-500 bg-red-50/20"
                      : "border-neutral-300 hover:border-neutral-400"
                  }`}
                />
                {touched.message && errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 flex items-center gap-1 text-xs text-red-600 font-medium"
                  >
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submission Notice & Buttons */}
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                    rightIcon={<Send className="h-4 w-4" />}
                  >
                    Submit Enquiry
                  </Button>

                  <a
                    href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline min-h-[44px]"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    <span>Or chat instantly on WhatsApp</span>
                  </a>
                </div>

                <p className="mt-3 text-[11px] text-neutral-500 leading-normal">
                  Your privacy is respected. Submissions are processed directly with Mohammad Al Asath for immediate customer support.
                </p>
              </div>
            </form>
          </motion.div>
        ) : (
          /* Submission Prepared / WhatsApp Fallback State */
          <motion.div
            key="success-fallback-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="py-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800">
                  Ready for Immediate Delivery
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-[#151717] mt-1">
                  Enquiry Form Prepared
                </h3>
              </div>
            </div>

            {/* Architecture Explanation Banner */}
            <div className="rounded-xs border border-emerald-200 bg-emerald-50/50 p-4 sm:p-5 mb-6 text-xs text-neutral-700 leading-relaxed space-y-2">
              <p className="font-medium text-emerald-950">
                To guarantee zero communication delay and ensure your enquiry is never caught in automated spam filters, our team receives all custom requests directly via official WhatsApp.
              </p>
              <p className="text-neutral-600">
                Your enquiry details have been securely prefilled and formatted. Click below to open WhatsApp and send your message directly to <strong>Mohammad Al Asath (+91 9551080470)</strong>.
              </p>
            </div>

            {/* Formatted Summary Box */}
            <div className="rounded-xs border border-neutral-200 bg-[#F8F9FC] p-4 sm:p-5 mb-6 text-xs space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#004AAD]">
                Enquiry Summary:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#151717]">
                <div>
                  <span className="text-neutral-500">Name:</span> <strong>{formData.fullName}</strong>
                </div>
                <div>
                  <span className="text-neutral-500">Phone:</span> <strong className="font-mono">{formData.phone}</strong>
                </div>
                {formData.email && (
                  <div>
                    <span className="text-neutral-500">Email:</span> {formData.email}
                  </div>
                )}
                <div>
                  <span className="text-neutral-500">Interested In:</span> <strong>{formData.interestedIn}</strong>
                </div>
              </div>
              <div className="pt-2 border-t border-neutral-200/80">
                <span className="text-neutral-500 block mb-1">Message:</span>
                <p className="italic text-[#525252] bg-white p-3 rounded-xs border border-neutral-200/60 font-sans">
                  &ldquo;{formData.message}&rdquo;
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={preparedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-600 border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 focus-visible:ring-emerald-500 shadow-md"
                  leftIcon={<MessageCircle className="h-5 w-5" />}
                  rightIcon={<ExternalLink className="h-4 w-4" />}
                >
                  Send via WhatsApp
                </Button>
              </a>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleReset}
                className="w-full sm:w-auto"
                leftIcon={<RotateCcw className="h-4 w-4" />}
              >
                Submit Another Enquiry
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
