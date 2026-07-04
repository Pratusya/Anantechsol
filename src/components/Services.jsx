const Services = ({ switchPricingTab }) => {
  return (
    <section id="services" className="py-20 relative z-10 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-blue-500 text-xs sm:text-sm font-semibold uppercase tracking-widest">What We Build</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mt-4 font-heading">
            Engineered for daily operations, not just presentation.
          </h2>
          <p className="text-[var(--text-muted)] mt-4 text-base sm:text-lg">
            Five core capabilities designed to digitize manual workflows, power commerce, and accelerate business growth.
          </p>
        </div>

        {/* Grid of 5 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Web & Mobile Apps */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group reveal">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all"></div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-600/30 to-indigo-600/30 border border-blue-500/30 flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] font-heading mb-3 group-hover:text-blue-400 transition-colors">Web & Mobile Apps</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                Portfolio sites, e-commerce stores and custom apps, built and shipped end to end.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-4 mb-6">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-blue-400 text-[10px]"></i> Ultra-fast responsive landing pages & portals</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-blue-400 text-[10px]"></i> E-Commerce checkout & payment gateways</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-blue-400 text-[10px]"></i> Mobile-friendly PWA & hybrid app options</li>
              </ul>
            </div>
            <a href="#pricing" onClick={() => switchPricingTab('web')} className="inline-flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 gap-1.5 group/link cursor-pointer z-10">
              Explore Web Packages <i className="fa-solid fa-arrow-right text-[10px] group-hover/link:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Card 2: School Management */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group reveal">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/25 transition-all"></div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-purple-600/30 to-pink-600/30 border border-purple-500/30 flex items-center justify-center text-purple-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] font-heading mb-3 group-hover:text-purple-400 transition-colors">School Management</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                Attendance, fees, results and communication in one system for schools (ShikshaNetra).
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-4 mb-6">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-purple-400 text-[10px]"></i> Complete fee collection & receipt generation</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-purple-400 text-[10px]"></i> Student attendance & exam result cards</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-purple-400 text-[10px]"></i> WhatsApp alerts & parent mobile portal</li>
              </ul>
            </div>
            <a href="#pricing" onClick={() => switchPricingTab('school')} className="inline-flex items-center text-xs font-semibold text-purple-400 hover:text-purple-300 gap-1.5 group/link cursor-pointer z-10">
              ShikshaNetra Pricing <i className="fa-solid fa-arrow-right text-[10px] group-hover/link:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Card 3: Employee Management */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group reveal">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all"></div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-emerald-600/30 to-teal-600/30 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-users-gear"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] font-heading mb-3 group-hover:text-emerald-400 transition-colors">Employee Management</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                Track staff, attendance, payroll basics and records without spreadsheets.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-4 mb-6">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400 text-[10px]"></i> Staff attendance & leave tracker</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400 text-[10px]"></i> Salary slip generation & PF/ESI tracking</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400 text-[10px]"></i> Employee self-service portal</li>
              </ul>
            </div>
            <a href="#pricing" onClick={() => switchPricingTab('hr')} className="inline-flex items-center text-xs font-semibold text-emerald-400 hover:text-emerald-300 gap-1.5 group/link cursor-pointer z-10">
              HR Packages <i className="fa-solid fa-arrow-right text-[10px] group-hover/link:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Card 4: Store & Inventory */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group reveal">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/25 transition-all"></div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-amber-600/30 to-orange-600/30 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-boxes-stacked"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] font-heading mb-3 group-hover:text-amber-400 transition-colors">Store & Inventory</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                Stock levels, billing and sales tracking for retail and wholesale stores.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-4 mb-6">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-amber-400 text-[10px]"></i> Real-time inventory & stock low alerts</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-amber-400 text-[10px]"></i> Point of Sale (POS) & GST invoicing</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-amber-400 text-[10px]"></i> Vendor & supplier ledger management</li>
              </ul>
            </div>
            <a href="#pricing" onClick={() => switchPricingTab('ecommerce')} className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 gap-1.5 group/link cursor-pointer z-10">
              Store & E-Com Packages <i className="fa-solid fa-arrow-right text-[10px] group-hover/link:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Card 5: Appointment Systems */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group reveal md:col-span-2 lg:col-span-1">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/25 transition-all"></div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-regular fa-calendar-check"></i>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] font-heading mb-3 group-hover:text-cyan-400 transition-colors">Appointment Systems</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                Online booking and scheduling so clients stop calling to check availability.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-4 mb-6">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400 text-[10px]"></i> Automated time-slot scheduling</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400 text-[10px]"></i> WhatsApp & SMS appointment reminders</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-400 text-[10px]"></i> Online advance booking payments</li>
              </ul>
            </div>
            <a href="#pricing" onClick={() => switchPricingTab('custom')} className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 gap-1.5 group/link cursor-pointer z-10">
              Custom Booking Systems <i className="fa-solid fa-arrow-right text-[10px] group-hover/link:translate-x-1 transition-transform"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
