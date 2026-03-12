import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does IGRIS Balteus Construction offer?",
      answer: "We provide comprehensive construction solutions including General Construction, Design & Build, Cost-Plus Construction, Direct-Cost Construction, and Construction Consulting. Our services cover commercial, residential, and industrial projects across Southern Luzon and NCR."
    },
    {
      question: "What makes IGRIS Balteus different from other construction companies?",
      answer: "Our flexi-systemic approach sets us apart. Unlike typical companies with rigid processes, we offer flexible, client-driven solutions customized per project. We provide 5 comprehensive service types with direct client involvement, open communication, clear costing with detailed breakdowns, and a relationship-driven commitment rather than just completion-focused."
    },
    {
      question: "What is the IGRIS Way?",
      answer: "The IGRIS Way is built on COMMITMENT. We've evolved through years of experience, learning from both successes and challenges. We now stand confident, fully trusting our capabilities and our team. Every project reflects our dedication to building not just structures, but lasting relationships founded on trust and excellence."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve Southern Luzon and NCR (National Capital Region). Our projects span across Batangas, Laguna, and surrounding areas, with a focus on delivering premium construction services regardless of project location within our service area."
    },
    {
      question: "What is Design & Build service?",
      answer: "Our Design & Build service provides integrated design and construction deliverables that ensure quality, efficiency, and cost-effectiveness. It's an end-to-end project delivery approach from planning and design to execution and completion, streamlining the entire process under one roof."
    },
    {
      question: "What is Cost-Plus Construction?",
      answer: "Cost-Plus Construction offers flexible pricing with transparent costing and professional project management. This approach provides clients with detailed breakdowns of all costs, eliminating hidden charges and ensuring complete transparency throughout the project."
    },
    {
      question: "What is Direct-Cost Construction?",
      answer: "Direct-Cost Construction is designed for clients who manage their own procurement. We provide IGRIS build expertise and execution while you handle material sourcing and purchasing, offering flexibility for clients who want more control over specific aspects of their project."
    },
    {
      question: "How long has IGRIS Balteus Construction been in business?",
      answer: "Inocencio-Berberabe Construction started as a small, family-run contracting service in 2022, focused on residential builds in Batangas. Through hard work and a reputation for delivering quality work, we evolved into IGRIS Balteus Construction, now a full-service construction firm."
    },
    {
      question: "What are your core values?",
      answer: "Our core values are: Commitment - dedicated to delivering on our promises; Strength - built with resilience to handle projects of any scale; Integrity - honest, transparent practices; Innovation - embracing modern techniques; Loyalty - building lasting partnerships; and Client-First Mindset - your vision drives every decision we make."
    },
    {
      question: "What is your mission and vision?",
      answer: "Our Mission: To deliver exceptional construction solutions that exceed client expectations through unwavering commitment, innovative practices, and transparent partnerships. Our Vision: To be the most trusted and sought-after construction partner in Southern Luzon and beyond, recognized for our integrity, innovation, and commitment to building a better future."
    },
    {
      question: "Do you offer industrial construction services?",
      answer: "Yes, we provide specialized industrial construction and maintenance services tailored to your operational needs. Our industrial expertise includes safety and precision in every detail, ensuring projects meet the highest standards for commercial and industrial facilities."
    },
    {
      question: "How do you ensure cost transparency?",
      answer: "Unlike companies with hidden charges and vague costing, we provide clear costing with detailed breakdowns for every aspect of your project. Whether through our Cost-Plus or other service models, you'll always know exactly where your investment is going."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 tracking-widest text-sm">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Learn more about IGRIS Balteus Construction, our services, and how we
            build lasting partnerships through commitment and excellence.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="text-orange-500" size={24} />
                  ) : (
                    <Plus className="text-orange-500" size={24} />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl mb-4">
            "We are built on COMMITMENT"
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            When IGRIS Balteus Construction says this, it's not just a slogan.
            Through years of experience, successes, and growth, we now stand
            confident — fully trusting our capabilities and our team.
          </p>
          <p className="text-sm opacity-80">
            — General Manager, Engr. Galien Gerome B. Inocencio
          </p>
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
