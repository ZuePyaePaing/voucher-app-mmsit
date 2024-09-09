import { create } from "zustand";
const useFaqStore = create((set) => ({
  faqDatas: [
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a versatile programming language used to create interactive and dynamic web content.",
    },
    {
      id: 2,
      question: "What is an array?",
      answer:
        "An array is a data structure in JavaScript that can hold multiple values in a single variable.",
    },
    {
      id: 3,
      question: "How do I declare a variable in JavaScript?",
      answer:
        "You can declare a variable using 'var', 'let', or 'const' keywords. Example: let name = 'John';",
    },
    {
      id: 4,
      question: "What is the difference between 'let' and 'var'?",
      answer:
        "'let' is block-scoped, while 'var' is function-scoped. 'let' is generally preferred in modern JavaScript.",
    },
    {
      id: 5,
      question: "What is a function in JavaScript?",
      answer:
        "A function is a block of code designed to perform a particular task. It is executed when it is invoked (called).",
    },
    {
      id: 6,
      question: "What is a closure in JavaScript?",
      answer:
        "A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables.",
    },
    {
      id: 7,
      question: "What is the DOM?",
      answer:
        "The DOM (Document Object Model) is an interface that allows scripts to update the content, structure, and style of a document while it is being viewed.",
    },
  ],

}));

export default useFaqStore;
