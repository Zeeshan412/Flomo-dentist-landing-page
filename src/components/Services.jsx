import React from "react";

const services = [
  {
    title: "Teeth Whitening",
    description: "Brighten your smile with our safe and effective whitening treatments.",
    icon: "🦷",
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth with strong, natural-looking implants.",
    icon: "🪥",
  },
  {
    title: "Braces & Invisalign",
    description: "Get the perfect alignment with modern braces or clear aligners.",
    icon: "😬",
  },
  {
    title: "Root Canal Therapy",
    description: "Save infected teeth with painless and precise root canal procedures.",
    icon: "🧪",
  },
];

const Services = () => {
  return (
    <div id="services" className="min-h-screen bg-white px-6 py-16 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#00214d]">
        Our Services
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f3f7fb] p-6 rounded-2xl shadow hover:shadow-lg transition-all"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#00214d] mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
