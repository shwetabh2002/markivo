// Website Content Constants
// This file contains all text content used throughout the website
// Following industry standards for internationalization and maintainability

export const COMPANY_INFO = {
  NAME: 'Markivo',
  TAGLINE: 'Digital Marketing Agency',
  DESCRIPTION: 'Helping Indian startups and brands scale with strategic marketing.',
  EMAIL: 'hello@markivo.com',
  SUPPORT_EMAIL: 'support@markivo.com',
  PHONE_PRIMARY: '+91 6299764087',
  PHONE_SECONDARY: '+91 8969718899',
  WHATSAPP: '+91 6299764087',
  ADDRESSES: {
    NOIDA: 'Noida, Uttar Pradesh',
    INDIA: 'India'
  },
  WORKING_HOURS: {
    WEEKDAYS: 'Mon - Fri: 9:00 AM - 6:00 PM',
    SATURDAY: 'Sat: 10:00 AM - 2:00 PM'
  }
};

export const NAVIGATION = {
  HOME: 'Home',
  ABOUT: 'About Us',
  SERVICES: 'Services',
  PORTFOLIO: 'Our Work',
  BLOG: 'Blog',
  PRICING: 'Pricing',
  CONTACT: 'Contact',
  FAQ: 'FAQ'
};

export const HERO_SECTION = {
  TITLE: "Transform Your Business with Strategic Digital Marketing",
  SUBTITLE: "Helping Indian startups and brands scale with strategic digital solutions — from SEO and social media to custom websites and mobile apps. We build and market experiences that drive real growth.",
  CTA_PRIMARY: "Get Free Quote",
  CTA_SECONDARY: "Book a Call",
  ANIMATED_WORDS: ['Innovative', 'Strategic', 'Data-Driven', 'Results-Focused', 'Web-Powered', 'App-Driven', 'Mobile-First', 'Tech-Enabled'],
  STATS: {
    PROJECTS: "500+",
    PROJECTS_LABEL: "Projects Delivered",
    CLIENTS: "98%",
    CLIENTS_LABEL: "Client Satisfaction",
    YEARS: "5+",
    YEARS_LABEL: "Years Experience"
  }
};

export const SERVICES = {
  SECTION_TITLE: "Our Expertise",
  SECTION_SUBTITLE: "Comprehensive Digital Marketing Solutions",
  SECTION_DESCRIPTION: "We offer end-to-end digital marketing services to help your business thrive in the digital landscape.",
  CTA_TEXT: "View All Services",
  ITEMS: [
    {
      ID: 1,
      TITLE: "Web Development",
      DESCRIPTION: "Modern, responsive websites that engage users and drive business growth.",
      ICON: "code",
      LINK: "/services/web_design",
      COLOR: "from-green-500 to-teal-500",
      FEATURED: true
    },
    {
      ID: 2,
      TITLE: "Mobile App Development",
      DESCRIPTION: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      ICON: "mobile",
      LINK: "/services/mobile_app",
      COLOR: "from-cyan-500 to-blue-500",
      FEATURED: true
    },
    {
      ID: 3,
      TITLE: "SEO Services",
      DESCRIPTION: "Boost your organic visibility and drive quality traffic with our data-driven SEO strategies.",
      ICON: "search",
      LINK: "/services/seo",
      COLOR: "from-orange-500 to-red-500",
      FEATURED: false
    },
    {
      ID: 4,
      TITLE: "PPC Advertising",
      DESCRIPTION: "Maximize ROI with targeted Google Ads and Facebook campaigns that convert.",
      ICON: "ad",
      LINK: "/services/ppc",
      COLOR: "from-blue-500 to-purple-500",
      FEATURED: false
    },
    {
      ID: 5,
      TITLE: "Branding & UI/UX",
      DESCRIPTION: "Create memorable brand experiences with stunning design and user-friendly interfaces.",
      ICON: "palette",
      LINK: "/services/ui_ux",
      COLOR: "from-pink-500 to-rose-500",
      FEATURED: false
    },
    {
      ID: 6,
      TITLE: "Social Media Marketing",
      DESCRIPTION: "Build your brand presence and engage audiences across all social platforms.",
      ICON: "share",
      LINK: "/services/social_media",
      COLOR: "from-purple-500 to-indigo-500",
      FEATURED: false
    },
    {
      ID: 7,
      TITLE: "Conversion Rate Optimization",
      DESCRIPTION: "Turn more visitors into customers with strategic CRO techniques and testing.",
      ICON: "chart",
      LINK: "/services/cro",
      COLOR: "from-yellow-500 to-orange-500",
      FEATURED: false
    },
    {
      ID: 8,
      TITLE: "Online Reputation Management",
      DESCRIPTION: "Protect and enhance your brand reputation across digital channels.",
      ICON: "shield",
      LINK: "/services/orm",
      COLOR: "from-gray-500 to-gray-700",
      FEATURED: false
    }
  ]
};

export const WHAT_WE_DO = {
  SECTION_TITLE: "What We Do",
  SECTION_SUBTITLE: "Our Core Services",
  SECTION_DESCRIPTION: "We specialize in comprehensive digital marketing solutions that drive growth and results.",
  ITEMS: [
    {
      TITLE: "Digital Strategy",
      DESCRIPTION: "Comprehensive digital marketing strategies tailored to your business goals.",
      ICON: "strategy"
    },
    {
      TITLE: "Content Creation",
      DESCRIPTION: "Engaging content that resonates with your audience and drives engagement.",
      ICON: "content"
    },
    {
      TITLE: "Analytics & Reporting",
      DESCRIPTION: "Data-driven insights and comprehensive reporting to track your success.",
      ICON: "analytics"
    },
    {
      TITLE: "Growth Optimization",
      DESCRIPTION: "Continuous optimization to maximize your ROI and business growth.",
      ICON: "growth"
    }
  ]
};

export const WHY_CHOOSE_US = {
  SECTION_TITLE: "Why Choose Us",
  SECTION_SUBTITLE: "What Makes Us Different",
  SECTION_DESCRIPTION: "We combine local market expertise with cutting-edge technology to deliver exceptional results.",
  ITEMS: [
    {
      TITLE: "Local Market Expertise",
      DESCRIPTION: "Deep understanding of Indian market dynamics and consumer behavior.",
      ICON: "local",
      COLOR: "from-orange-500 to-red-500",
      DELAY: 0
    },
    {
      TITLE: "Proven Track Record",
      DESCRIPTION: "Over 500 successful projects across various industries.",
      ICON: "track-record",
      COLOR: "from-blue-500 to-purple-500",
      DELAY: 0.2
    },
    {
      TITLE: "Cutting-Edge Technology",
      DESCRIPTION: "Latest tools and techniques for maximum impact and ROI.",
      ICON: "technology",
      COLOR: "from-green-500 to-teal-500",
      DELAY: 0.4
    },
    {
      TITLE: "Transparent Reporting",
      DESCRIPTION: "Regular updates and detailed analytics to track your progress.",
      ICON: "reporting",
      COLOR: "from-purple-500 to-pink-500",
      DELAY: 0.6
    }
  ],
  CTA: {
    TITLE: "Ready to Get Started?",
    DESCRIPTION: "Let's discuss how we can help you achieve your digital marketing goals.",
    BUTTON_TEXT: "Get Free Consultation"
  }
};

export const TESTIMONIALS = {
  SECTION_TITLE: "Client Testimonials",
  SECTION_SUBTITLE: "What Our Clients Say",
  SECTION_DESCRIPTION: "Hear from businesses that have transformed their digital presence with our help.",
  ITEMS: [
    {
      ID: 1,
      NAME: "Rajesh Kumar",
      COMPANY: "TechStart Solutions",
      POSITION: "CEO",
      IMAGE: "/assets/testimonial-1.jpg",
      RATING: 5,
      TEXT: "Markivo transformed our online presence completely. Our organic traffic increased by 300% in just 6 months. Their team is professional, responsive, and delivers outstanding results."
    },
    {
      ID: 2,
      NAME: "Priya Sharma",
      COMPANY: "Fashion Forward",
      POSITION: "Marketing Director",
      IMAGE: "/assets/testimonial-2.jpg",
      RATING: 5,
      TEXT: "Working with Markivo has been a game-changer for our e-commerce business. Their PPC campaigns have consistently delivered 4x ROAS, and their social media strategy has helped us build a loyal community."
    },
    {
      ID: 3,
      NAME: "Amit Patel",
      COMPANY: "EduTech Pro",
      POSITION: "Founder",
      IMAGE: "/assets/testimonial-3.jpg",
      RATING: 5,
      TEXT: "The team at Markivo understands the Indian market like no other. They helped us scale from a local startup to a national brand. Their comprehensive digital strategy is unmatched."
    },
    {
      ID: 4,
      NAME: "Sneha Reddy",
      COMPANY: "HealthCare Plus",
      POSITION: "Co-founder",
      IMAGE: "/assets/testimonial-4.jpg",
      RATING: 5,
      TEXT: "Exceptional service and results! Their SEO expertise helped us rank #1 for all our target keywords. The increase in qualified leads has been phenomenal. Highly recommend their services."
    }
  ]
};

export const PORTFOLIO = {
  SECTION_TITLE: "Our Latest Work",
  SECTION_SUBTITLE: "Portfolio Highlights",
  SECTION_DESCRIPTION: "Explore some of our recent projects and see the results we've delivered for our clients.",
  CTA_TEXT: "View All Projects",
  CATEGORIES: {
    ALL: "All Projects",
    WEB_DESIGN: "Web Design",
    SEO: "SEO",
    BRANDING: "Branding",
    SOCIAL_MEDIA: "Social Media"
  }
};

export const CONTACT = {
  HERO: {
    TITLE: "Let's Start Your Digital Journey",
    SUBTITLE: "Ready to transform your business? Get in touch with our team of digital marketing experts. We're here to help you achieve remarkable growth."
  },
  FORM: {
    TITLE: "Send Us a Message",
    DESCRIPTION: "Fill out the form below and we'll get back to you within 24 hours.",
    FIELDS: {
      NAME: {
        LABEL: "Full Name",
        PLACEHOLDER: "Enter your full name",
        REQUIRED: true
      },
      EMAIL: {
        LABEL: "Email Address",
        PLACEHOLDER: "Enter your email address",
        REQUIRED: true
      },
      COMPANY: {
        LABEL: "Company Name",
        PLACEHOLDER: "Enter your company name",
        REQUIRED: false
      },
      PHONE: {
        LABEL: "Phone Number",
        PLACEHOLDER: "Enter your phone number",
        REQUIRED: false
      },
      SERVICE: {
        LABEL: "Service of Interest",
        PLACEHOLDER: "Select a service",
        REQUIRED: false
      },
      MESSAGE: {
        LABEL: "Message",
        PLACEHOLDER: "Tell us about your project and goals...",
        REQUIRED: true
      }
    },
    SUBMIT_BUTTON: "Send Message",
    SUBMITTING_BUTTON: "Sending Email...",
    SUCCESS: {
      TITLE: "Message Sent Successfully!",
      DESCRIPTION: "Your message has been sent to shwetabh183@gmail.com. We'll get back to you within 24 hours.",
      SEND_ANOTHER: "Send Another Email",
      COPY_CONTENT: "Copy Email Content",
      EMAIL_DETAILS: "Email Details:",
      SEND_ANOTHER_MESSAGE: "Send Another Message"
    }
  },
  INFO: {
    TITLE: "Get in Touch",
    DESCRIPTION: "We'd love to hear from you. Here's how you can reach us.",
    WHATSAPP: {
      TITLE: "Quick Chat on WhatsApp",
      DESCRIPTION: "Get instant responses to your queries",
      BUTTON: "Chat Now"
    },
    SOCIAL: {
      TITLE: "Connect With Us"
    }
  },
  MAP: {
    TITLE: "Find Us",
    DESCRIPTION: "Visit our offices in Mumbai and Bangalore"
  },
  FAQ: {
    TITLE: "Frequently Asked Questions",
    DESCRIPTION: "Quick answers to common questions about our services",
    CTA: "View All FAQs"
  }
};

export const FAQ = {
  SECTION_TITLE: "Frequently Asked Questions",
  SECTION_DESCRIPTION: "Quick answers to common questions about our services",
  ITEMS: [
    {
      QUESTION: "What services do you offer?",
      ANSWER: "We offer comprehensive digital marketing services including SEO, PPC, Social Media Marketing, Web Development, Branding, and more."
    },
    {
      QUESTION: "How long does it take to see results?",
      ANSWER: "Results vary by service, but typically you'll see initial improvements within 30-60 days for most campaigns."
    },
    {
      QUESTION: "Do you work with small businesses?",
      ANSWER: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies."
    },
    {
      QUESTION: "What is your pricing structure?",
      ANSWER: "Our pricing is customized based on your specific needs and goals. Contact us for a personalized quote."
    },
    {
      QUESTION: "Do you provide ongoing support?",
      ANSWER: "Yes, we provide ongoing support and maintenance for all our services to ensure continued success."
    },
    {
      QUESTION: "Can you work with international clients?",
      ANSWER: "While we specialize in the Indian market, we do work with international clients."
    }
  ]
};

export const FOOTER = {
  COMPANY_DESCRIPTION: "Markivo is a leading digital marketing agency helping businesses grow their online presence and achieve remarkable results through strategic marketing solutions.",
  QUICK_LINKS: {
    TITLE: "Quick Links",
    ITEMS: [
      { TEXT: "About Us", URL: "/about" },
      { TEXT: "Services", URL: "/services" },
      { TEXT: "Portfolio", URL: "/portfolio" },
      { TEXT: "Blog", URL: "/blog" },
      { TEXT: "Contact", URL: "/contact" }
    ]
  },
  SERVICES: {
    TITLE: "Services",
    ITEMS: [
      { TEXT: "SEO Services", URL: "/services/seo" },
      { TEXT: "Web Development", URL: "/services/web-development" },
      { TEXT: "PPC Advertising", URL: "/services/ppc" },
      { TEXT: "Social Media Marketing", URL: "/services/social-media" },
      { TEXT: "Branding & UI/UX", URL: "/services/branding" }
    ]
  },
  CONTACT: {
    TITLE: "Contact Info",
    ADDRESS: "Mumbai, Maharashtra, India",
    EMAIL: "hello@markivo.com",
    PHONE: "+91 98765 43210"
  },
  COPYRIGHT: "© 2024 Markivo. All rights reserved.",
  PRIVACY_POLICY: "Privacy Policy",
  TERMS_OF_SERVICE: "Terms of Service"
};

export const BUTTONS = {
  PRIMARY: "Get Started",
  SECONDARY: "Learn More",
  CTA: "Get Free Quote",
  BOOK_CALL: "Book a Call",
  VIEW_ALL: "View All",
  SEND_MESSAGE: "Send Message",
  SUBMIT: "Submit",
  CANCEL: "Cancel",
  CLOSE: "Close",
  READ_MORE: "Read More",
  CONTACT_US: "Contact Us",
  LEARN_MORE: "Learn More →"
};

export const MESSAGES = {
  SUCCESS: {
    FORM_SUBMITTED: "Form submitted successfully!",
    EMAIL_SENT: "Email sent successfully!",
    COPIED: "Copied to clipboard!",
    SAVED: "Changes saved successfully!"
  },
  ERROR: {
    FORM_ERROR: "Please fill in all required fields.",
    EMAIL_ERROR: "Please enter a valid email address.",
    NETWORK_ERROR: "Network error. Please try again.",
    GENERAL_ERROR: "Something went wrong. Please try again."
  },
  LOADING: {
    SUBMITTING: "Submitting...",
    LOADING: "Loading...",
    SENDING: "Sending...",
    PROCESSING: "Processing..."
  }
};

export const SEO = {
  HOME: {
    TITLE: "Markivo - Digital Marketing Agency in India | SEO, Web Development, PPC",
    DESCRIPTION: "Markivo is a leading digital marketing agency in India. We offer SEO, web development, PPC, social media marketing, and branding services to help businesses grow.",
    KEYWORDS: "digital marketing agency, SEO services, web development, PPC advertising, social media marketing, India"
  },
  ABOUT: {
    TITLE: "About Markivo - Digital Marketing Agency in India",
    DESCRIPTION: "Learn about Markivo, a trusted digital marketing agency in India with 5+ years of experience helping businesses achieve growth through strategic marketing.",
    KEYWORDS: "about Markivo, digital marketing agency India, marketing team, company history"
  },
  CONTACT: {
    TITLE: "Contact Markivo - Get in Touch with Our Digital Marketing Experts",
    DESCRIPTION: "Contact Markivo for digital marketing services. Get in touch with our experts for SEO, web development, PPC, and social media marketing solutions.",
    KEYWORDS: "contact Markivo, digital marketing contact, SEO services contact, marketing consultation"
  }
};

export const BODY_CONTENT = {
  VIDEO_TAGLINE: "We build trends",
  VIDEO_FOOTER: {
    TEXT: "This page is",
    CTA: "Schedule A Meeting"
  }
}; 