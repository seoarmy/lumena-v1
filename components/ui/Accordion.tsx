import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { IconChevronDown } from '@tabler/icons-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-background/20 last:border-b-0">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 px-4 md:px-6 text-left text-base font-medium text-background/90 hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
      >
        <h4 className="pr-4">{title}</h4>
        <IconChevronDown
          className={cn('h-5 w-5 transition-transform duration-300 shrink-0', isOpen ? 'rotate-180' : '')}
        />
      </button>
      <div
        className={cn(
          'grid grid-rows-[0fr] transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr]' : ''
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-5 px-4 md:px-6 text-background/70">
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;