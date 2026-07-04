const Pricing = ({ activeTab, switchPricingTab, handleSelectPackage }) => {
  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal active">
          <span className="text-blue-500 text-xs sm:text-sm font-semibold uppercase tracking-widest">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mt-4 font-heading">
            Packages scoped for every stage of growth.
          </h2>
          <p className="text-[var(--text-muted)] mt-4 text-base">
            Clear deliverables, fixed pricing, and dedicated support. No hidden fees or unexpected extras.
          </p>
        </div>

        {/* TAB SWITCHER NAV */}
        <div className="flex items-center justify-center mb-12 reveal active">
          <div className="inline-flex p-1.5 rounded-2xl bg-[var(--bg-card)]/90 border border-[var(--border-color)]/90 backdrop-blur-xl overflow-x-auto max-w-full no-scrollbar gap-1">
            <button 
              onClick={() => switchPricingTab('web')} 
              className={`pricing-tab-btn px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'web' ? 'active text-[var(--text-main)] bg-gradient-to-r from-blue-600 to-purple-600 shadow-md' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]'}`}
            >
              <i className="fa-solid fa-code mr-1.5"></i> Web Dev
            </button>
            <button 
              onClick={() => switchPricingTab('ecommerce')} 
              className={`pricing-tab-btn px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'ecommerce' ? 'active text-[var(--text-main)] bg-gradient-to-r from-blue-600 to-purple-600 shadow-md' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]'}`}
            >
              <i className="fa-solid fa-cart-shopping mr-1.5"></i> E-Commerce
            </button>
            <button 
              onClick={() => switchPricingTab('school')} 
              className={`pricing-tab-btn px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'school' ? 'active text-[var(--text-main)] bg-gradient-to-r from-blue-600 to-purple-600 shadow-md' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]'}`}
            >
              <i className="fa-solid fa-graduation-cap mr-1.5"></i> School ERP
            </button>
            <button 
              onClick={() => switchPricingTab('hr')} 
              className={`pricing-tab-btn px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'hr' ? 'active text-[var(--text-main)] bg-gradient-to-r from-blue-600 to-purple-600 shadow-md' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]'}`}
            >
              <i className="fa-solid fa-user-gear mr-1.5"></i> HR Software
            </button>
            <button 
              onClick={() => switchPricingTab('custom')} 
              className={`pricing-tab-btn px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'custom' ? 'active text-[var(--text-main)] bg-gradient-to-r from-blue-600 to-purple-600 shadow-md' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]'}`}
            >
              <i className="fa-solid fa-wand-magic-sparkles mr-1.5"></i> Custom Dev
            </button>
          </div>
        </div>

        {/* TAB CONTENTS */}
        <div id="pricing-containers">
          
          {/* TAB 1: WEB DEV */}
          <div className={`pricing-content grid grid-cols-1 lg:grid-cols-3 gap-8 ${activeTab === 'web' ? '' : 'hidden'}`}>
            
            {/* Starter */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-[var(--text-muted)] tracking-wider">Starter Website</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹7,999</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">one-time payment</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Ideal for small local businesses needing a fast, professional web presence.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Up to 5 custom responsive pages</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Mobile-responsive design</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Interactive Contact Form</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>WhatsApp Chat Button integration</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Google Maps location embed</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>3 months free support</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-clock text-purple-400 mt-0.5"></i> <span className="text-[var(--text-muted)] font-medium">7-day fast delivery</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('Web Dev - Starter (₹7,999)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-blue-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Select Starter</a>
            </div>

            {/* Business (Most Popular) */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-2 border-blue-500/80 relative shadow-2xl shadow-blue-500/10 scale-100 lg:scale-[1.03]">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-[var(--text-main)] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-semibold uppercase text-blue-400 tracking-wider">Business</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹17,999</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">one-time payment</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Complete website package with content management and basic SEO setup.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Up to 10 pages custom design</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>CMS & Blog / News section</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Basic SEO & Meta optimization</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Google Analytics setup</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Smooth animations & UI micro-effects</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>6 months technical support</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-clock text-purple-400 mt-0.5"></i> <span className="text-[var(--text-muted)] font-medium">10-day delivery</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('Web Dev - Business (₹17,999)')} className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-[var(--text-main)] font-semibold text-xs shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all">Select Business</a>
            </div>

            {/* Premium */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-purple-400 tracking-wider">Premium Web</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹34,999</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">one-time payment</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Full-scale digital presence with API integrations and speed audit.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Unlimited custom pages</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Advanced custom design & micro-interactions</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Full technical SEO optimization</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>CMS + Blog + Portfolio System</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Custom API integrations</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Speed & performance optimization</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>1 year support + Free Google Ads setup</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-clock text-purple-400 mt-0.5"></i> <span className="text-[var(--text-muted)] font-medium">15-day delivery</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('Web Dev - Premium (₹34,999)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-purple-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Select Premium</a>
            </div>

          </div>

          {/* TAB 2: E-COMMERCE */}
          <div className={`pricing-content grid grid-cols-1 lg:grid-cols-3 gap-8 ${activeTab === 'ecommerce' ? '' : 'hidden'}`}>
             {/* Starter Store */}
             <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-[var(--text-muted)] tracking-wider">Starter Store</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹14,999</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">one-time payment</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Launch online retail fast with UPI & card payments.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Up to 100 products catalog</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>UPI + Card payment gateway</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Order management system</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Basic inventory tracking</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Customer login accounts</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Mobile-ready storefront</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>3 months support</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('E-Commerce - Starter (₹14,999)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-blue-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Select Starter Store</a>
            </div>

            {/* Growth Store */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-2 border-blue-500/80 relative shadow-2xl shadow-blue-500/10 scale-100 lg:scale-[1.03]">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-[var(--text-main)] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-semibold uppercase text-blue-400 tracking-wider">Growth Store</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹29,999</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">one-time payment</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">High converting e-commerce store with COD, WhatsApp alerts & reviews.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Up to 1,000 products catalog</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>UPI + Card + COD payment options</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Automated WhatsApp order alerts</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Sales analytics dashboard</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Discount coupons & promotional tools</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Customer reviews & ratings</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Abandoned cart recovery notifications</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>6 months technical support</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('E-Commerce - Growth (₹29,999)')} className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-[var(--text-main)] font-semibold text-xs shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all">Select Growth Store</a>
            </div>

            {/* Enterprise Store */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-purple-400 tracking-wider">Enterprise Store</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹59,999</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">one-time payment</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Custom Android app, multi-vendor support & dedicated management.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Unlimited product catalog</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>All payment gateways & EMI options</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Custom Android Mobile App</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Multi-vendor marketplace support</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Advanced analytics & revenue reports</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>WhatsApp catalog integration</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>1 year support + Dedicated manager</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('E-Commerce - Enterprise (₹59,999)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-purple-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Select Enterprise Store</a>
            </div>
          </div>

          {/* TAB 3: SCHOOL ERP (ShikshaNetra) */}
          <div className={`pricing-content grid grid-cols-1 lg:grid-cols-3 gap-8 ${activeTab === 'school' ? '' : 'hidden'}`}>
            {/* Basic */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-[var(--text-muted)] tracking-wider">Basic Tier</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹22,000</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">/ year + GST</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">ShikshaNetra core ERP with student & fee modules.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>All 25+ ERP core modules</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Unlimited student profiles</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>8 user access roles</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Android + iOS mobile app access</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>CBSE / ICSE / State / IB board compliant</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Free data migration & staff training</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('School ERP - Basic (₹22,000/yr)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-blue-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Select Basic ERP</a>
            </div>

            {/* Super (Recommended) */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-2 border-purple-500/80 relative shadow-2xl shadow-purple-500/10 scale-100 lg:scale-[1.03]">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-[var(--text-main)] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Recommended
              </span>
              <div>
                <span className="text-xs font-semibold uppercase text-purple-400 tracking-wider">Super Plan</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹35,000</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">/ year + usage billing</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Includes WhatsApp notifications, custom Play Store app & dedicated account manager.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Everything in Basic Plan</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>WhatsApp fee & attendance notifications</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Bulk SMS gateway integration</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Priority tech support</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Dedicated school account manager</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Custom school branding & Play Store App</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('School ERP - Super (₹35,000/yr)')} className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-[var(--text-main)] font-semibold text-xs shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all">Select Super Plan</a>
            </div>

            {/* Enterprise */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-indigo-400 tracking-wider">Multi-Branch Enterprise</span>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold text-[var(--text-main)] font-heading">Custom Quote</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">tailored to trust size</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">For educational trusts operating multiple school branches.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>Multiple school branch management</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>Centralized trust dashboard</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>White-label custom branding</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>API access & custom ERP hooks</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>SLA guarantee & 24/7 dedicated support</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('School ERP - Enterprise (Custom Quote)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-indigo-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Request Enterprise Quote</a>
            </div>
          </div>

          {/* TAB 4: HR SOFTWARE */}
          <div className={`pricing-content grid grid-cols-1 lg:grid-cols-3 gap-8 ${activeTab === 'hr' ? '' : 'hidden'}`}>
             {/* Small Business */}
             <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-[var(--text-muted)] tracking-wider">Small Business</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹9,999</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">/ year</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Replace paper attendance and spreadsheets for small teams.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>Up to 25 employees</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>Staff attendance tracker</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>Leave management system</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>Basic payroll calculations</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>Digital salary slip generation</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('HR Software - Small Business (₹9,999/yr)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-emerald-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Select HR Starter</a>
            </div>

            {/* Business (Most Popular) */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-2 border-emerald-500/80 relative shadow-2xl shadow-emerald-500/10 scale-100 lg:scale-[1.03]">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-[var(--text-main)] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-semibold uppercase text-emerald-400 tracking-wider">Business HR</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹19,999</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">/ year</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Comprehensive staff portal, PF/ESI tracking & performance metrics.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>Up to 100 employees</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>PF / ESI Compliance tracking</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>Employee performance tracking</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>Employee self-service web portal</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>Priority technical support</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('HR Software - Business (₹19,999/yr)')} className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-[var(--text-main)] font-semibold text-xs shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/50 transition-all">Select Business HR</a>
            </div>

            {/* Enterprise */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-teal-400 tracking-wider">Enterprise HR</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹39,999</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">/ year</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Biometric integration, multi-branch, custom modules & manager.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-teal-400 mt-0.5"></i> <span>Unlimited employee profiles</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-teal-400 mt-0.5"></i> <span>Custom HR & payroll modules</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-teal-400 mt-0.5"></i> <span>Biometric machine hardware integration</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-teal-400 mt-0.5"></i> <span>Multi-branch office management</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-teal-400 mt-0.5"></i> <span>Dedicated account manager</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('HR Software - Enterprise (₹39,999/yr)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-teal-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Select Enterprise HR</a>
            </div>
          </div>

          {/* TAB 5: CUSTOM DEV */}
          <div className={`pricing-content grid grid-cols-1 lg:grid-cols-3 gap-8 ${activeTab === 'custom' ? '' : 'hidden'}`}>
             {/* MVP Build */}
             <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-[var(--text-muted)] tracking-wider">MVP Build</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹24,999<span className="text-lg font-normal">+</span></span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">starting price</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Build and test core product ideas with real users quickly.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Core features & product logic</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Single target platform (Web/Mobile)</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>Up to 5 functional modules</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>30-day fast delivery</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-blue-400 mt-0.5"></i> <span>3 months technical support</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('Custom Dev - MVP Build (₹24,999+)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-blue-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Select MVP Build</a>
            </div>

            {/* Full Product (Most Popular) */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-2 border-purple-500/80 relative shadow-2xl shadow-purple-500/10 scale-100 lg:scale-[1.03]">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-[var(--text-main)] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Most Popular
              </span>
              <div>
                <span className="text-xs font-semibold uppercase text-purple-400 tracking-wider">Full Product</span>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-extrabold text-[var(--text-main)] font-heading">₹59,999<span className="text-lg font-normal">+</span></span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">starting price</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Cross-platform web + mobile system with premium UI & integrations.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Web + Mobile cross-platform build</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Premium bespoke UI/UX design</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Unlimited functional modules</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Third-party API integrations</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>Payment gateway & automated billing</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>60-day target delivery</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-purple-400 mt-0.5"></i> <span>6 months dedicated support</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('Custom Dev - Full Product (₹59,999+)')} className="w-full text-center py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-[var(--text-main)] font-semibold text-xs shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all">Select Full Product</a>
            </div>

            {/* Enterprise Custom */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[var(--border-color)]">
              <div>
                <span className="text-xs font-semibold uppercase text-indigo-400 tracking-wider">Enterprise Custom</span>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold text-[var(--text-main)] font-heading">Custom Quote</span>
                  <span className="text-[var(--text-muted)] text-xs block mt-1 font-medium">tailored to specifications</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-6 pb-6 border-b border-[var(--border-color)]">Dedicated engineering team, source code handover & AI/ML integration.</p>
                <ul className="space-y-3 text-xs text-[var(--text-muted)] mb-8">
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>Dedicated dev team assigned to project</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>Multi-platform architecture</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>AI / ML model integrations</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>SLA & NDA agreements</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>Full source code IP handover</span></li>
                  <li className="flex items-start gap-2.5"><i className="fa-solid fa-check text-indigo-400 mt-0.5"></i> <span>1 year enterprise support</span></li>
                </ul>
              </div>
              <a href="#contact" onClick={() => handleSelectPackage('Custom Dev - Enterprise (Custom Quote)')} className="w-full text-center py-3 rounded-xl border border-[var(--border-color)] hover:border-indigo-500 text-[var(--text-main)] hover:text-[var(--text-main)] font-semibold text-xs transition-all">Request Enterprise Custom</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
