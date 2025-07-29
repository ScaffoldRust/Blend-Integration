import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-6 py-16">
      {/* Badge */}
      <Badge variant="herosection" className="mb-6">
        🚀 Production Ready
      </Badge>
      
      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
        Integrate <span className="text-orange-500">Blend</span> in Minutes
      </h1>
      
      {/* Description */}
      <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
        Professional-grade templates and tools to integrate Blend's lending platform with 
        pools and financial services. Built for developers who value speed and reliability.
      </p>
      
      {/* Buttons, hrefs are not available (for now)*/}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link href="/get-started">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
            Get Started <ArrowRight className="ml-2 size-4" />
          </Button>
        </Link>
        <Link href="/docs">
          <Button variant="outline" size="lg" className="px-8 py-3">
            <BookOpen className="mr-3 size-4"/> View Docs
          </Button>
        </Link>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-black mb-2">5min</div>
          <div className="text-gray-500">Setup Time</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-black mb-2">99.9%</div>
          <div className="text-gray-500">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-black mb-2">1000+</div>
          <div className="text-gray-500">Developers</div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection