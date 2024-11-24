import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section id="faqs" className="w-full max-w-5xl mx-auto">
      <h1 className="text-3xl font-heading text-center mb-3 md:mb-5 lg:mb-8">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-left font-semibold text-base md:text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="md:text-lg lg:text-xl text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

const faqs = [
  {
    question: "What is Kleio?",
    answer:
      "Kleio is an AI-powered SaaS tool that automatically transforms your Google Meet conversations into insightful summaries, analytics, and presentations.",
  },
  {
    question: "How does Kleio work?",
    answer:
      "Kleio uses a Chrome extension to capture transcripts from your Google Meet sessions. These transcripts are then processed by our AI system to generate summaries, analytics, and slides, which you can access through our web app.",
  },
  {
    question: "Is Kleio compatible with platforms other than Google Meet?",
    answer:
      "Currently, Kleio only supports Google Meet. However, we're working on expanding our compatibility to other video conferencing platforms in the future.",
  },
  {
    question: "How do I access my meeting summaries and slides?",
    answer:
      "You can access all your meeting summaries, analytics, and AI-generated slides by signing in to the Kleio web app using your Google account.",
  },
  {
    question: "Is my meeting data secure?",
    answer:
      "Yes, we take data security very seriously. All meeting data is processed and stored securely in our cloud infrastructure, and we adhere to strict privacy policies.",
  },
  {
    question: "Do I need to take notes during the meeting?",
    answer:
      "With Kleio, you can focus on the conversation without worrying about taking notes. Our AI will capture and summarize the key points for you.",
  },
];