"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Flame } from "lucide-react";

// Swap this with your real event data / API fetch
const events = [
  {
    id: 1,
    title: "Coke Studio Bangla Live",
    category: "Concert",
    date: "Aug 14, 2026",
    location: "Army Stadium, Dhaka",
    price: "৳1,200",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop",
    trending: true,
  },
  {
    id: 2,
    title: "Dhaka Comedy Nights",
    category: "Comedy",
    date: "Aug 20, 2026",
    location: "Bashundhara Convention Hall",
    price: "৳800",
    image:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop",
    trending: false,
  },
  {
    id: 3,
    title: "Startup Summit 2026",
    category: "Conference",
    date: "Sep 02, 2026",
    location: "ICCB, Dhaka",
    price: "৳2,500",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    trending: true,
  },
  {
    id: 4,
    title: "Premier Futsal League Finals",
    category: "Sports",
    date: "Sep 10, 2026",
    location: "Bir Shreshtha Stadium",
    price: "৳500",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop",
    trending: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeaturedEvents() {
  return (
    <section className="relative w-full overflow-hidden bg-indigo-100 py-16 px-4 transition-colors duration-300 dark:bg-[#0B0F2E] sm:py-24 sm:px-6">
      {/* Ambient glow circles */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-indigo-400/10 blur-[100px] dark:bg-indigo-600/25 sm:h-96 sm:w-96 sm:blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-indigo-400/10 blur-[100px] dark:bg-indigo-500/25 sm:h-96 sm:w-96 sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-xs font-medium tracking-wide text-indigo-600 dark:border-indigo-400/20 dark:text-indigo-300">
              Happening Soon
            </span>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
              Trending Events
            </h2>
            <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              The events people in your city are grabbing tickets for right now.
            </p>
          </div>

          <button className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200">
            View all events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Event cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {events.map((event) => (
            <motion.article
              key={event.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-indigo-50 backdrop-blur-xl transition-colors hover:border-indigo-400/40 dark:border-indigo-400/10 dark:bg-indigo-500/6 dark:hover:border-indigo-400/30"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden sm:h-44">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/10 to-transparent dark:from-[#0B0F2E]/90 dark:via-[#0B0F2E]/10" />

                {event.trending && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-indigo-500/90 px-2.5 py-1 text-[11px] font-medium text-white shadow-lg shadow-indigo-500/30">
                    <Flame className="h-3 w-3" />
                    Trending
                  </span>
                )}

                <span className="absolute right-3 top-3 rounded-full border border-slate-300 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-700 backdrop-blur-sm dark:border-indigo-400/20 dark:bg-[#0B0F2E]/60 dark:text-slate-200">
                  {event.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3 p-4 sm:p-5">
                <h3 className="text-sm font-semibold text-slate-900 line-clamp-1 dark:text-white sm:text-base">
                  {event.title}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 shrink-0 text-indigo-500 dark:text-indigo-400" />
                    <span className="truncate">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-indigo-500 dark:text-indigo-400" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {event.price}
                  </span>
                  <button className="rounded-full bg-indigo-500 px-3.5 py-1.5 text-xs font-medium text-white transition hover:bg-indigo-400 sm:px-4">
                    Buy Ticket
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
