import { Clock, Globe2, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import ContactForm from "../components/ContactForm";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";
import "./pages.css";

const nextSteps = [
  "We review your message and reply within one business day.",
  "A free, no-obligation consultation call to understand your goals.",
  "A tailored proposal with approach, team, timeline and cost.",
];

const ContactPage = () => {
  usePageMeta(
    "Contact us",
    "Tell us about your project. Eversunny Technologies replies to every enquiry within one business day."
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about your <span className="accent">project</span>.
          </>
        }
        lead="Tell us a little about what you're building or the problem you need solved. We'll get back to you within one business day."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section section--white">
        <div className="container contact-layout">
          <Reveal className="contact-info">
            <ul className="contact-info__list">
              <li className="contact-info__item">
                <span className="icon-badge">
                  <Mail aria-hidden="true" />
                </span>
                <div>
                  <h2>Email us</h2>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              {site.phone && (
                <li className="contact-info__item">
                  <span className="icon-badge">
                    <Phone aria-hidden="true" />
                  </span>
                  <div>
                    <h2>Call us</h2>
                    <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
                  </div>
                </li>
              )}
              {site.address && (
                <li className="contact-info__item">
                  <span className="icon-badge">
                    <MapPin aria-hidden="true" />
                  </span>
                  <div>
                    <h2>Visit us</h2>
                    <p>{site.address}</p>
                  </div>
                </li>
              )}
              <li className="contact-info__item">
                <span className="icon-badge">
                  <Clock aria-hidden="true" />
                </span>
                <div>
                  <h2>Response time</h2>
                  <p>Within one business day, Monday to Friday.</p>
                </div>
              </li>
              <li className="contact-info__item">
                <span className="icon-badge">
                  <Globe2 aria-hidden="true" />
                </span>
                <div>
                  <h2>Across time zones</h2>
                  <p>We schedule calls at a time that works for you.</p>
                </div>
              </li>
            </ul>

            <div className="next-steps">
              <h2 className="next-steps__title">What happens next?</h2>
              <ol>
                {nextSteps.map((step, i) => (
                  <li key={step}>
                    <span className="next-steps__number">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
