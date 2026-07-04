const Work = () => {
  return (
    <section id="work" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
          <div>
            <span className="text-blue-500 text-xs sm:text-sm font-semibold uppercase tracking-widest">Real Shipped Projects</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] mt-4 font-heading">
              Featured Client Work
            </h2>
          </div>
          <p className="text-[var(--text-muted)] max-w-md text-sm sm:text-base mt-4 md:mt-0">
            Live software applications in active production for education, retail, fashion, and precision manufacturing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1: ShikshaNetra */}
          <div className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-[var(--border-color)] flex flex-col h-full group reveal">
            <div className="flex flex-col flex-grow">
              {/* Project Image Thumbnail */}
              <div className="relative h-52 overflow-hidden bg-[var(--bg-main)]">
                <img src="https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="ShikshaNetra School ERP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-purple-600/90 text-[var(--text-main)] font-semibold text-xs px-3 py-1 rounded-full backdrop-blur-md">
                  School ERP System
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading mb-2 group-hover:text-purple-400 transition-colors">ShikshaNetra</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 text-justify flex-grow">
                  Complete school management portal covering student attendance, fee receipting, examination results, and parent notification system.
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Attendance</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Fee Receipts</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Android App</span>
                </div>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between border-t border-[var(--border-color)]/80 mt-auto">
              <span className="text-xs text-[var(--text-muted)]"><i className="fa-solid fa-circle text-[8px] text-emerald-400 mr-1.5"></i>Live ERP</span>
              <a href="https://shikshanetra.arpan.studio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-[var(--text-main)] border border-purple-500/30 transition-all text-xs font-semibold">
                View live <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>

          {/* Project 2: NaICE Primary School */}
          <div className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-[var(--border-color)] flex flex-col h-full group reveal">
            <div className="flex flex-col flex-grow">
              {/* Project Image Thumbnail */}
              <div className="relative h-52 overflow-hidden bg-[var(--bg-main)]">
                <img src="https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="NaICE Primary School Website" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-blue-600/90 text-[var(--text-main)] font-semibold text-xs px-3 py-1 rounded-full backdrop-blur-md">
                  Educational Website
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading mb-2 group-hover:text-blue-400 transition-colors">NaICE Primary School</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 text-justify flex-grow">
                  Modern, mobile-responsive web platform for NaICE Primary School showcasing admissions, events, curriculum, and campus gallery.
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Web Design</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Admissions</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Responsive</span>
                </div>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between border-t border-[var(--border-color)]/80 mt-auto">
              <span className="text-xs text-[var(--text-muted)]"><i className="fa-solid fa-circle text-[8px] text-emerald-400 mr-1.5"></i>Live Site</span>
              <a href="https://naicetheprimary.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-[var(--text-main)] border border-blue-500/30 transition-all text-xs font-semibold">
                View live <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>

          {/* Project 3: Skov Fashion */}
          <div className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-[var(--border-color)] flex flex-col h-full group reveal">
            <div className="flex flex-col flex-grow">
              {/* Project Image Thumbnail */}
              <div className="relative h-52 overflow-hidden bg-[var(--bg-main)]">
                <img src="https://images.pexels.com/photos/27141303/pexels-photo-27141303.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Skov Fashion Store" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-pink-600/90 text-[var(--text-main)] font-semibold text-xs px-3 py-1 rounded-full backdrop-blur-md">
                  E-Commerce Store
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading mb-2 group-hover:text-pink-400 transition-colors">Skov Fashion</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 text-justify flex-grow">
                  Contemporary fashion e-commerce storefront with product collections, integrated payment options, and mobile-optimized browsing.
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Apparel</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">UPI Gateway</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Shopping Cart</span>
                </div>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between border-t border-[var(--border-color)]/80 mt-auto">
              <span className="text-xs text-[var(--text-muted)]"><i className="fa-solid fa-circle text-[8px] text-emerald-400 mr-1.5"></i>Live Store</span>
              <a href="https://skovfashion.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-pink-600/20 hover:bg-pink-600 text-pink-300 hover:text-[var(--text-main)] border border-pink-500/30 transition-all text-xs font-semibold">
                View live <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>

          {/* Project 4: Emallword */}
          <div className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-[var(--border-color)] flex flex-col h-full group reveal">
            <div className="flex flex-col flex-grow">
              {/* Project Image Thumbnail */}
              <div className="relative h-52 overflow-hidden bg-[var(--bg-main)]">
                <img src="https://images.pexels.com/photos/30530409/pexels-photo-30530409.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Emallword E-Commerce Platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent"></div>
                <span className="absolute top-3 left-3 bg-amber-600/90 text-[var(--text-main)] font-semibold text-xs px-3 py-1 rounded-full backdrop-blur-md">
                  E-Commerce Store
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[var(--text-main)] font-heading mb-2 group-hover:text-amber-400 transition-colors">Emallword</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4 text-justify flex-grow">
                  An e-commerce store built from the ground up — product catalogue, cart and checkout flow for online retail.
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Catalogue</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Cart & Checkout</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Multi-Category</span>
                </div>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between border-t border-[var(--border-color)]/80 mt-auto">
              <span className="text-xs text-[var(--text-muted)]"><i className="fa-solid fa-circle text-[8px] text-emerald-400 mr-1.5"></i>Live Platform</span>
              <a href="https://emallword.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600/20 hover:bg-amber-600 text-amber-300 hover:text-[var(--text-main)] border border-amber-500/30 transition-all text-xs font-semibold">
                View live <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>

          {/* Project 5: Gujarat Profile (Industrial · 3D Web) */}
          <div className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-[var(--border-color)] flex flex-col h-full group reveal md:col-span-2 lg:col-span-2">
            <div className="flex flex-col flex-grow">
              {/* Project Image Thumbnail */}
              <div className="relative h-60 overflow-hidden bg-[var(--bg-main)]">
                <img src="https://images.pexels.com/photos/7254419/pexels-photo-7254419.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Gujarat Profile Industrial 3D Website" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent"></div>
                
                <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 text-[var(--text-main)] font-semibold text-xs px-3 py-1 rounded-full backdrop-blur-md shadow-lg">
                  Industrial · 3D Web Experience
                </span>

                {/* 3D Gear Pill */}
                <span className="absolute bottom-4 right-4 bg-[var(--bg-main)]/80 text-blue-400 text-xs px-3 py-1.5 rounded-lg border border-blue-500/30 font-mono backdrop-blur-md">
                  <i className="fa-solid fa-gear text-blue-400 animate-spin mr-1.5"></i> Interactive 3D Metal Gear
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-main)] font-heading group-hover:text-blue-400 transition-colors">Gujarat Profile</h3>
                  <span className="text-xs text-blue-400 font-mono bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">CNC & Laser Cutting</span>
                </div>
                <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed mb-4 text-justify flex-grow">
                  A dark, industrial site for a CNC cutting and fabrication company, built with an interactive 3D gear model matching precision metalwork.
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">3D Metal Gear Canvas</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">CNC Fabrication Showcase</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Industrial Dark Theme</span>
                  <span className="text-[11px] bg-[var(--border-color)] text-[var(--text-muted)] px-2.5 py-1 rounded-md border border-[var(--border-color)]">Fast Performance</span>
                </div>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between border-t border-[var(--border-color)]/80 mt-auto">
              <span className="text-xs text-[var(--text-muted)]"><i className="fa-solid fa-circle text-[8px] text-emerald-400 mr-1.5"></i>Live 3D Industrial App</span>
              <a href="https://cnc-website-rouge.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-[var(--text-main)] font-semibold text-xs shadow-lg shadow-blue-600/20 hover:shadow-blue-500/40 transition-all">
                View live ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
