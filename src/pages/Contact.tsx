import React, { useState } from 'react'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoSubject = encodeURIComponent(
      formData.subject
        ? `[EPSF-Minia Site] ${formData.subject}`
        : `Message from ${formData.name || 'Website Visitor'}`
    )
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
    )

    window.location.href = `mailto:amrgamil300@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
    setIsSubmitted(true)
  }

  return (
    <div className="space-y-12 max-w-[1440px] mx-auto py-4">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block rounded-full bg-[#0047ba]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0047ba]">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black">
          Contact <span className="text-[#0047ba]">EPSF-Minia</span>
        </h1>
        <p className="text-base sm:text-lg text-black/75 leading-relaxed">
          We'd love to hear from you! Whether you have questions, want to collaborate, or need more information, reach out to us directly or send a message below.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Detailed Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-[#0047ba] border-b border-black/5 pb-4">
              Contact Information
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0047ba]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-black/50">Location</p>
                <p className="text-sm font-semibold text-black mt-1 leading-snug">
                  Faculty of Pharmacy, Minia University, Minia, Egypt
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0047ba]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-black/50">Phone Number</p>
                <a href="tel:01024526724" className="text-base font-bold text-[#0047ba] hover:underline mt-1 block">
                  01024526724
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0047ba]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-black/50">Official Email</p>
                <a href="mailto:amrgamil300@gmail.com" className="text-base font-bold text-[#0047ba] hover:underline mt-1 block break-all">
                  amrgamil300@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Notice Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0047ba] to-blue-900 p-6 sm:p-8 text-white shadow-md">
            <h3 className="text-lg font-bold">Fast Response Commitment</h3>
            <p className="text-xs sm:text-sm text-white/85 mt-2 leading-relaxed">
              Our executive team receives messages directly at <span className="font-semibold underline">amrgamil300@gmail.com</span> and will get back to you promptly.
            </p>
          </div>
        </div>

        {/* Right Column: Spacious & Professional Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-black/10 bg-white p-6 sm:p-10 shadow-lg space-y-6"
          >
            <div>
              <h2 className="text-2xl font-extrabold text-black">
                Send Us a Message
              </h2>
              <p className="text-sm text-black/60 mt-1">
                Fill out the form below to send your inquiry directly to our official email.
              </p>
            </div>

            {isSubmitted && (
              <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-green-800 text-sm font-medium flex items-center gap-3">
                <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Thank you! Your email client has been opened to send your message to <strong>amrgamil300@gmail.com</strong>.</span>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2" htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/15 bg-slate-50/50 p-3.5 text-sm font-medium text-black focus:bg-white focus:outline-none focus:border-[#0047ba] focus:ring-2 focus:ring-[#0047ba]/20 transition-all"
                  placeholder="e.g. Ahmed Mahmoud"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/15 bg-slate-50/50 p-3.5 text-sm font-medium text-black focus:bg-white focus:outline-none focus:border-[#0047ba] focus:ring-2 focus:ring-[#0047ba]/20 transition-all"
                  placeholder="e.g. ahmed@example.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/15 bg-slate-50/50 p-3.5 text-sm font-medium text-black focus:bg-white focus:outline-none focus:border-[#0047ba] focus:ring-2 focus:ring-[#0047ba]/20 transition-all"
                  placeholder="e.g. 01012345678"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-black/15 bg-slate-50/50 p-3.5 text-sm font-medium text-black focus:bg-white focus:outline-none focus:border-[#0047ba] focus:ring-2 focus:ring-[#0047ba]/20 transition-all"
                  placeholder="e.g. Partnership Inquiry"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-2" htmlFor="message">
                Message Body <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-black/15 bg-slate-50/50 p-3.5 text-sm font-medium text-black focus:bg-white focus:outline-none focus:border-[#0047ba] focus:ring-2 focus:ring-[#0047ba]/20 transition-all"
                placeholder="Write your message details here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#0047ba] py-4 text-base font-extrabold text-white shadow-md hover:bg-blue-800 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Send Message to amrgamil300@gmail.com</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
