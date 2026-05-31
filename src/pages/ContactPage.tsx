import React, { useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  SendIcon,
  DownloadIcon,
} from "lucide-react";
const cvPdfUrl = "/Kanishka Geethan_Resume.pdf";
export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      // Send message to YOU
      await emailjs.sendForm(
        "service_vacovze",
        "template_8uq9gog",
        form,
        "Y8OAl8JwAbSPEa0vf",
      );

      // Send auto-reply to USER
      await emailjs.sendForm(
        "service_vacovze",
        "template_kvqpwao",
        form,
        "Y8OAl8JwAbSPEa0vf",
      );

      alert("Message transmitted successfully!");

      form.reset();
    } catch (error) {
      console.error(error);
      alert("Transmission failed. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="font-mono text-sm text-accent-blue tracking-widest uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
          Communication Link Established
        </div>
        <div className="h-px bg-surface-light flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left Column - Info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Initiate <br />
              <span className="text-gradient">Contact</span>
            </h1>
            <p className="text-text-secondary">
              Available for consulting, full-time roles, and complex operational
              challenges. Let's optimize your network.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:ekanayakakanishka1@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-surface-light hover:border-accent-blue transition-colors group"
            >
              <div className="w-10 h-10 rounded bg-background flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase">
                  Email
                </p>
                <p className="text-white font-medium">
                  ekanayakakanishka1@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+94710893083"
              className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-surface-light hover:border-accent-teal transition-colors group"
            >
              <div className="w-10 h-10 rounded bg-background flex items-center justify-center text-accent-teal group-hover:scale-110 transition-transform">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase">
                  Secure Line
                </p>
                <p className="text-white font-medium">071 089 3083</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/kanishka-ekanayaka-8571783b0"
              className="flex items-center gap-4 p-4 rounded-lg bg-surface border border-surface-light hover:border-accent-blue transition-colors group"
            >
              <div className="w-10 h-10 rounded bg-background flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase">
                  Network
                </p>
                <p className="text-white font-medium">
                  linkedin.com/in/kanishka-ekanayaka
                </p>
              </div>
            </a>
          </div>

          <div className="pt-6 border-t border-surface-light">
            <a
              href={cvPdfUrl}
              download="Kanishka Geethan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-surface border border-surface-light text-text-primary font-mono text-sm rounded hover:border-accent-teal hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              <DownloadIcon className="w-4 h-4 text-accent-teal group-hover:-translate-y-1 transition-transform" />
              DOWNLOAD FULL DOSSIER (CV)
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-3">
          <div className="glass-panel p-8 rounded-xl border border-surface-light relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent-blue/5 rounded-bl-full"></div>

            <h3 className="text-xl font-display font-bold text-white mb-6">
              Transmit Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono text-text-secondary uppercase"
                  >
                    Sender Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full bg-background border border-surface-light rounded p-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder="Add your name here"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-text-secondary uppercase"
                  >
                    Return Address (Email)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background border border-surface-light rounded p-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder="Add your email here"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-xs font-mono text-text-secondary uppercase"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full bg-background border border-surface-light rounded p-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  placeholder="Add your organization here (optional)"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-text-secondary uppercase"
                >
                  Payload (Message)
                </label>
                <textarea
                  id="message"  
                  required
                  rows={5}
                  name="message"
                  className="w-full bg-background border border-surface-light rounded p-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                  placeholder="Add your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent-blue text-white font-mono text-sm rounded hover:bg-blue-600 transition-all glow-blue flex items-center justify-center gap-2"
              >
                TRANSMIT <SendIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
