import HeroSection from "@/components/home/hero-section";
import { Book, Terminal } from 'lucide-react';
import FinalCTASection from '@/components/home/final-cta-section';
import QuickIntegrationExamples from "@/components/home/quick-integration-examples";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="p-8 space-y-6 text-center">
        <HeroSection />
              <QuickIntegrationExamples/>

        <FinalCTASection
        headline="Ready to Build with Blend?"
        subtitle="Join thousands of developers who trust Scaffold Rust for their financial integrations"
        buttons={[
          {
            title: 'Start Building Now',
            variant: 'secondary',
            link: '/home',
            icon: <Book className="w-4 h-4 mr-2" />,
          },
          {
            title: 'Read Documentation',
            variant: 'outline',
            link: '/documentation',
            icon: <Terminal className="w-4 h-4 mr-2" />,
          },
        ]}
      />
        </div>
      </div>
    </>
  );
}
