"use client";

import React from "react";
import Link from "next/link";
import { Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/common/Logo";
import { siteConfig } from "@/data/site";
import { subscribeToNewsletter } from "@/services/newsletter";
import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = React.useState("");
  const [isSubscribing, setIsSubscribing] = React.useState(false);

  const renderSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "instagram":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case "facebook":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case "youtube":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        );
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  // Filter out "Contact Us" if it exists, or just show the rest
  const quickLinks = siteConfig.navLinks.filter(
    (link) => link.label !== "Contact Us"
  );

  return (
    <footer className="bg-white py-12 border-t border-[#1F2A44]/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Logo Section */}
          <div className="mb-8 rounded-full bg-brand-gold/10 p-6 sm:p-8 flex items-center justify-center">
            <Logo size="sm" />
          </div>

          {/* Navigation */}
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#1F2A44]/80 hover:text-brand-gold font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {siteConfig.socials.map((social: { label: string; href: string; icon?: string }) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#1F2A44]/20 text-[#1F2A44] hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors duration-300"
                >
                  {renderSocialIcon(social.icon || social.label)}
                  <span className="sr-only">{social.label}</span>
                </Button>
              </a>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="mb-8 w-full max-w-md">
            <form
              className="flex space-x-2"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!email) return;
                setIsSubscribing(true);
                try {
                  const response = await subscribeToNewsletter(email);
                  if (response.success) {
                    toast.success(response.message);
                    setEmail("");
                  } else {
                    toast.error(response.message);
                  }
                } catch {
                  toast.error("An unexpected error occurred.");
                } finally {
                  setIsSubscribing(false);
                }
              }}
            >
              <div className="flex-grow">
                <Label htmlFor="footer-email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="footer-email"
                  placeholder="Enter your email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubscribing}
                  className="rounded-full border-[#1F2A44]/20 text-[#1F2A44] focus-visible:ring-brand-gold focus-visible:border-brand-gold"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubscribing}
                className="rounded-full bg-[#1F2A44] text-white hover:bg-brand-gold hover:text-white transition-colors duration-300 px-6"
              >
                {isSubscribing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
              </Button>
            </form>
          </div>

          {/* Copyright Section */}
          <div className="text-center">
            <p className="text-sm text-[#1F2A44]/60 font-medium">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
