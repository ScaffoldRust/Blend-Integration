export default function GetStartedSteps() {
  const steps = [
    {
      number: 1,
      title: "Install the Template",
      description:
        "Use Scaffold Rust to generate your project with Blend integration pre-configured",
      code: `git clone https://github.com/ScaffoldRust/Blend-Integration.git && cd Blend-Integration`,
    },
    {
      number: 2,
      title: "Configure Your API Keys",
      description:
        "Add your Blend API credentials to the environment configuration",
      code: `cp .env.example .env\n# Edit .env file with your Blend API credentials`,
    },
    {
      number: 3,
      title: "Build and Run",
      description:
        "Build and run your Blend integration locally or deploy to your preferred platform",
      code: `bun install && bun run dev`,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4">
            Get Started in 3 Steps
          </h2>
          <p className="text-lg text-zinc-500 font-normal">
            From zero to production in minutes
          </p>
        </div>

        <div className="space-y-8 ">
          {steps.map((step) => (
            <div className="flex gap-6 w-fit" key={step.number}>
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-500 font-normal text-base mb-4">
                  {step.description}
                </p>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-white font-mono text-sm whitespace-pre">
                    {step.code}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
