import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-16   px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-zinc-500">Let's Work Together</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Have a project in mind? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: 'Email',
              info: 'hello@designstudio.com'
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: 'Phone',
              info: '+1 (555) 123-4567'
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: 'Location',
              info: 'New York, NY'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center hover:shadow-lg transition-shadow border border-zinc-300 p-6 bg-white  text-zinc-900 rounded-xl"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 text-2xl  rounded-lg mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-700">{item.info}</p>
            </div>
          ))}
        </div>

        <form className="max-w-2xl mx-auto text-amber-500">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Name"
              className="border border-zinc-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-zinc-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full border border-zinc-500 rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-amber-700"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-zinc-950 text-zinc-300 py-3 rounded-lg font-semibold hover:bg-zinc-400 hover:text-zinc-950 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;