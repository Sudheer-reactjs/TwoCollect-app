import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Step1 from "../assets/laptop.png";

const steps = [
  {
    id: 1,
    title: "Create Your Account",
    description: "",
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
      "See all available shipping rates from trusted carriers in real time. Choose based on cost, speed, delivery method, or customer preferences — all optimized for the UAE and global delivery.",
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
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-8 text-center md:mb-14">
          How it works
        </h1>

        {/* Steps */}
        <div className="flex w-full gap-3 mb-12 flex-wrap justify-center lg:justify-between">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex flex-col items-center max-w-[30%] lg:max-w-max text-sm md:text-base transition font-medium ${
                activeStep === step.id ? "" : "text-gray-400 "
              }`}
            >
              <span
                className={`w-8 h-8 rounded-md flex items-center justify-center mb-2 ${
                  activeStep === step.id
                    ? "bg-bluecustom text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {step.id}
              </span>
              {step.title}
            </button>
          ))}
        </div>

        {/* Laptop with animated screen */}
        <div className="relative flex justify-center w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.img
              key={steps[activeStep - 1].id}
              src={steps[activeStep - 1].screen}
              alt={steps[activeStep - 1].title}
              className="w-full h-full object-cover max-w-[490px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Description with slide animation */}
          <AnimatePresence mode="wait">
            {steps[activeStep - 1].description && (
              <motion.div
                key={`desc-${steps[activeStep - 1].id}`}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-[18%] left-0 max-w-60 z-0 overflow-hidden bg-white p-3 rounded-lg shadow-xl"
              >
                <p className="max-w-2xl mx-auto text-xs md:text-sm text-left">
                  {steps[activeStep - 1].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
