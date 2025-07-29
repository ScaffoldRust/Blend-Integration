import { ExamplesTemplatesGrid } from "@/components/examples-templates/example-template-grid";

export default function ExamplesTemplatesPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Examples & Templates</h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto">
            Ready-to-use examples and templates to accelerate your Blend integration
          </p>
        </div>

        {/* Templates grid */}
        <ExamplesTemplatesGrid />
      </div>
    </div>
  )
}
