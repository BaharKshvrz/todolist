import React, { useState } from 'react';
import IconBxDownArrowAlt from '../../assets/icons/ArrowDown';
import IconArrowRightShort from '../../assets/icons/ArrowRight';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
           onClick={toggleAccordion}
           className="flex items-center justify-start w-full p-3 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
           data-accordion-target="#accordion-collapse-body-1"
           aria-expanded="true" 
           aria-controls="accordion-collapse-body-1"
         >
        { isOpen ? <IconBxDownArrowAlt/> : <IconArrowRightShort/> }
        { title }
       </button>
        {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
