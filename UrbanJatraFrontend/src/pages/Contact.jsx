import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-10 bg-white text-black">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-600">
          Have a question or want to work with us? Get in touch!
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
            <p className="text-gray-600">
              Feel free to contact us for any query, suggestion or
              collaboration.
            </p>
          </div>

          <div className="space-y-3">
            <p>
              <span className="font-semibold">📍 Address:</span> Sylhet,
              Bangladesh
            </p>
            <p>
              <span className="font-semibold">📧 Email:</span> example@gmail.com
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span> +880 1XXXXXXXXX
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-5 bg-gray-100 p-6 rounded-lg">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
