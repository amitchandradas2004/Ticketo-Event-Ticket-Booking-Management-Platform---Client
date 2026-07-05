"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

// Edit this array with your own testimonials
const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Attended Coldplay — Music of the Spheres",
    quote:
      "Booking was ridiculously smooth. Got my seat, got my QR code, walked straight in. No queues, no printed paper, nothing.",
    rating: 5,
  },
  {
    name: "Tanvir Ahmed",
    role: "Attended Dhaka Comedy Fest",
    quote:
      "Had to move my ticket to a friend last minute and the transfer took under a minute. Genuinely the best booking experience I've had.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Attended Champions League Screening Night",
    quote:
      "The event got rescheduled and Ticketo notified me before I even checked my email. Refund policy was crystal clear too.",
    rating: 4,
  },
  {
    name: "Farhan Kabir",
    role: "Attended Dhaka Startup Summit",
    quote:
      "Clean checkout, no hidden fees, and the e-ticket looked legit enough that security didn't even blink twice at the gate.",
    rating: 5,
  },
];

// Edit this array with your own partner / venue names
const partners = [
  "Bengal Arena",
  "Army Stadium",
  "Star Cineplex",
  "Radisson Blu",
  "Jamuna Future Park",
  "Dhaka Club",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={0}
          className={
            i < rating
              ? "fill-indigo-500 text-indigo-500 dark:fill-indigo-300 dark:text-indigo-300"
              : "fill-gray-200 text-gray-200 dark:fill-white/15 dark:text-white/15"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (newIndex, dir) => {
    setDirection(dir);
    setIndex((newIndex + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70 px-6 py-8 backdrop-blur-xl sm:rounded-3xl sm:px-10 sm:py-10 dark:border-white/10 dark:bg-white/5">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-indigo-500/5 via-slate-400/5 to-slate-300/5 dark:from-indigo-500/10 dark:via-slate-400/10 dark:to-slate-300/10" />

        <Quote
          size={32}
          strokeWidth={1.5}
          className="relative text-indigo-500/40 dark:text-indigo-300/40"
        />

        <div className="relative min-h-[9rem] sm:min-h-[7rem]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 24 : -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -24 : 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-relaxed dark:text-white/80">
                {current.quote}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-slate-400 text-sm font-semibold text-white">
                  {current.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {current.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-white/50">
                    {current.role}
                  </p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <StarRating rating={current.rating} />
                </div>
              </div>
              <div className="mt-3 sm:hidden">
                <StarRating rating={current.rating} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => goTo(index - 1, -1)}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-indigo-500 dark:bg-indigo-300"
                  : "w-1.5 bg-gray-300 dark:bg-white/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(index + 1, 1)}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:border-white/20 dark:hover:text-white"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function TrustAndProof() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 dark:bg-[#0b0b12]">
      {/* ambient background glow, consistent with rest of the page */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-60 -translate-x-1/2 -translate-y-1/3 rounded-full bg-indigo-600/10 blur-[80px] sm:h-80 sm:w-125 sm:blur-[100px] md:h-125 md:w-175 md:blur-[120px] dark:bg-indigo-600/20" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-3 inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-1 text-xs font-medium uppercase tracking-wider text-gray-500 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white/50">
            Trusted by thousands
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
            Do not just take{" "}
            <span className="bg-linear-to-r from-indigo-600 via-indigo-500 to-slate-400 bg-clip-text text-transparent dark:from-indigo-400 dark:via-indigo-300 dark:to-slate-300">
              our word for it.
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-500 sm:text-base dark:text-white/50">
            Real feedback from real attendees who booked through Ticketo.
          </p>
        </motion.div>

        {/* testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <TestimonialCard />
        </motion.div>

        {/* trusted-by partner strip */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 sm:mt-20"
        >
          <motion.p
            variants={itemVariants}
            className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-gray-400 sm:mb-8 dark:text-white/40"
          >
            Venues & partners who trust Ticketo
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12"
          >
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-sm font-semibold tracking-tight text-gray-400 transition-colors duration-300 hover:text-gray-600 sm:text-base dark:text-white/30 dark:hover:text-white/60"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
