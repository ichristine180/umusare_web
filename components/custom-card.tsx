import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const statusColors: Record<string, string> = {
  green: "#16A34A",
  yellow: "#FFC107",
  red: "#DC3545",
};

interface CardData {
  image: string;
  title: string;
  description: string;
  link?: string;
  status?: "green" | "yellow" | "red";
  badge?: string;
  price?: string;
}

interface CustomCardProps {
  data: CardData;
}

export default function CustomCard({ data }: CustomCardProps) {
  const { image, title, description, link, status, badge, price } = data;
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();
  return (
    <div className="group relative">
      <Link
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        passHref
        className="block"
      >
        <div
          className="relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-[#f06521]/20 hover:border-[#f06521]/40 transition-all duration-300 ease-out transform hover:-translate-y-1 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Status indicator */}
          {status && (
            <div
              className="absolute top-3 right-3 w-3 h-3 rounded-full z-10 animate-pulse"
              style={{ backgroundColor: statusColors[status] }}
            />
          )}

          {/* Badge */}
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: "#f06521" }}
              >
                {badge}
              </span>
            </div>
          )}

          {/* Image Section */}
          <div className="relative h-48 w-full overflow-hidden bg-gray-50">
            <Image
              src={`/${image}`}
              alt={title}
              fill
              className={`object-cover transition-transform duration-500 ease-out ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Overlay gradient */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: `linear-gradient(to top, rgba(240, 101, 33, 0.3) 0%, transparent 100%)`,
              }}
            />

            {/* Price tag */}
            {price && (
              <div
                className={`absolute bottom-3 right-3 transition-all duration-300 transform ${
                  isHovered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
              >
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white shadow-lg"
                  style={{ backgroundColor: "#f06521" }}
                >
                  {price}
                </span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="flex flex-col space-y-3">
              {/* Title */}
              <div className="flex justify-between items-start">
                <h3
                  className={`font-semibold text-lg line-clamp-2 transition-colors duration-200 ${
                    isHovered ? "" : "text-gray-900"
                  }`}
                  style={{ color: isHovered ? "#f06521" : "#111827" }}
                >
                  {title || "No title"}
                </h3>

                {/* Arrow Icon */}
                <div
                  className={`flex-shrink-0 ml-3 transition-all duration-300 transform ${
                    isHovered ? "translate-x-1" : "translate-x-0"
                  }`}
                  style={{ color: isHovered ? "#f06521" : "#9ca3af" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                {description}
              </p>

              {/* Action bar */}
              <div
                className={`flex items-center justify-between pt-2 border-t transition-all duration-300 ${
                  isHovered ? "" : "border-gray-100"
                }`}
                style={{
                  borderTopColor: isHovered
                    ? "rgba(240, 101, 33, 0.2)"
                    : "#f3f4f6",
                }}
              >
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                    style={{
                      background:
                        "linear-gradient(135deg, #f06521 0%, #d4541e 100%)",
                      boxShadow: isHovered
                        ? "0 4px 20px rgba(240, 101, 33, 0.4)"
                        : "0 2px 8px rgba(240, 101, 33, 0.2)",
                    }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors duration-200`}
                    style={{ color: isHovered ? "#f06521" : "#6b7280" }}
                  >
                    {t("Ordernow")}
                  </span>
                </div>

                {/* Additional info */}
                <div className="flex items-center space-x-1">
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full border-2 border-white transition-transform duration-200 ${
                          isHovered ? "scale-110" : "scale-100"
                        }`}
                        style={{
                          background: `linear-gradient(135deg, rgba(240, 101, 33, 0.4) 0%, rgba(240, 101, 33, 0.6) 100%)`,
                          transitionDelay: `${i * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shimmer effect overlay */}
          <div
            className={`absolute inset-0 -top-full transform skew-x-12 transition-transform duration-1000 ${
              isHovered ? "translate-x-full" : "-translate-x-full"
            }`}
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(240, 101, 33, 0.1) 50%, transparent 100%)",
            }}
          />
        </div>
      </Link>
    </div>
  );
}
