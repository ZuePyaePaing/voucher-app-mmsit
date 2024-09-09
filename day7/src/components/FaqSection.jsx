import React, { useState } from "react";
import useFaqStore from "../store/useFaq.store";
import FaqItem from "./FaqItem";

const FaqSection = () => {
  const { faqDatas } = useFaqStore(); 
  const [active, setActive] = useState(null);

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-500 rounded-md p-4">
      <h2 className="text-white text-3xl font-bold">FAQs</h2>
      {faqDatas.map((faq) => (
        <FaqItem
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          active={active}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default FaqSection;
