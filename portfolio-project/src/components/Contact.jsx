import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { PROFILE } from "../data/portfolioData.js";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name || "a visitor"}`
    );

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
  };

  return (
    <section id="contact" className="section contact">
      <div className="section__inner contact__inner">

        <div className="contact__intro">
          <SectionEyebrow>Contact</SectionEyebrow>

          <h2 className="section__title">
            Let's build something.
          </h2>

          <p className="section__lede">
            Open to internship and placement conversations, collaborations,
            or just talking through an idea.
          </p>

          <div className="contact__links">

            <a
              href={`mailto:${PROFILE.email}`}
              className="contact__link"
            >
              <Mail size={16} />
              {PROFILE.email}
            </a>

            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <Github size={16} />
              GitHub
            </a>

          </div>
        </div>

        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <label className="field">
            <span>Name</span>

            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>

          <label className="field">
            <span>Email</span>

            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label className="field">
            <span>Message</span>

            <textarea
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="What are you building?"
            />
          </label>

          <button
            type="submit"
            className="btn btn--primary btn--full"
          >
            Send Message <Send size={15} />
          </button>

          {status === "sent" && (
            <p className="contact__status">
              Opening your email client with this message pre-filled — send it
              from there.
            </p>
          )}

        </form>

      </div>
    </section>
  );
}
