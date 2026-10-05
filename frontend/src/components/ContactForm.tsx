import { useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { services } from "../data/services";
import { site } from "../data/site";
import { sendContactMessage, type ContactMessage, type SendResult } from "../lib/contact";
import "./ContactForm.css";

const budgets = ["Under $10k", "$10k – $50k", "$50k – $100k", "$100k+", "Not sure yet"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<keyof ContactMessage, string>>;

const validate = (values: ContactMessage): Errors => {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please tell us your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 20)
    errors.message = "Please share a little more detail (at least 20 characters).";
  return errors;
};

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const preselectedService =
    services.find((s) => s.slug === searchParams.get("service"))?.title ?? "";
  const initialValues: ContactMessage = {
    name: "",
    email: "",
    company: "",
    service: preselectedService,
    budget: "",
    message: "",
  };

  const [values, setValues] = useState<ContactMessage>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [result, setResult] = useState<SendResult | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof ContactMessage;
    setValues((current) => ({ ...current, [name]: e.target.value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) return; // Only bots fill in the hidden field.

    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitting(true);
    setSubmitError(false);
    try {
      setResult(await sendContactMessage(values));
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldProps = (name: keyof ContactMessage) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  const fieldError = (name: keyof ContactMessage) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="field__error">
        <AlertCircle aria-hidden="true" />
        {errors[name]}
      </p>
    );

  if (result) {
    return (
      <div className="contact-form contact-form--done" role="status">
        <span className="contact-form__done-icon">
          <CheckCircle2 aria-hidden="true" />
        </span>
        <h2>{result === "sent" ? "Thank you — message received!" : "Almost there!"}</h2>
        <p>
          {result === "sent"
            ? `We'll get back to you at ${values.email} within one business day.`
            : `We've opened your email app with your message ready to go — just press send. You can also reach us directly at ${site.email}.`}
        </p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setValues(initialValues);
            setResult(null);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__header">
        <h2>Tell us about your project</h2>
        <p>Fields marked * are required.</p>
      </div>

      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="contact-name">Full name *</label>
          <input type="text" autoComplete="name" placeholder="Jane Smith" {...fieldProps("name")} />
          {fieldError("name")}
        </div>
        <div className="field">
          <label htmlFor="contact-email">Work email *</label>
          <input
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            {...fieldProps("email")}
          />
          {fieldError("email")}
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-company">Company</label>
        <input
          type="text"
          autoComplete="organization"
          placeholder="Your company"
          {...fieldProps("company")}
        />
      </div>

      <div className="contact-form__row">
        <div className="field">
          <label htmlFor="contact-service">I'm interested in</label>
          <select {...fieldProps("service")}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="contact-budget">Estimated budget</label>
          <select {...fieldProps("budget")}>
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-message">Project details *</label>
        <textarea
          rows={5}
          placeholder="What are you building, what problem are you solving, and what's your timeline?"
          {...fieldProps("message")}
        />
        {fieldError("message")}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="contact-form__trap" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {submitError && (
        <p className="contact-form__alert" role="alert">
          <AlertCircle aria-hidden="true" />
          Something went wrong sending your message. Please try again, or email us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <button type="submit" className="btn btn--primary btn--lg contact-form__submit" disabled={submitting}>
        {submitting ? (
          <>
            <LoaderCircle className="contact-form__spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Send message <Send aria-hidden="true" />
          </>
        )}
      </button>
      <p className="contact-form__privacy">
        We'll only use your details to respond to your enquiry. No spam, ever.
      </p>
    </form>
  );
};

export default ContactForm;
