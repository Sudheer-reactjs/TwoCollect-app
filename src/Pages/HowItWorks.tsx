import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Step1 from "../assets/laptop.png";
import LoginButton from "../Components/LoginButton";

const steps = [
  {
    id: 1,
    title: "Create Your Account",
    description: "Sign up in seconds and get access to your personalized dashboard.",
    screen: Step1,
  },
  {
    id: 2,
    title: "Add a Shipment or Connect Your Store",
    description:
      "Use our integrations to connect your online store (like Shopify or WooCommerce) or manually enter shipment details. Upload product info, shipping preferences, and customer addresses in seconds",
    screen: Step1,
  },
  {
    id: 3,
    title: "Compare Carrier Rates",
    description:
      "See all available shipping rates from trusted carriers in real time. Choose based on cost, speed, delivery method, or customer preferences — all optimized for the UAE and global delivery",
    screen: Step1,
  },
  {
    id: 4,
    title: "Generate Labels and Ship",
    description:
      "Generate shipping labels directly from your dashboard or API. Download, print, and attach them to your packages. Schedule pickups or drop them at the nearest location depending on the carrier.",
    screen: Step1,
  },
  {
    id: 5,
    title: "Track and Manage Returns",
    description:
      "Monitor your shipments across all carriers, all in one place. Provide customers with tracking links and set up simple return workflows. Return labels and statuses are managed in your dashboard automatically.",
    screen: Step1,
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-14 tracking-tight bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
            How It Works
          </h1>

          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16 lg:flex-nowrap">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex flex-col items-center px-3 lg:px-6 py-4 rounded-2xl shadow-md transition-all duration-300 w-40 lg:w-full
                ${activeStep === step.id
                    ? "bg-bluecustom text-white scale-105"
                    : "bg-white  hover:bg-blue-50"
                  }`}
              >
                <span className="text-2xl font-bold mb-2">{step.id}</span>
                <span className="text-base md:text-lg font-medium">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`desc-${steps[activeStep - 1].id}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left bg-white p-8 rounded-2xl shadow-xl"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-bluecustom">
                  {steps[activeStep - 1].title}
                </h2>
                <p className="text-lg md:text-xl  leading-relaxed">
                  {steps[activeStep - 1].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={steps[activeStep - 1].id}
                src={steps[activeStep - 1].screen}
                alt={steps[activeStep - 1].title}
                className="w-full max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      <LoginButton />
    </>
  );
}
