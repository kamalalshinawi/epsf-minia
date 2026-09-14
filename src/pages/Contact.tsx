import React from "react";

export const Contact: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-[#0047ba]">Contact Us</h1>
        <p className="mt-2 text-black/70">
          We'd love to hear from you! Whether you have questions, want to collaborate, or need more information, feel free to reach out to us. Our team is here to assist you with any inquiries regarding our programs, events, and opportunities
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-black/10 rounded-xl p-6 bg-white space-y-4">
          <h2 className="text-xl font-bold text-[#0047ba]">Contact Details</h2>
          <div className="space-y-3 text-sm text-black">
            <div>
              <p className="font-semibold text-black/60">Address</p>
              <p>Faculty of Pharmacy, Minia University, Minia, Egypt</p>
            </div>
            <div>
              <p className="font-semibold text-black/60">Phone</p>
              <a href="tel:01024526724" className="text-[#0047ba] font-medium hover:underline">
                01024526724
              </a>
            </div>
            <div>
              <p className="font-semibold text-black/60">Email</p>
              <a href="mailto:amrgamil300@gmail.com" className="text-[#0047ba] font-medium hover:underline">
                amrgamil300@gmail.com
              </a>
            </div>
          </div>
        </div>

        <form className="border border-black/10 rounded-xl p-6 bg-white space-y-4" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-xl font-bold text-[#0047ba]">Send a Message</h2>
          <div>
            <label className="block text-sm font-medium text-black mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-black/20 rounded-md p-2 text-sm focus:outline-none focus:border-[#0047ba]"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-black/20 rounded-md p-2 text-sm focus:outline-none focus:border-[#0047ba]"
              placeholder="Your email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-black/20 rounded-md p-2 text-sm focus:outline-none focus:border-[#0047ba]"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0047ba] text-white font-bold py-2 rounded-md hover:opacity-90 transition-opacity text-sm"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};
