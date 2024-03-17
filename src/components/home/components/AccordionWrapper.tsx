import { type FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion';

interface IAccordionWrapperProps {
  items: {
    itemNo: number;
    triggerText: string;
    contentText: string;
  }[];
}

const AccordionWrapper: FC<IAccordionWrapperProps> = ({ items }) => {
  return (
    <Accordion type='single' collapsible>
      {items.map((item) => (
        <AccordionItem key={item.itemNo} value={`item-${item.itemNo}`}>
          <AccordionTrigger>{item.triggerText}</AccordionTrigger>
          <AccordionContent>{item.contentText}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionWrapper;
