import {
  Thermometer,
  Bath,
  Search,
  Droplets,
  Filter,
  Zap,
  Wrench,
  Clock,
} from "lucide-react";
import { createElement } from "react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    icon: createElement(Thermometer),
    title: "Geyser Installation & Repairs",
    desc: "Expert handling of all water heating systems.",
    details:
      "We specialize in both electric and solar geyser systems. Our services include element replacement, thermostat calibration, pressure valve repairs, and complete new installations with compliance certificates.",
    slug: "geyser-installation-repairs",
  },
  {
    icon: createElement(Bath),
    title: "Bathroom & Kitchen Plumbing",
    desc: "Complete plumbing solutions for your home's core areas.",
    details:
      "From faucet replacements to full kitchen and bathroom renovations. We handle sink installations, dishwasher connections, shower repairs, and custom plumbing layouts for modern homes.",
    slug: "bathroom-kitchen-plumbing",
  },
  {
    icon: createElement(Search),
    title: "Leak Detection & Pipe Repairs",
    desc: "Advanced tools to find and fix leaks fast.",
    details:
      "Using non-invasive acoustic leak detection and thermal imaging, we find hidden leaks behind walls or underground. We provide precise repairs to minimize damage to your property.",
    slug: "leak-detection-pipe-repairs",
  },
  {
    icon: createElement(Droplets),
    title: "Toilet Installation & Repairs",
    desc: "Reliable service for all toilet-related issues.",
    details:
      "Fixing running toilets, blockages, or installing modern water-saving units. We ensure proper sealing and flushing mechanisms for long-term reliability.",
    slug: "toilet-installation-repairs",
  },
  {
    icon: createElement(Filter),
    title: "Water Filtration Systems",
    desc: "Clean, safe water for your entire household.",
    details:
      "Installation of whole-house filtration or under-sink RO systems. We help you choose the right system to remove impurities and improve water taste and safety.",
    slug: "water-filtration-systems",
  },
  {
    icon: createElement(Zap),
    title: "Water Heater Services",
    desc: "Maintenance and repair for all heater models.",
    details:
      "Comprehensive maintenance for instant water heaters and heat pumps. We optimize efficiency to save you money on electricity bills.",
    slug: "water-heater-services",
  },
  {
    icon: createElement(Wrench),
    title: "General Maintenance",
    desc: "Keeping your plumbing system in top shape.",
    details:
      "Preventative maintenance checks to avoid costly emergencies. We inspect valves, pipes, and drains to ensure everything is functioning perfectly.",
    slug: "general-maintenance",
  },
  {
    icon: createElement(Clock),
    title: "Emergency Plumbing (24/7)",
    desc: "We're here when you need us most, any time.",
    details:
      "Burst pipes? Major flooding? Our emergency team is on standby 24/7 in Johannesburg. We aim for a 60-minute response time for critical issues.",
    slug: "emergency-plumbing",
  },
];
