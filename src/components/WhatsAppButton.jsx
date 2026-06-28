import React from 'react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const phoneNumber = '919081460314';
  const textMessage = 'Hello AnanTechsol, I visited your portfolio website and am interested in discussing a software project!';
  const encodedMessage = encodeURIComponent(textMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Ripple Rings */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping -z-10 scale-125" style={{ animationDuration: '2s' }} />
      <div className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping -z-10 scale-150" style={{ animationDuration: '3s' }} />

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-400 transition-colors cursor-pointer group"
        aria-label="Contact AnanTechsol on WhatsApp"
        id="whatsapp-fab"
      >
        {/* SVG WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        {/* Dynamic '1' Notification Badge from Mockup Reference 2 */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white ring-2 ring-white animate-bounce shadow">
          1
        </span>

        {/* Hover Label Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md border border-slate-800">
          Chat with us on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
