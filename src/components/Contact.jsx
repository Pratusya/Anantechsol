import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { TRANSLATIONS } from '../translations';

export default function Contact({ darkMode, language }) {
  const t = TRANSLATIONS[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = language === 'en' ? 'Please enter your name.' : 'कृपया अपना नाम दर्ज करें।';
    }
    if (!formData.email.trim()) {
      tempErrors.email = language === 'en' ? 'Please enter your email.' : 'कृपया अपना ईमेल पता दर्ज करें।';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = language === 'en' ? 'Please enter a valid email address.' : 'कृपया एक मान्य ईमेल पता दर्ज करें।';
    }
    if (!formData.message.trim()) {
      tempErrors.message = language === 'en' ? 'Please write a message description.' : 'कृपया एक संदेश विवरण लिखें।';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');

    // Simulate server post
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
      }`}
    >
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8" id="contact-info">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-indigo-500" />
                <span className="text-sm font-semibold tracking-wider text-indigo-500 uppercase font-mono">
                  {t.contact.tag}
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                {t.contact.title}
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t.contact.sub}
              </p>
            </div>

            {/* Quick Contact Info blocks */}
            <div className="space-y-6" id="contact-channels">
              {/* Phone */}
              <div className="flex gap-4 items-start group">
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl transition-colors ${
                  darkMode ? 'bg-slate-800 text-cyan-400 group-hover:bg-slate-750' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
                }`}>
                  <LucideIcon name="Phone" size={18} />
                </div>
                <div>
                  <p className={`text-xs font-mono uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    href="tel:+919081460314"
                    className={`text-base sm:text-lg font-bold hover:underline transition-colors ${
                      darkMode ? 'text-white hover:text-cyan-300' : 'text-slate-900 hover:text-indigo-600'
                    }`}
                  >
                    +91 90814 60314
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-4 items-start group">
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl transition-colors ${
                  darkMode ? 'bg-slate-800 text-cyan-400 group-hover:bg-slate-750' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
                }`}>
                  <LucideIcon name="Instagram" size={18} />
                </div>
                <div>
                  <p className={`text-xs font-mono uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href="https://instagram.com/anantechsol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-base sm:text-lg font-bold hover:underline transition-colors ${
                      darkMode ? 'text-white hover:text-cyan-300' : 'text-slate-900 hover:text-indigo-600'
                    }`}
                  >
                    @anantechsol
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start group">
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl transition-colors ${
                  darkMode ? 'bg-slate-800 text-cyan-400 group-hover:bg-slate-750' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
                }`}>
                  <LucideIcon name="MapPin" size={18} />
                </div>
                <div>
                  <p className={`text-xs font-mono uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {t.contact.locLabel}
                  </p>
                  <address className={`text-base font-semibold not-italic leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {t.contact.officeText}
                  </address>
                </div>
              </div>
            </div>

            {/* Quick Notice Badge */}
            <div className={`p-4 rounded-xl border text-xs font-mono leading-relaxed ${
              darkMode ? 'bg-slate-950/40 border-slate-850 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}>
              {language === 'en' 
                ? "⚡ Typical response time is under 12 hours. Let's align your scope!" 
                : "⚡ प्रतिक्रिया का समय आमतौर पर 12 घंटे से कम है। आइए आपके काम को शुरू करें!"}
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className={`p-6 sm:p-10 rounded-3xl border transition-colors ${
              darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200/80 shadow-md'
            }`}>
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                    id="contact-success-box"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mb-2">
                      <LucideIcon name="CheckCircle2" size={32} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className={`font-display text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {language === 'en' ? 'Message Received!' : 'संदेश प्राप्त हुआ!'}
                      </h3>
                      <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-md mx-auto`}>
                        {t.contact.formSuccess}
                      </p>
                    </div>

                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/10 cursor-pointer"
                    >
                      {language === 'en' ? 'Send Another Message' : 'दूसरा संदेश भेजें'}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    noValidate
                    id="contact-form"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className={`block text-xs font-mono uppercase tracking-wider font-semibold mb-2 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {t.contact.formName}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={language === 'en' ? 'e.g. Arpan Patel' : 'जैसे. अर्पण पटेल'}
                        disabled={status === 'submitting'}
                        className={`w-full px-4.5 py-3.5 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                          errors.name
                            ? 'border-rose-500 bg-rose-500/5'
                            : darkMode
                              ? 'border-slate-850 bg-slate-900 text-white focus:border-indigo-500'
                              : 'border-slate-300 bg-white text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-rose-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-rose-500 inline-block" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={`block text-xs font-mono uppercase tracking-wider font-semibold mb-2 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {t.contact.formEmail}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. arpan@example.com"
                        disabled={status === 'submitting'}
                        className={`w-full px-4.5 py-3.5 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-indigo-500/20 ${
                          errors.email
                            ? 'border-rose-500 bg-rose-500/5'
                            : darkMode
                              ? 'border-slate-850 bg-slate-900 text-white focus:border-indigo-500'
                              : 'border-slate-300 bg-white text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-rose-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-rose-500 inline-block" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className={`block text-xs font-mono uppercase tracking-wider font-semibold mb-2 ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {t.contact.formMessage}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={language === 'en' ? 'Specify key requirements, timeline, budget, or system targets...' : 'मुख्य आवश्यकताएं, समय सीमा, बजट या सिस्टम लक्ष्य निर्दिष्ट करें...'}
                        disabled={status === 'submitting'}
                        className={`w-full px-4.5 py-3.5 rounded-xl border text-sm transition-all outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none ${
                          errors.message
                            ? 'border-rose-500 bg-rose-500/5'
                            : darkMode
                              ? 'border-slate-850 bg-slate-900 text-white focus:border-indigo-500'
                              : 'border-slate-300 bg-white text-slate-900 focus:border-indigo-600'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-rose-500 text-xs font-mono mt-1.5 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-rose-500 inline-block" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 disabled:bg-indigo-600/50 transition-all cursor-pointer"
                      id="contact-submit-btn"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          {t.contact.formSending}
                        </>
                      ) : (
                        <>
                          {t.contact.formSubmit}
                          <LucideIcon name="Send" size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
