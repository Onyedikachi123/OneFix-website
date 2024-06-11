"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="pb-4">
      <header
        className="flex justify-between items-center p-5 cursor-pointer select-none bg-textlightGray rounded-md"
        onClick={toggleOpen}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </header>
      {isOpen && (
        <div className="p-5">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
