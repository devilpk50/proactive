export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-primary text-on-primary py-20 px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight">
            Professional Accounting & Financial Services
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-xl">
            Expert tax solutions, bookkeeping, and financial planning tailored for you. Ensure compliance and optimize your finances with our experienced CPA and CA professionals.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <a href="#contact" className="bg-accent text-on-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 shadow-lg transition-transform transform hover:-translate-y-1">
              Contact Us Today
            </a>
            <a href="#about" className="bg-transparent border border-on-primary text-on-primary px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all">
              Meet Our Team
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          {/* Placeholder for an image */}
          <div className="bg-secondary rounded-2xl p-8 w-full max-w-md shadow-2xl aspect-square flex items-center justify-center border-4 border-accent">
            <span className="font-heading text-2xl font-bold opacity-50">PROACTIVE</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Our Services</h2>
            <p className="text-secondary max-w-2xl mx-auto text-lg">Comprehensive financial solutions designed for individuals and businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-border hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-muted text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" /></svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-primary">Tax Preparation</h3>
              <p className="text-secondary">Expert tax solutions for individuals and corporations. Maximize your returns and stay compliant.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-border hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-muted text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-primary">Bookkeeping</h3>
              <p className="text-secondary">Full-cycle accounting and bookkeeping services. Keep your records accurate and up-to-date.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-border hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-muted text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-primary">Financial Planning</h3>
              <p className="text-secondary">Strategic financial planning and GAAP compliance to help your business grow sustainably.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">About Us</h2>
            <p className="text-xl text-secondary">
              PROACTIVE ACCOUNTING AND FINANCIAL SERVICES is committed to providing top-tier tax, accounting, and financial solutions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-border p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 bg-muted rounded-full flex-shrink-0 border-4 border-accent flex items-center justify-center">
                <span className="text-4xl text-primary font-bold">AY</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-3xl text-primary mb-2">Amit K. Yadav</h3>
                <h4 className="text-accent font-semibold text-lg mb-6">CPA (USA), CA (India)</h4>
                
                <div className="prose text-secondary">
                  <p className="mb-4">
                    Amit is a US CPA and CA (India) with over 9 years of progressive experience in full-cycle accounting, month-end/year-end close, financial statement preparation, and GAAP compliance.
                  </p>
                  <p>
                    A former KPMG employee, Amit brings years of Big Four experience in accounting, tax preparation, and payroll to help individuals and businesses optimize their financial health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-primary mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Professional Experience
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.15rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                <div className="relative pl-8 md:pl-10">
                  <div className="absolute left-0 top-1.5 w-3 h-3 bg-accent rounded-full md:left-4 border-2 border-white shadow-sm"></div>
                  <h4 className="font-bold text-lg text-primary">Accounting Supervisor</h4>
                  <p className="text-secondary font-medium text-sm">City of Greater Sudbury, ON Canada</p>
                  <p className="text-sm text-muted-foreground opacity-75">2022 - 2023</p>
                </div>
                
                <div className="relative pl-8 md:pl-10">
                  <div className="absolute left-0 top-1.5 w-3 h-3 bg-accent rounded-full md:left-4 border-2 border-white shadow-sm"></div>
                  <h4 className="font-bold text-lg text-primary">Experienced Staff Accountant</h4>
                  <p className="text-secondary font-medium text-sm">KPMG Canada - Toronto, ON, Canada</p>
                  <p className="text-sm text-muted-foreground opacity-75">2021 - 2022</p>
                </div>

                <div className="relative pl-8 md:pl-10">
                  <div className="absolute left-0 top-1.5 w-3 h-3 bg-accent rounded-full md:left-4 border-2 border-white shadow-sm"></div>
                  <h4 className="font-bold text-lg text-primary">Senior Accountant</h4>
                  <p className="text-secondary font-medium text-sm">Pawan Krishna & Associates - New Delhi, India</p>
                  <p className="text-sm text-muted-foreground opacity-75">2016 - 2019</p>
                </div>

                <div className="relative pl-8 md:pl-10">
                  <div className="absolute left-0 top-1.5 w-3 h-3 bg-accent rounded-full md:left-4 border-2 border-white shadow-sm"></div>
                  <h4 className="font-bold text-lg text-primary">Staff Accountant</h4>
                  <p className="text-secondary font-medium text-sm">MANV & Associates - New Delhi, India</p>
                  <p className="text-sm text-muted-foreground opacity-75">2015 - 2016</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-primary mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                Education & Certifications
              </h3>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-primary block">CPA - USA</span>
                  <span className="text-sm text-accent">2026</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-primary block">Financial Planning</span>
                  <span className="text-xs text-secondary block">Centennial College, Ontario, Canada</span>
                  <span className="text-sm text-accent">2021</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-primary block">Canadian Securities Course</span>
                  <span className="text-xs text-secondary block">CSI Institute, Ontario, Canada</span>
                  <span className="text-sm text-accent">2021</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-primary block">International Business Management</span>
                  <span className="text-xs text-secondary block">Centennial College, Ontario, Canada</span>
                  <span className="text-sm text-accent">2020</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-primary block">M.com (Finance & Taxation)</span>
                  <span className="text-xs text-secondary block">IGNOU, New Delhi, India</span>
                  <span className="text-sm text-accent">2020</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-primary block">Chartered Accountant</span>
                  <span className="text-xs text-secondary block">Institute of Chartered Accountants of India, New Delhi</span>
                  <span className="text-sm text-accent">2018</span>
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-border">
                  <span className="font-bold text-primary block">B.com (Accounts & Finance)</span>
                  <span className="text-xs text-secondary block">IGNOU, New Delhi, India</span>
                  <span className="text-sm text-accent">2017</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Contact Us</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Ready to streamline your accounting and maximize your tax returns? Send us a message and we'll get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
            {/* Contact Info */}
            <div className="bg-primary text-on-primary p-10 flex flex-col justify-center">
              <h3 className="font-heading font-bold text-3xl mb-8">Get In Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <a href="mailto:proactiveafs@gmail.com" className="text-on-primary/80 hover:text-white transition-colors">proactiveafs@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-6 shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                    <p className="text-on-primary/80">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-on-primary/80">Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10">
              <h3 className="font-heading font-bold text-2xl text-primary mb-6">Send a Message</h3>
              <form className="space-y-6" action="mailto:proactiveafs@gmail.com" method="post" encType="text/plain">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">Full Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-secondary mb-2">Service of Interest</label>
                    <select id="subject" name="subject" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-secondary">
                      <option>Tax Preparation</option>
                      <option>Bookkeeping</option>
                      <option>Financial Planning</option>
                      <option>Other Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none" placeholder="How can we help you?" required></textarea>
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-accent text-on-primary font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all shadow-md mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
