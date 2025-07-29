import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock } from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type WhyChooseIntegrationProps = {
  heading?: string;
  subtitle?: string;
  features?: Feature[];
};

const defaultFeatures: Feature[] = [
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "Lightning Fast Setup",
    description: "Get your Blend integration running in under 5 minutes with our pre-configured templates"
  },
  {
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: "Enterprise Security",
    description: "Built-in security best practices and compliance features for financial applications"
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "Real-time Pools",
    description: "Advanced pool management with real-time updates and automated rebalancing"
  }
];

export function WhyChooseIntegrationSection({
  heading = "Why Choose Our Integration?",
  subtitle = "Built with Scaffold Rust's powerful tooling for maximum developer efficiency",
  features = defaultFeatures
}: WhyChooseIntegrationProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg rounded-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-left">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-left">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}