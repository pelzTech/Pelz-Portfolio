import React from 'react';

const HireMe = () => (
  <div className="p-4">
    <h2 className="text-3xl font-bold mb-4">Hire Me</h2>
    <p className="mb-4">
      If you are looking for a MERN Full Stack Web and Mobile App Developer with a passion for creating user-friendly applications, I’m here to help. Let's work together to bring your ideas to life.
    </p>
    <p className="mb-4">
      Feel free to contact me via email at <a href="mailto:pelumiolugbeja3@gmail.com" className="text-blue-500">pelumiolugbeja3@gmail.com</a> or fill out the contact form below. I will respond promptly!
    </p>
    <form className="mt-4">
      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        placeholder="Your Message"
        className="border p-2 rounded w-full mb-2"
      ></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Send Message
      </button>
    </form>
  </div>
);

export default HireMe;
