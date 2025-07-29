"use client"
import { CheckCircle } from "lucide-react"

export default function EverythingYouNeedSection() {
  const leftFeatures = [
    "Real-time pool monitoring and analytics",
    "Automated loan processing workflows",
    "Built-in compliance and risk management",
    "Multi-environment deployment support",
  ]

  const rightFeatures = [
    "Advanced error handling and retry logic",
    "Comprehensive logging and observability",
    "Performance optimization out of the box",
    "24/7 technical support and documentation",
  ]

  return (
    <section className="bg-white w-full max-w-[1152px] mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2
          className="text-[32px] sm:text-[36px] font-bold text-gray-900"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Everything You Need
        </h2>
        <p
          className="text-[18px] sm:text-[20px] text-gray-500 max-w-xl mx-auto mt-4"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Comprehensive tooling for professional Blend integrations
        </p>
      </div>

      {/* Features grid */}
      <div className="grid md:grid-cols-2 gap-36 w-full mx-auto">
        <div className="space-y-6 md:pr-40">
          {leftFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" strokeWidth={2} />
              <span className="text-[16px] leading-[24px] text-gray-900" style={{ fontFamily: "Geist, sans-serif" }}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {rightFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" strokeWidth={2} />
              <span className="text-[16px] leading-[24px] text-gray-900" style={{ fontFamily: "Geist, sans-serif" }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
