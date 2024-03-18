import { type FC } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './Accordion'

interface IAccordionWrapperProps {
	items: {
		itemNo: number
		triggerText: string
		contentText: string
	}[]
}

const AccordionWrapper: FC<IAccordionWrapperProps> = ({ items }) => {
	return (
		<Accordion type="single" collapsible>
			{items.map((item) => (
				<AccordionItem
					className="px-4 transition-all data-[state=open]:rounded-xl data-[state=open]:bg-primary-bg-component"
					key={item.itemNo}
					value={`item-${item.itemNo}`}
				>
					<AccordionTrigger className="text-start">{item.triggerText}</AccordionTrigger>
					<AccordionContent>{item.contentText}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

export default AccordionWrapper
