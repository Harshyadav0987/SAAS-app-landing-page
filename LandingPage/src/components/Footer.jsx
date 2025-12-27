import React, { useState } from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Logo from './Logo';

function Footer() {
  const [email, setEmail] = useState('');

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Security', href: '#security' },
      { name: 'Roadmap', href: '#roadmap' }
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' }
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'API', href: '#api' }
    ],
    Legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Licenses', href: '#licenses' }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://in.linkedin.com/in/harsh-yadav-783917299', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Harshyadav0987/', label: 'GitHub' },
    { icon: <Mail className="w-5 h-5" />, href : "https://mail.google.com/mail/?view=cm&fs=1&to=harshy9893@gmail.com&su=Contact%20from%20NexusFlow&body=Hi%20Harsh,",label: "Email"}
 ];

  const handleSubscribe = () => {
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <Logo />
              <p className="mt-4 text-gray-600 leading-relaxed max-w-xs">
                A simple yet powerful productivity platform designed to help teams work better together.
              </p>
              
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300"
                    >
                {social.icon}
                </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-900 mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-black transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} NexusFlow. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#privacy" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <a href="#terms" className="hover:text-black transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-300">•</span>
              <a href="#cookies" className="hover:text-black transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;