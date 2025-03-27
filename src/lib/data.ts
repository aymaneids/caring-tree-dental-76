
import { CalendarIcon, Clock, Home, Info, MapPin, Phone, User, Users } from "lucide-react";

// Navigation links
export const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "About",
    path: "/about",
    icon: Info,
  },
  {
    name: "Our Team",
    path: "/team",
    icon: Users,
  },
  {
    name: "Services",
    path: "/services",
    icon: User,
  },
  {
    name: "New Patients",
    path: "/new-patients",
    icon: CalendarIcon,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Phone,
  },
];

// Practice information
export const practiceInfo = {
  name: "Spring Family Dental",
  location: "New Albany, Indiana",
  phone: "(812) 555-1234",
  email: "info@springfamilydental.com",
  address: "123 Dental Way, New Albany, IN 47150",
  hours: [
    { day: "Monday", time: "8:00 AM - 5:00 PM" },
    { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
    { day: "Thursday", time: "8:00 AM - 5:00 PM" },
    { day: "Friday", time: "8:00 AM - 2:00 PM" },
    { day: "Saturday - Sunday", time: "Closed" },
  ],
  socialMedia: [
    { platform: "Instagram", url: "https://www.instagram.com/springfamilydental" },
    { platform: "Facebook", url: "https://www.facebook.com/springfamilydental" },
  ],
};

// About section content
export const aboutContent = {
  mission: "At Spring Family Dental, we believe in providing comprehensive dental care that focuses on the entire family. Our mission is to create lasting relationships with our patients, built on trust, education, and exceptional care in a beautiful, comfortable environment.",
  philosophy: "We strive to deliver a truly unique dental experience through genuine patient connection, educational experiences, and a beautiful office environment. Our team is dedicated to helping you achieve optimal oral health while ensuring your comfort and understanding of all procedures.",
  values: [
    {
      title: "Patient Connection",
      description: "We take the time to know each patient personally, understanding their specific needs, concerns, and goals for their dental health.",
    },
    {
      title: "Educational Experience",
      description: "We believe informed patients make better decisions about their health. We thoroughly explain all procedures, options, and preventive care techniques.",
    },
    {
      title: "Beautiful Office",
      description: "Our modern, comfortable office is designed to make your dental visit as pleasant as possible, with state-of-the-art technology and a welcoming atmosphere.",
    },
  ],
};

// Team members
export const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Dentist",
    image: "/placeholder.svg",
    bio: "Dr. Johnson has over 15 years of experience in family dentistry. She received her doctorate from the Indiana University School of Dentistry and is passionate about creating comfortable, educational experiences for patients of all ages.",
    credentials: "DDS, Indiana University School of Dentistry",
  },
  {
    name: "Dr. Michael Chen",
    role: "Associate Dentist",
    image: "/placeholder.svg",
    bio: "Dr. Chen specializes in cosmetic dentistry and has been with Spring Family Dental for 7 years. He's known for his gentle approach and ability to make even the most anxious patients feel at ease.",
    credentials: "DDS, University of Louisville School of Dentistry",
  },
  {
    name: "Emily Rodriguez",
    role: "Dental Hygienist",
    image: "/placeholder.svg",
    bio: "Emily has been with our practice for 10 years and is beloved by our patients for her thorough yet gentle cleanings. She's passionate about preventive care and patient education.",
    credentials: "RDH, BS in Dental Hygiene",
  },
  {
    name: "Jennifer Taylor",
    role: "Office Manager",
    image: "/placeholder.svg",
    bio: "Jennifer keeps our office running smoothly and is always ready to help patients with scheduling, insurance questions, and ensuring a positive experience from start to finish.",
    credentials: "BS in Healthcare Administration",
  },
];

// Services
export const services = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    icon: "🦷",
    shortDescription: "Comprehensive care for patients of all ages, focusing on prevention and maintenance of optimal oral health.",
    description: "Our general dentistry services provide the foundation for excellent oral health. We offer comprehensive exams, professional cleanings, and preventive care to help keep your smile healthy for life. Our team takes the time to understand your unique needs and create personalized treatment plans.",
    treatments: [
      "Comprehensive Dental Exams",
      "Professional Teeth Cleaning",
      "Digital X-rays",
      "Oral Cancer Screenings",
      "Dental Fillings",
      "Tooth Extractions",
      "Root Canal Therapy",
    ],
  },
  {
    id: "family-dentistry",
    title: "Family Dentistry",
    icon: "👨‍👩‍👧‍👦",
    shortDescription: "Specialized care for patients of all ages, from toddlers to seniors, all under one roof.",
    description: "We take pride in caring for families across generations. From a child's first dental visit to advanced care for seniors, our team provides age-appropriate treatments in a comfortable, friendly environment. We make dental visits enjoyable for children and convenient for parents with family block appointments.",
    treatments: [
      "Pediatric Dentistry",
      "Dental Sealants",
      "Fluoride Treatments",
      "Athletic Mouthguards",
      "Gentle Care for Seniors",
      "Family Block Appointments",
    ],
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    icon: "✨",
    shortDescription: "Enhance your smile with our range of cosmetic treatments designed to improve the appearance of your teeth.",
    description: "Our cosmetic dentistry services can help you achieve the smile you've always wanted. Whether you're looking to whiten your teeth, correct alignment issues, or completely transform your smile, our team has the expertise to deliver beautiful, natural-looking results tailored to your unique facial features and preferences.",
    treatments: [
      "Professional Teeth Whitening",
      "Dental Veneers",
      "Dental Bonding",
      "Smile Makeovers",
      "Tooth-Colored Fillings",
      "Invisalign Clear Aligners",
    ],
  },
  {
    id: "preventive-dentistry",
    title: "Preventive Dentistry",
    icon: "🛡️",
    shortDescription: "Protect your oral health with our comprehensive preventive care services.",
    description: "Prevention is the cornerstone of excellent dental health. Our preventive dentistry services focus on maintaining your oral health and catching potential issues before they become serious problems. We emphasize patient education and personalized preventive care plans to help you maintain a healthy smile between visits.",
    treatments: [
      "Regular Dental Check-ups",
      "Professional Cleanings",
      "Dental Sealants",
      "Fluoride Treatments",
      "Oral Hygiene Education",
      "Custom Nightguards",
      "TMJ/Bruxism Evaluation",
    ],
  },
  {
    id: "restorative-dentistry",
    title: "Restorative Dentistry",
    icon: "🔄",
    shortDescription: "Restore function and aesthetics to damaged or missing teeth with our comprehensive restorative treatments.",
    description: "Our restorative dentistry services focus on repairing or replacing damaged or missing teeth to restore both function and appearance. We use the latest techniques and materials to ensure comfortable, durable, and natural-looking restorations that blend seamlessly with your natural teeth.",
    treatments: [
      "Dental Crowns",
      "Dental Bridges",
      "Dental Implants",
      "Dentures and Partial Dentures",
      "Inlays and Onlays",
      "Full Mouth Reconstruction",
    ],
  },
  {
    id: "emergency-dentistry",
    title: "Emergency Dentistry",
    icon: "🚨",
    shortDescription: "Prompt care for dental emergencies to relieve pain and prevent further complications.",
    description: "Dental emergencies require immediate attention, and we're here to help when you need us most. Our team provides prompt, compassionate care for a wide range of dental emergencies. We reserve time in our schedule for emergency appointments and offer guidance over the phone until you can reach our office.",
    treatments: [
      "Toothache Relief",
      "Broken or Chipped Tooth Repair",
      "Lost Filling or Crown Replacement",
      "Dental Abscess Treatment",
      "Emergency Extractions",
      "Treatment for Dental Trauma",
    ],
  },
];

// Testimonials
export const testimonials = [
  {
    name: "Amanda K.",
    quote: "Dr. Johnson and her team have been taking care of my family for years. They're always gentle with my kids and take the time to explain everything. The office is beautiful and calming - not your typical dental office!",
    image: "/placeholder.svg",
  },
  {
    name: "Robert M.",
    quote: "As someone who used to be terrified of dental visits, I can't say enough good things about Spring Family Dental. Dr. Chen took the time to understand my anxiety and worked with me at my own pace. Now I actually look forward to my appointments!",
    image: "/placeholder.svg",
  },
  {
    name: "Sarah T.",
    quote: "I love how educational every visit is. The hygienists always show me exactly what's going on with my teeth and give me personalized advice for better home care. It's made such a difference in my oral health.",
    image: "/placeholder.svg",
  },
  {
    name: "David L.",
    quote: "The entire staff is fantastic - from Jennifer at the front desk to the dental assistants and doctors. They make you feel like family from the moment you walk in. And their new office is absolutely gorgeous!",
    image: "/placeholder.svg",
  },
];

// New patient information
export const newPatientInfo = {
  welcomeMessage: "We're excited to welcome you to Spring Family Dental! Our team is committed to making your first visit comfortable, informative, and personalized to your needs.",
  whatToExpect: [
    "Warm welcome from our front desk team",
    "Comprehensive dental examination",
    "Digital X-rays as needed",
    "Professional cleaning (unless treatment is needed first)",
    "One-on-one consultation with the dentist",
    "Personalized treatment plan discussion",
    "Insurance and financial options review",
  ],
  whatToBring: [
    "Completed new patient forms (or arrive 15 minutes early to complete)",
    "Photo ID",
    "Insurance card (if applicable)",
    "List of current medications",
    "Previous dental records or X-rays (if available)",
  ],
  insuranceInfo: "We accept most major dental insurance plans and are in-network providers for many insurance companies. Our team will help verify your benefits and maximize your coverage. Please contact our office for specific insurance questions.",
  paymentOptions: [
    "Cash",
    "Credit Cards (Visa, MasterCard, American Express, Discover)",
    "Personal Checks",
    "CareCredit® Financing",
    "In-house Dental Savings Plan for uninsured patients",
  ],
};

// FAQs
export const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "Most patients benefit from professional cleanings and check-ups every six months. However, some individuals with specific dental conditions may require more frequent visits. Dr. Johnson or Dr. Chen will recommend a personalized schedule based on your oral health needs."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Contact our office immediately at (812) 555-1234. For after-hours emergencies, our answering service will direct you to the on-call dentist. If you're experiencing severe pain, bleeding that won't stop, or have suffered trauma to the face, please go to the nearest emergency room."
  },
  {
    question: "Do you see children? At what age should my child first visit the dentist?",
    answer: "Yes, we welcome patients of all ages! The American Academy of Pediatric Dentistry recommends scheduling your child's first dental visit by their first birthday or when their first tooth appears. These early visits help establish a positive relationship with dental care."
  },
  {
    question: "What payment options do you offer?",
    answer: "We accept most major insurance plans, cash, credit cards, and personal checks. We also offer CareCredit® financing and have an in-house dental savings plan for uninsured patients. Our team will work with you to maximize your benefits and find payment solutions that fit your budget."
  },
  {
    question: "How can I improve my smile?",
    answer: "We offer numerous cosmetic treatments to enhance your smile, including professional whitening, veneers, bonding, and Invisalign. During a cosmetic consultation, we'll discuss your goals and recommend the best options for your specific needs and budget."
  },
  {
    question: "Are dental X-rays safe?",
    answer: "Yes. We use digital X-rays, which reduce radiation exposure by up to 90% compared to traditional film X-rays. We also follow the ALARA principle (As Low As Reasonably Achievable) and only take X-rays when necessary for diagnosis and treatment planning."
  },
  {
    question: "Do you offer sedation for anxious patients?",
    answer: "Yes, we understand dental anxiety and offer several comfort options, including nitrous oxide (laughing gas) and oral conscious sedation for patients with moderate to severe anxiety. We also focus on creating a calming environment and use gentle techniques for all procedures."
  },
  {
    question: "What COVID-19 safety protocols do you have in place?",
    answer: "We follow all CDC, ADA, and state guidelines for infection control. Our measures include enhanced cleaning protocols, HEPA air filtration, staff health screenings, and appropriate personal protective equipment. Your safety is our highest priority."
  }
];
