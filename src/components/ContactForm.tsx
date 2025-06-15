
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"fail">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    details: ""
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // fallback: open mailto link with prefilled body
    const mailto = `mailto:sreepurna.jasti@gmail.com?subject=Portfolio%20Contact%20-%20${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.details + "\n\n" + form.email)}`;
    window.open(mailto, "_blank");
    setTimeout(() => setStatus("sent"), 600);
    toast({ title: "Thank you!", description: "I'll get back to you soon.", duration: 3000 });
    setForm({ name: "", email: "", details: "" });
  }

  return (
    <form
      className="max-w-lg mx-auto flex flex-col gap-6 mt-6"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        className="rounded-lg px-5 py-3 bg-glass border border-primary focus:ring-2 ring-primary outline-none font-medium text-light"
        name="name"
        type="text"
        required
        minLength={2}
        maxLength={100}
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        aria-label="Your Name"
      />
      <input
        className="rounded-lg px-5 py-3 bg-glass border border-primary focus:ring-2 ring-primary outline-none font-medium text-light"
        name="email"
        type="email"
        required
        maxLength={120}
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        aria-label="Your Email"
      />
      <textarea
        className="rounded-lg px-5 py-3 bg-glass border border-primary focus:ring-2 ring-primary outline-none font-medium text-light min-h-[120px] resize-none"
        name="details"
        required
        maxLength={1200}
        placeholder="How can I help? What would you like to discuss?"
        value={form.details}
        onChange={handleChange}
        aria-label="Your Message"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="cta-button font-semibold tracking-wide text-dark bg-gradient-to-r from-primary to-secondary rounded-full shadow-glow transition-all text-lg py-3 px-8 mx-auto"
      >
        {status === "sending" ? "Sending..." : "Schedule a Chat"}
      </button>
    </form>
  );
}
