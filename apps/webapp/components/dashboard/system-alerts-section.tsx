"use client";

import { AlertTriangle, Info } from "lucide-react";
import { motion } from "framer-motion";

interface Alert {
  id: string;
  type: "warning" | "info";
  headline: string;
  description: string;
  actionLabel: string;
  onAction?: () => void;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "warning",
    headline: "High utilization detected",
    description: "Auto Loan Pool is at 95% capacity",
    actionLabel: "Review",
    onAction: () => console.log("Review clicked"),
  },
  {
    id: "2",
    type: "info",
    headline: "Rebalancing recommended",
    description: "SMB Lending Pool could benefit from rebalancing",
    actionLabel: "Configure",
    onAction: () => console.log("Configure clicked"),
  },
];

const alertVariants = {
  warning: {
    background: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    icon: AlertTriangle,
  },
  info: {
    background: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    icon: Info,
  },
};

export function SystemAlertsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          <h2 className="text-xl font-semibold">System Alerts</h2>
        </div>
        <p className="text-sm text-zinc-500 mb-4">
          Important notifications and warnings
        </p>
      </div>

      <div className="space-y-4">
        {mockAlerts.map((alert, index) => {
          const variant = alertVariants[alert.type];
          const IconComponent = variant.icon;

          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              role="alert"
              aria-live="polite"
              className={`
                rounded-md p-4 border transition-all duration-200 hover:shadow-sm
                ${variant.background} ${variant.border}
                flex flex-col sm:flex-row sm:items-center sm:justify-between
                gap-2 sm:gap-4
              `}
            >
              <div className="flex items-start gap-3 flex-1">
                <IconComponent
                  className={`w-4 h-4 mt-0.5 flex-shrink-0 ${variant.text}`}
                />
                <div className="flex-1 min-w-0">
                  <h3 className={`font-bold ${variant.text} mb-1`}>
                    {alert.headline}
                  </h3>
                  <p className={`text-sm ${variant.text} opacity-90`}>
                    {alert.description}
                  </p>
                </div>
              </div>

              <button
                onClick={alert.onAction}
                className="
                  py-1 px-3 text-sm rounded border border-gray-300 
                  bg-white hover:bg-gray-50 
                  transition-colors duration-200
                  self-start sm:self-center
                  flex-shrink-0
                "
              >
                {alert.actionLabel}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
