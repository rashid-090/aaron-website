import { Lft5, Lft6, Lft7 } from "../assets";

export const commercialElevatorData = [
  {
    // Page header content
    id: `modal-1`,
    pageHeader: {
      title: "Modal 1",
      description:
        "At Aaron Elevators, we're bringing reliable commercial elevators in Kerala to businesses, apartments, and industrial spaces. We know how important smooth people movement is in busy buildings, and that's why we've been helping property owners with top-quality elevator solutions that match their needs perfectly.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specifications"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Building Trust,",
            highlight: "Floor by Floor",
          },
          paragraph1:
            "We've been in the elevator business for years, making buildings more accessible across Kerala. Our team's deep knowledge of commercial lifts in Kerala sets us apart, as we work closely with clients to understand their specific requirements and deliver solutions that work for them.",
          banner: {
            heading:
              "Commercial Elevators in Kerala: Built for Your Building's Needs",
            text: "Looking for commercial building elevation in Kerala? We're here to help. Our commercial elevators are designed specifically for Kerala's diverse architectural landscape, from busy shopping malls to modern office complexes. We understand the local building codes and requirements, making sure your elevator system meets all safety standards while keeping your operations running smoothly.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Features That Make Our",
            highlight: "Lifts Stand Out",
          },
          description:
            "Discover a range of features designed to enhance your experience, including advanced technology, safety mechanisms, and aesthetic designs.",
          featuresList: [
            {
              title: "Consistent Performance",
              description: "Heavy-duty construction for consistent performance",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Efficient Operation",
              description: "Smart control systems for efficient operation",
              icon: "plus",
            },
            {
              title: "Energy Saving",
              description:
                "Energy-saving technology that cuts down on power bills",
              icon: "plus",
            },
            {
              title: "Advanced Safety",
              description: "Advanced safety features for peace of mind",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Regular Maintenance",
              description: "Regular maintenance alerts",
              icon: "x",
            },
            {
              title: "Quiet Operation",
              description: "Smooth, quiet operation",
              icon: "x",
            },
            {
              title: "Spacious Cabins",
              description: "Spacious cabins designed for high traffic",
              icon: "x",
            },
            {
              title: "Quick Response",
              description: "Quick response times during peak hours",
              icon: "x",
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "Our commercial elevators are built with precision engineering and quality materials to ensure reliability and safety.",
          specsList: [
            {
              category: "Capacity",
              details: "500kg to 2000kg passenger capacity",
            },
            {
              category: "Speed",
              details: "0.5m/s to 2.5m/s depending on building requirements",
            },
            {
              category: "Power Supply",
              details: "Three-phase 415V AC, 50Hz",
            },
            {
              category: "Drive System",
              details: "Geared or gearless traction systems available",
            },
            {
              category: "Control System",
              details: "Microprocessor-based with group control capabilities",
            },
            {
              category: "Doors",
              details: "Automatic center-opening or side-opening options",
            },
            {
              category: "Cabin Design",
              details:
                "Customizable finishes with stainless steel, wood veneer, or glass options",
            },
            {
              category: "Safety Features",
              details:
                "Overload protection, emergency backup power, automatic rescue device",
            },
          ],
        },
      },
    ],

    // Contact section content
    contactSection: {
      title: "Let's Talk About Your Elevator Needs",
      description:
        "Ready to discuss your commercial elevators in Kerala? Our team is here to help you find the right solution for your building. Fill out the form below, and we'll get back to you quickly with detailed information about our services of commercial building elevation in Kerala and how we can help.",
    },

    // FAQ data
    faqData: [
      {
        question:
          "What makes commercial elevators in Kerala different from residential ones?",
        answer:
          "Commercial elevators in Kerala are built stronger, carry more weight, and handle more trips per day. They're specifically designed for buildings with lots of daily users.",
      },
      {
        question: "How often should I service my commercial lift in Kerala?",
        answer:
          "We recommend monthly maintenance checks for commercial lifts to keep them running safely and prevent unexpected breakdowns.",
      },
      {
        question: "What's the average lifespan of commercial lift in Kerala?",
        answer:
          "With proper maintenance, our commercial elevators typically last 20-25 years, though many components can be updated to extend their life even longer.",
      },
      {
        question:
          "Do you provide emergency repair services for commercial building elevation in Kerala?",
        answer:
          "Yes, we offer 24/7 emergency repair services across Kerala to keep your elevator system running when you need it most.",
      },
      {
        question:
          "How long does it take to install a new commercial lift in Kerala?",
        answer:
          "Installation typically takes 4-6 weeks, depending on your building's structure and the elevator system you choose.",
      },
      {
        question:
          "What safety features come standard with your commercial elevators in Kerala?",
        answer:
          "Our elevators include automatic rescue devices, overload protection, emergency phones, and advanced braking systems as standard features of commercial elevators in Kerala.",
      },
    ],

    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: Lft5,
        alt: "Commercial Elevator Interior",
        title: "Modern Cabin Design",
      },
      {
        id: 2,
        src: Lft6,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 3,
        src: Lft7,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },

    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `modal-2`,
    pageHeader: {
      title: "Modal 2",
      description:
        "At Aaron Elevators, we're bringing reliable commercial elevators in Kerala to businesses, apartments, and industrial spaces. We know how important smooth people movement is in busy buildings, and that's why we've been helping property owners with top-quality elevator solutions that match their needs perfectly.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specifications"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Building Trust,",
            highlight: "Floor by Floor",
          },
          paragraph1:
            "We've been in the elevator business for years, making buildings more accessible across Kerala. Our team's deep knowledge of commercial lifts in Kerala sets us apart, as we work closely with clients to understand their specific requirements and deliver solutions that work for them.",
          banner: {
            heading:
              "Commercial Elevators in Kerala: Built for Your Building's Needs",
            text: "Looking for commercial building elevation in Kerala? We're here to help. Our commercial elevators are designed specifically for Kerala's diverse architectural landscape, from busy shopping malls to modern office complexes. We understand the local building codes and requirements, making sure your elevator system meets all safety standards while keeping your operations running smoothly.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Features That Make Our",
            highlight: "Lifts Stand Out",
          },
          description:
            "Discover a range of features designed to enhance your experience, including advanced technology, safety mechanisms, and aesthetic designs.",
          featuresList: [
            {
              title: "Consistent Performance",
              description: "Heavy-duty construction for consistent performance",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Efficient Operation",
              description: "Smart control systems for efficient operation",
              icon: "plus",
            },
            {
              title: "Energy Saving",
              description:
                "Energy-saving technology that cuts down on power bills",
              icon: "plus",
            },
            {
              title: "Advanced Safety",
              description: "Advanced safety features for peace of mind",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Regular Maintenance",
              description: "Regular maintenance alerts",
              icon: "x",
            },
            {
              title: "Quiet Operation",
              description: "Smooth, quiet operation",
              icon: "x",
            },
            {
              title: "Spacious Cabins",
              description: "Spacious cabins designed for high traffic",
              icon: "x",
            },
            {
              title: "Quick Response",
              description: "Quick response times during peak hours",
              icon: "x",
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "Our commercial elevators are built with precision engineering and quality materials to ensure reliability and safety.",
          specsList: [
            {
              category: "Capacity",
              details: "500kg to 2000kg passenger capacity",
            },
            {
              category: "Speed",
              details: "0.5m/s to 2.5m/s depending on building requirements",
            },
            {
              category: "Power Supply",
              details: "Three-phase 415V AC, 50Hz",
            },
            {
              category: "Drive System",
              details: "Geared or gearless traction systems available",
            },
            {
              category: "Control System",
              details: "Microprocessor-based with group control capabilities",
            },
            {
              category: "Doors",
              details: "Automatic center-opening or side-opening options",
            },
            {
              category: "Cabin Design",
              details:
                "Customizable finishes with stainless steel, wood veneer, or glass options",
            },
            {
              category: "Safety Features",
              details:
                "Overload protection, emergency backup power, automatic rescue device",
            },
          ],
        },
      },
    ],

    // Contact section content
    contactSection: {
      title: "Let's Talk About Your Elevator Needs",
      description:
        "Ready to discuss your commercial elevators in Kerala? Our team is here to help you find the right solution for your building. Fill out the form below, and we'll get back to you quickly with detailed information about our services of commercial building elevation in Kerala and how we can help.",
    },

    // FAQ data
    faqData: [
      {
        question:
          "What makes commercial elevators in Kerala different from residential ones?",
        answer:
          "Commercial elevators in Kerala are built stronger, carry more weight, and handle more trips per day. They're specifically designed for buildings with lots of daily users.",
      },
      {
        question: "How often should I service my commercial lift in Kerala?",
        answer:
          "We recommend monthly maintenance checks for commercial lifts to keep them running safely and prevent unexpected breakdowns.",
      },
      {
        question: "What's the average lifespan of commercial lift in Kerala?",
        answer:
          "With proper maintenance, our commercial elevators typically last 20-25 years, though many components can be updated to extend their life even longer.",
      },
      {
        question:
          "Do you provide emergency repair services for commercial building elevation in Kerala?",
        answer:
          "Yes, we offer 24/7 emergency repair services across Kerala to keep your elevator system running when you need it most.",
      },
      {
        question:
          "How long does it take to install a new commercial lift in Kerala?",
        answer:
          "Installation typically takes 4-6 weeks, depending on your building's structure and the elevator system you choose.",
      },
      {
        question:
          "What safety features come standard with your commercial elevators in Kerala?",
        answer:
          "Our elevators include automatic rescue devices, overload protection, emergency phones, and advanced braking systems as standard features of commercial elevators in Kerala.",
      },
    ],

    
    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: Lft5,
        alt: "Commercial Elevator Interior",
        title: "Modern Cabin Design",
      },
      {
        id: 2,
        src: Lft6,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 3,
        src: Lft7,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },

    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `modal-3`,
    pageHeader: {
      title: "Modal 3",
      description:
        "At Aaron Elevators, we're bringing reliable commercial elevators in Kerala to businesses, apartments, and industrial spaces. We know how important smooth people movement is in busy buildings, and that's why we've been helping property owners with top-quality elevator solutions that match their needs perfectly.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specifications"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Building Trust,",
            highlight: "Floor by Floor",
          },
          paragraph1:
            "We've been in the elevator business for years, making buildings more accessible across Kerala. Our team's deep knowledge of commercial lifts in Kerala sets us apart, as we work closely with clients to understand their specific requirements and deliver solutions that work for them.",
          banner: {
            heading:
              "Commercial Elevators in Kerala: Built for Your Building's Needs",
            text: "Looking for commercial building elevation in Kerala? We're here to help. Our commercial elevators are designed specifically for Kerala's diverse architectural landscape, from busy shopping malls to modern office complexes. We understand the local building codes and requirements, making sure your elevator system meets all safety standards while keeping your operations running smoothly.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Features That Make Our",
            highlight: "Lifts Stand Out",
          },
          description:
            "Discover a range of features designed to enhance your experience, including advanced technology, safety mechanisms, and aesthetic designs.",
          featuresList: [
            {
              title: "Consistent Performance",
              description: "Heavy-duty construction for consistent performance",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Efficient Operation",
              description: "Smart control systems for efficient operation",
              icon: "plus",
            },
            {
              title: "Energy Saving",
              description:
                "Energy-saving technology that cuts down on power bills",
              icon: "plus",
            },
            {
              title: "Advanced Safety",
              description: "Advanced safety features for peace of mind",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Regular Maintenance",
              description: "Regular maintenance alerts",
              icon: "x",
            },
            {
              title: "Quiet Operation",
              description: "Smooth, quiet operation",
              icon: "x",
            },
            {
              title: "Spacious Cabins",
              description: "Spacious cabins designed for high traffic",
              icon: "x",
            },
            {
              title: "Quick Response",
              description: "Quick response times during peak hours",
              icon: "x",
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "Our commercial elevators are built with precision engineering and quality materials to ensure reliability and safety.",
          specsList: [
            {
              category: "Capacity",
              details: "500kg to 2000kg passenger capacity",
            },
            {
              category: "Speed",
              details: "0.5m/s to 2.5m/s depending on building requirements",
            },
            {
              category: "Power Supply",
              details: "Three-phase 415V AC, 50Hz",
            },
            {
              category: "Drive System",
              details: "Geared or gearless traction systems available",
            },
            {
              category: "Control System",
              details: "Microprocessor-based with group control capabilities",
            },
            {
              category: "Doors",
              details: "Automatic center-opening or side-opening options",
            },
            {
              category: "Cabin Design",
              details:
                "Customizable finishes with stainless steel, wood veneer, or glass options",
            },
            {
              category: "Safety Features",
              details:
                "Overload protection, emergency backup power, automatic rescue device",
            },
          ],
        },
      },
    ],

    // Contact section content
    contactSection: {
      title: "Let's Talk About Your Elevator Needs",
      description:
        "Ready to discuss your commercial elevators in Kerala? Our team is here to help you find the right solution for your building. Fill out the form below, and we'll get back to you quickly with detailed information about our services of commercial building elevation in Kerala and how we can help.",
    },

    // FAQ data
    faqData: [
      {
        question:
          "What makes commercial elevators in Kerala different from residential ones?",
        answer:
          "Commercial elevators in Kerala are built stronger, carry more weight, and handle more trips per day. They're specifically designed for buildings with lots of daily users.",
      },
      {
        question: "How often should I service my commercial lift in Kerala?",
        answer:
          "We recommend monthly maintenance checks for commercial lifts to keep them running safely and prevent unexpected breakdowns.",
      },
      {
        question: "What's the average lifespan of commercial lift in Kerala?",
        answer:
          "With proper maintenance, our commercial elevators typically last 20-25 years, though many components can be updated to extend their life even longer.",
      },
      {
        question:
          "Do you provide emergency repair services for commercial building elevation in Kerala?",
        answer:
          "Yes, we offer 24/7 emergency repair services across Kerala to keep your elevator system running when you need it most.",
      },
      {
        question:
          "How long does it take to install a new commercial lift in Kerala?",
        answer:
          "Installation typically takes 4-6 weeks, depending on your building's structure and the elevator system you choose.",
      },
      {
        question:
          "What safety features come standard with your commercial elevators in Kerala?",
        answer:
          "Our elevators include automatic rescue devices, overload protection, emergency phones, and advanced braking systems as standard features of commercial elevators in Kerala.",
      },
    ],

    
    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: Lft5,
        alt: "Commercial Elevator Interior",
        title: "Modern Cabin Design",
      },
      {
        id: 2,
        src: Lft6,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 3,
        src: Lft7,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },

    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
  {
    // Page header content
    id: `modal-4`,
    pageHeader: {
      title: "Modal 4",
      description:
        "At Aaron Elevators, we're bringing reliable commercial elevators in Kerala to businesses, apartments, and industrial spaces. We know how important smooth people movement is in busy buildings, and that's why we've been helping property owners with top-quality elevator solutions that match their needs perfectly.",
    },

    // Tabs configuration
    tabs: ["Description", "Features", "Specifications"],

    // Content for each tab
    tabContent: [
      {
        key: "description",
        content: {
          heading1: {
            main: "Building Trust,",
            highlight: "Floor by Floor",
          },
          paragraph1:
            "We've been in the elevator business for years, making buildings more accessible across Kerala. Our team's deep knowledge of commercial lifts in Kerala sets us apart, as we work closely with clients to understand their specific requirements and deliver solutions that work for them.",
          banner: {
            heading:
              "Commercial Elevators in Kerala: Built for Your Building's Needs",
            text: "Looking for commercial building elevation in Kerala? We're here to help. Our commercial elevators are designed specifically for Kerala's diverse architectural landscape, from busy shopping malls to modern office complexes. We understand the local building codes and requirements, making sure your elevator system meets all safety standards while keeping your operations running smoothly.",
          },
        },
      },
      {
        key: "features",
        content: {
          heading: {
            main: "Features That Make Our",
            highlight: "Lifts Stand Out",
          },
          description:
            "Discover a range of features designed to enhance your experience, including advanced technology, safety mechanisms, and aesthetic designs.",
          featuresList: [
            {
              title: "Consistent Performance",
              description: "Heavy-duty construction for consistent performance",
              icon: "plus", // Assuming this corresponds to the plus icon in SVG
            },
            {
              title: "Efficient Operation",
              description: "Smart control systems for efficient operation",
              icon: "plus",
            },
            {
              title: "Energy Saving",
              description:
                "Energy-saving technology that cuts down on power bills",
              icon: "plus",
            },
            {
              title: "Advanced Safety",
              description: "Advanced safety features for peace of mind",
              icon: "x", // Assuming this corresponds to the x icon in SVG
            },
            {
              title: "Regular Maintenance",
              description: "Regular maintenance alerts",
              icon: "x",
            },
            {
              title: "Quiet Operation",
              description: "Smooth, quiet operation",
              icon: "x",
            },
            {
              title: "Spacious Cabins",
              description: "Spacious cabins designed for high traffic",
              icon: "x",
            },
            {
              title: "Quick Response",
              description: "Quick response times during peak hours",
              icon: "x",
            },
          ],
        },
      },
      {
        key: "specifications",
        content: {
          // This tab's content wasn't defined in the original code, so creating a placeholder
          heading: "Technical Specifications",
          description:
            "Our commercial elevators are built with precision engineering and quality materials to ensure reliability and safety.",
          specsList: [
            {
              category: "Capacity",
              details: "500kg to 2000kg passenger capacity",
            },
            {
              category: "Speed",
              details: "0.5m/s to 2.5m/s depending on building requirements",
            },
            {
              category: "Power Supply",
              details: "Three-phase 415V AC, 50Hz",
            },
            {
              category: "Drive System",
              details: "Geared or gearless traction systems available",
            },
            {
              category: "Control System",
              details: "Microprocessor-based with group control capabilities",
            },
            {
              category: "Doors",
              details: "Automatic center-opening or side-opening options",
            },
            {
              category: "Cabin Design",
              details:
                "Customizable finishes with stainless steel, wood veneer, or glass options",
            },
            {
              category: "Safety Features",
              details:
                "Overload protection, emergency backup power, automatic rescue device",
            },
          ],
        },
      },
    ],

    // Contact section content
    contactSection: {
      title: "Let's Talk About Your Elevator Needs",
      description:
        "Ready to discuss your commercial elevators in Kerala? Our team is here to help you find the right solution for your building. Fill out the form below, and we'll get back to you quickly with detailed information about our services of commercial building elevation in Kerala and how we can help.",
    },

    // FAQ data
    faqData: [
      {
        question:
          "What makes commercial elevators in Kerala different from residential ones?",
        answer:
          "Commercial elevators in Kerala are built stronger, carry more weight, and handle more trips per day. They're specifically designed for buildings with lots of daily users.",
      },
      {
        question: "How often should I service my commercial lift in Kerala?",
        answer:
          "We recommend monthly maintenance checks for commercial lifts to keep them running safely and prevent unexpected breakdowns.",
      },
      {
        question: "What's the average lifespan of commercial lift in Kerala?",
        answer:
          "With proper maintenance, our commercial elevators typically last 20-25 years, though many components can be updated to extend their life even longer.",
      },
      {
        question:
          "Do you provide emergency repair services for commercial building elevation in Kerala?",
        answer:
          "Yes, we offer 24/7 emergency repair services across Kerala to keep your elevator system running when you need it most.",
      },
      {
        question:
          "How long does it take to install a new commercial lift in Kerala?",
        answer:
          "Installation typically takes 4-6 weeks, depending on your building's structure and the elevator system you choose.",
      },
      {
        question:
          "What safety features come standard with your commercial elevators in Kerala?",
        answer:
          "Our elevators include automatic rescue devices, overload protection, emergency phones, and advanced braking systems as standard features of commercial elevators in Kerala.",
      },
    ],

    
    // Gallery images (placeholders, you would replace these with actual image paths)
    galleryImages: [
      {
        id: 1,
        src: Lft5,
        alt: "Commercial Elevator Interior",
        title: "Modern Cabin Design",
      },
      {
        id: 2,
        src: Lft6,
        alt: "Elevator Control Panel",
        title: "Smart Control System",
      },
      {
        id: 3,
        src: Lft7,
        alt: "Glass Elevator",
        title: "Panoramic View Elevator",
      },

    ],

    // SVG icons data (simplified representation)
    icons: {
      plus: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m-4 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z"
                />`,
      x: `<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
              />`,
    },
  },
];

export default commercialElevatorData;
