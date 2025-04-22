import React from 'react';
import { SlCalender } from "react-icons/sl";


  //Blogs page design dammy data useing
const blogData = [
  {
    question: "What is useState and how does it work in React?",
    answer: "useState is a React Hook that allows you to add state to functional components. It returns an array with the current state value and a function to update it. When the state changes, the component re-renders to reflect the new value.",
    date: "April 21, 2025",
  },
  {
    question: "What is the purpose of useEffect in React?",
    answer: "useEffect is used to perform side effects in functional components, like data fetching, DOM manipulation, and subscriptions. It runs after the render and can be customized to run on specific dependency changes.",
    date: "April 21, 2025",
  },
  {
    question: "What is a custom hook in React and when should you use one?",
    answer: "A custom hook is a JavaScript function that starts with 'use' and allows you to reuse logic between components. You should use one when you find yourself repeating complex logic in multiple components.",
    date: "April 21, 2025",
  },
  {
    question: "Difference between controlled and uncontrolled components. Which one is better?",
    answer: "Controlled components have their form data managed by React state, while uncontrolled components use refs to access values. Controlled components are generally better for complex forms due to better control and validation.",
    date: "April 21, 2025",
  },
  {
    question: "Tell us something about useFormStatus() in React.",
    answer: "useFormStatus() is a hook used with React's form actions to check whether a form is currently being submitted. It’s helpful for managing UI feedback during form submissions.",
    date: "April 21, 2025",
  },
];
 
//Blogs page design
const Blogs = () => {
  return (
    <div className="max-w-3xl mx-auto p-4  space-y-6">

      {/* //Page title */}
      <h1 className="text-3xl font-bold mb-4 text-center">📘 Blog Articles</h1>


      {/* //All data show in the array so crate card */}
      {blogData.map((item, index) => (
        <div key={index} className="rounded-2xl shadow-lg p-4">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{item.question}</h2>
            <hr className="border-dashed border-gray-300" />
            <h1 className='text-blue-600'>Answer:</h1>
            <p className="text-gray-700">{item.answer}</p>
            <hr className="border-dashed border-gray-300" />
            <div className="flex items-center gap-2 text-sm text-gray-500">

              {/* icon add react-icons */}
              <SlCalender className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
