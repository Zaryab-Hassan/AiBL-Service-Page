import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/mvgqkbna", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            service: "Web Development",
            message: "",
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section
    data-contact-section 
    className = "flex flex-col w-screen items-center gap-8 p-6 mx-12 sm:mx-0 sm:-mt-12 bg-primary h-auto">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold text-white my-6">
          Contact Us Form
        </h2>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Consultation Form
        </h2>

        {submitted ? (
          <div className="text-center">
            <p className="text-green-600 font-medium mb-4">
              ✅ Thank you! Your message has been sent.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-blue-500 underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              placeholder="Your Name"
              className="w-full mb-3 p-3 border rounded focus:border-blue-500 focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              placeholder="Your Email"
              className="w-full mb-3 p-3 border rounded focus:border-blue-500 focus:outline-none"
              onChange={handleChange}
            />
            <select
              name="service"
              value={formData.service}
              className="w-full mb-3 p-3 border rounded focus:border-blue-500 focus:outline-none"
              onChange={handleChange}
            >
              <option value="Web Development">Web Development</option>
              <option value="AI Development">AI Development</option>
              <option value="UI/UX Design">Mobile Application Development</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full mb-3 p-3 border rounded focus:border-blue-500 focus:outline-none resize-vertical"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r bg-primary text-white font-bold py-3 rounded hover:scale-105 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
