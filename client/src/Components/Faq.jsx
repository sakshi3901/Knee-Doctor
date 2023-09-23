import { useState } from "react";

export default function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div onClick={toggleOpen}>
      <hr />
      <div className="question">
        <img src="assets/plus.svg" alt="plus" />
        {question}
      </div>
      {isOpen && (
        <div className="answer" style={{ paddingLeft: "1rem" }}>
          <img src="assets/minus.svg" alt="minus" />
          {answer}
        </div>
      )}
    </div>
  );
}
