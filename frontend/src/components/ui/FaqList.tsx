import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "../../data/services";
import "./ui.css";

const FaqList = ({ faqs }: { faqs: FAQ[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const questionId = `${baseId}-q${i}`;
        const answerId = `${baseId}-a${i}`;
        return (
          <div key={faq.question} className={`faq-item ${isOpen ? "is-open" : ""}`}>
            <h3 className="faq-item__heading">
              <button
                id={questionId}
                className="faq-item__button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span>{faq.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  <Plus />
                </span>
              </button>
            </h3>
            <div id={answerId} role="region" aria-labelledby={questionId} className="faq-item__panel">
              <div className="faq-item__panel-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqList;
