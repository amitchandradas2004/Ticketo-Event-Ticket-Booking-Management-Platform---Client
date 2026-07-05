"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

// Edit this array with your own Ticketo FAQ content
const faqs = [
  {
    question: "How do I book a ticket on Ticketo?",
    answer:
      "Search for your event, pick your preferred seats or ticket tier, and check out securely. Your e-ticket lands in your email and your Ticketo account instantly — no printing required.",
  },
  {
    question: "Can I get a refund if I cancel my booking?",
    answer:
      "Yes. Refund eligibility depends on the event organizer's policy, shown on the event page before you book. Eligible refunds are processed back to your original payment method within 5–7 business days.",
  },
  {
    question: "What happens if an event is postponed or cancelled?",
    answer:
      "You'll get an email and in-app notification right away. For cancelled events, tickets are automatically refunded. For postponed events, your ticket stays valid for the new date unless you request a refund.",
  },
  {
    question: "Is my payment information safe with Ticketo?",
    answer:
      "Absolutely. We never store your card details on our servers — all payments are processed through PCI-DSS compliant providers with end-to-end encryption.",
  },
  {
    question: "Can I transfer my ticket to someone else?",
    answer:
      "Yes, most tickets can be transferred from the 'My Tickets' section of your account. The recipient will get a new e-ticket under their name, and your original ticket will be deactivated.",
  },
  {
    question: "Do I need to print my ticket?",
    answer:
      "No. Every ticket comes with a scannable QR code that works straight from your phone. Just show it at the entry gate for a quick, contactless check-in.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
    >
      {/* subtle gradient wash, brighter when open */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"
        }`}
      />

      <button
        onClick={onClick}
        className="relative flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base font-medium transition-colors duration-300 sm:text-lg ${
            isOpen ? "text-white" : "text-white/85"
          }`}
        >
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            isOpen
              ? "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-300"
              : "border-white/15 bg-white/5 text-white/60"
          }`}
        >
          <Plus size={16} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm leading-relaxed text-white/60 sm:text-[15px]">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Frequently() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0b0b12] px-4 py-24 sm:px-6">
      {/* ambient background glow, consistent with Ticketo's hero */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-wider text-white/50 backdrop-blur-md">
            FAQ
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Got questions?{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              We've got answers.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/50 sm:text-base">
            Everything you need to know about booking, refunds, and getting into
            your next event with Ticketo.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
