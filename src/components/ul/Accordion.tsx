import React, { useState } from 'react';
import IconBxDownArrowAlt from '../../assets/icons/ArrowDown';

interface AccordionProps {
  title: string;
  summary?: React.ReactNode;
  classes?: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, classes,  summary, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-start w-full mb-10">
          {
            isOpen ? (
                  <>
                      <div className="w-full h-full flex">
                        <div className={`h-full w-2 grow ${classes}`}></div>
                           <div className="w-full">
                              <button
                                onClick={toggleAccordion}
                                className="flex items-center w-full p-1 font-medium text-left text-gray-500 border border-gray-100 rounded-tl-md focus:ring-2 focus:ring-gray-200 hover:bg-gray-100"
                                data-accordion-target="#accordion-collapse-body-1"
                                aria-expanded="true" 
                                aria-controls="accordion-collapse-body-1"
                            >
                             {summary}
                            </button>
                           </div>
                      </div>
                 </>
            ) :  ( 
                    <>
                       <div className="w-full flex">
                       <div className="w-full">
                          <button
                            onClick={toggleAccordion}
                            className="flex items-center w-full p-1 font-medium text-left text-gray-500"
                            data-accordion-target="#accordion-collapse-body-1"
                            aria-expanded="true" 
                            aria-controls="accordion-collapse-body-1"
                         >
                         <IconBxDownArrowAlt/>
                         {title}
                        </button>
                        <div className="flex w-full h-full">
                           <div className={`h-full w-2 ${classes}`}></div>
                           <div className="w-full">{children}</div>
                       </div>
                       </div>
                      </div>
                 </>)
          }


    </div>
  );
};

export default Accordion;
