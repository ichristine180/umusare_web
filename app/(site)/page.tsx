"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CardsLayer from "@/components/CardsLayer";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeQuickService, setActiveQuickService] = useState<number | null>(
    null
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Function to generate WhatsApp URL
  const generateWhatsAppURL = (serviceName: string) => {
    const phoneNumber = "250780289113";
    const message = t(`whatsappMessage`);
    const encodedMessage = encodeURIComponent(message + " " + serviceName);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const services = [
    {
      image: "motor.png",
      title: t("Pikipiki Express"),
      description: t("motorDescription"),
      icon: "🏍️",
      features: ["Fast Delivery", "City Wide", "24/7 Available"],
      color: "#f06521",
    },
    {
      image: "truck.png",
      title: "MoveIt Truck",
      description: t("truckDescription"),
      icon: "🚛",
      features: ["Heavy Loads", "Long Distance", "Professional"],
      color: "#f06521",
    },
    {
      image: "driver.jpeg",
      title: "Sober Driver",
      description: t("driverDescription"),
      icon: "👨‍✈️",
      features: ["Safe Transport", "Reliable", "Licensed"],
      color: "#f06521",
    },
  ];

  // Quick order services (simplified version for quick access)
  const quickServices = [
    {
      icon: "🏍️",
      title: "Pikipiki",
      subtitle: "Fast Delivery",
      color: "#f06521",
      serviceName: t("Pikipiki Express"),
    },
    {
      icon: "🚛",
      title: "Truck",
      subtitle: "Heavy Items",
      color: "#f06521",
      serviceName: "MoveIt Truck",
    },
    {
      icon: "👨‍✈️",
      title: "Driver",
      subtitle: "Safe Transport",
      color: "#f06521",
      serviceName: "Sober Driver",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-5 animate-pulse"
          style={{ backgroundColor: "#f06521" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-5 animate-pulse"
          style={{ backgroundColor: "#f06521", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-3 animate-spin"
          style={{
            backgroundColor: "#f06521",
            animationDuration: "20s",
            animationDirection: "reverse",
          }}
        />
      </div>

      <div className="flex-grow relative z-0">
        {/* Header with fade-in animation */}
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <Header />
        </div>

        {/* Compact Quick Order Section - Mobile Optimized */}
        <div className="container mx-auto max-w-6xl px-4 py-3 mt-2">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Compact Quick Order Bar */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">
              {/* Header Strip */}
              <div className="bg-gradient-to-r from-[#f06521] to-[#d4541e] px-4 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-white font-semibold text-sm">
                      Quick Order
                    </span>
                    <div className="w-1 h-1 bg-white/50 rounded-full mx-2"></div>
                    <span className="text-white/80 text-xs">
                      Tap to order instantly
                    </span>
                  </div>
                  <div className="text-white text-xs bg-white/20 px-2 py-1 rounded-full">
                    24/7
                  </div>
                </div>
              </div>

              {/* Service Buttons Row */}
              <div className="p-3">
                <div className="grid grid-cols-3 gap-2">
                  {quickServices.map((service, index) => (
                    <a
                      key={index}
                      href={generateWhatsAppURL(service.serviceName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onMouseEnter={() => setActiveQuickService(index)}
                      onMouseLeave={() => setActiveQuickService(null)}
                    >
                      <div
                        className={`bg-gray-50 hover:bg-[#f06521] hover:text-white rounded-lg p-3 text-center transition-all duration-300 transform hover:scale-105 border ${
                          activeQuickService === index
                            ? "shadow-lg scale-105"
                            : "hover:shadow-md"
                        }`}
                      >
                        {/* Service Icon */}
                        <div className="text-2xl mb-1">{service.icon}</div>

                        {/* Service Title */}
                        <div className="font-medium text-xs mb-1">
                          {service.title}
                        </div>

                        {/* Service Subtitle */}
                        <div className="text-xs opacity-70">
                          {service.subtitle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Main Title with gradient */}
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent animate-pulse"
              style={{
                backgroundImage: `linear-gradient(135deg, #f06521 0%, #d4541e 50%, #f06521 100%)`,
                backgroundSize: "200% 200%",
                animation: "gradientShift 3s ease-in-out infinite",
              }}
            >
              Umusare
            </h1>

            {/* Animated underline */}
            <div className="relative mb-6">
              <div
                className="h-1 mx-auto rounded-full transition-all duration-1000 delay-600"
                style={{
                  width: isLoaded ? "100px" : "0px",
                  backgroundColor: "#f06521",
                }}
              />
            </div>

            {/* Description with typewriter effect */}
            <div className="max-w-2xl mx-auto">
              <p
                className={`text-gray-600 text-lg leading-relaxed transition-all duration-1000 delay-800 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              >
                {t("introduction")}
              </p>
            </div>

            {/* Floating stats */}
            <div
              className={`grid grid-cols-3 gap-4 mt-8 transition-all duration-1000 delay-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {[
                { number: "500+", label: "Deliveries" },
                { number: "24/7", label: "Available" },
                { number: "99%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#f06521" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-1200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <div
              className="w-20 h-1 mx-auto rounded-full mb-6"
              style={{ backgroundColor: "#f06521" }}
            />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of reliable delivery and transport services
            </p>
          </div>

          {/* Enhanced Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${1.4 + index * 0.2}s` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, #f06521 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Service Icon */}
                  <div className="absolute top-4 right-4 text-3xl animate-bounce">
                    {service.icon}
                  </div>

                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`/${service.image}`}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        activeCard === index ? "opacity-30" : "opacity-0"
                      }`}
                      style={{ backgroundColor: "#f06521" }}
                    />

                    {/* Features Badge */}
                    <div
                      className={`absolute top-4 left-4 transition-all duration-300 ${
                        activeCard === index
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-2 opacity-0"
                      }`}
                    >
                      <span
                        className="px-3 py-1 rounded-full text-white text-xs font-medium"
                        style={{ backgroundColor: "#f06521" }}
                      >
                        Premium Service
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#f06521] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center text-xs text-gray-500 mb-1 transition-all duration-300 ${
                            activeCard === index
                              ? "translate-x-2"
                              : "translate-x-0"
                          }`}
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mr-2"
                            style={{ backgroundColor: "#f06521" }}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* WhatsApp CTA Button */}
                    <a
                      href={generateWhatsAppURL(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <button
                        className="w-full py-3 px-4 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#f06521]/25"
                        style={{
                          backgroundColor: "#f06521",
                          boxShadow:
                            activeCard === index
                              ? "0 8px 25px rgba(240, 101, 33, 0.3)"
                              : "0 4px 15px rgba(240, 101, 33, 0.2)",
                        }}
                      >
                        <span className="flex items-center justify-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309" />
                          </svg>
                          {t("bookNow")}
                          <svg
                            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                              activeCard === index
                                ? "translate-x-1"
                                : "translate-x-0"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-[2200ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative bg-gradient-to-r from-[#f06521] to-[#d4541e] rounded-2xl p-8 text-white overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  Join umusare community
                </h3>
                <p className="mb-6 opacity-90">
                  {t("joincomunnitydescription")}
                </p>
                <a
                  href={"https://chat.whatsapp.com/DLiU1quIVlkCxpLdtNGARM"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-[#f06521] px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center mx-auto">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309" />
                    </svg>
                    Join Today
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with fade-in */}
      <div
        className={`transition-all duration-1000 delay-[2400ms] ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Footer />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}
