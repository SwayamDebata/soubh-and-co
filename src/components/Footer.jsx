import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoPng from "../assets/logo.png";

const footerLinks = [
  { label: "Sprint", href: "/#sprint" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Soubh's LinkedIn", href: "https://www.linkedin.com/in/iamsoubh/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-dark/10 py-12">
      <div className="mx-auto flex w-full max-w-[min(100%,1280px)] flex-col gap-8 px-3 sm:px-4 md:flex-row md:items-center md:justify-between lg:px-5">
        <div className="flex max-w-md items-start gap-3 sm:gap-4">
          <Link to="/">
            <img
              src={logoPng}
              alt=""
              className="mt-0.5 h-9 w-auto shrink-0 sm:h-10"
              decoding="async"
              aria-hidden
            />
          </Link>
          <div>
            <Link to="/" className="font-display text-sm font-semibold text-dark hover:text-orange transition-colors">
              Soubh &amp; Co.
            </Link>
            <p className="mt-2 max-w-xs font-body text-xs leading-relaxed text-dark/60">
              A real estate marketing consultancy. Built in Australia.
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-6" aria-label="Footer">
          {footerLinks.map(({ label, href }) => {
            const external = href.startsWith("http");
            return (
              <motion.a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="font-body text-xs uppercase tracking-widest text-dark/70 transition-colors hover:text-dark"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.15 }}
              >
                {label}
              </motion.a>
            );
          })}
        </nav>
      </div>
      <p className="mt-8 text-center font-body text-xs text-dark/60">
        © 2026 Soubh &amp; Co. All rights reserved.
      </p>
    </footer>
  );
}
