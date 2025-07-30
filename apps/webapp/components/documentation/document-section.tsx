import React from "react";

interface Topic {
  title: string;
  description: string;
  href: string;
}

const gettingStarted: Topic[] = [
  {
    title: "Installation",
    description: "Install Scaffold Rust and Blend SDK",
    href: "#installation",
  },
  {
    title: "Configuration",
    description: "Configure your environment and API keys",
    href: "#configuration",
  },
  {
    title: "First Integration",
    description: "Create your first Blend pool integration",
    href: "#first-integration",
  },
];

const advancedTopics: Topic[] = [
  {
    title: "Pool Management",
    description: "Advanced pool configuration and monitoring",
    href: "#pool-management",
  },
  {
    title: "Security & Compliance",
    description: "Security best practices and compliance",
    href: "#security-compliance",
  },
  {
    title: "Deployment",
    description: "Production deployment strategies",
    href: "#deployment",
  },
];

const DocumentationSections: React.FC = () => {
  const renderSection = (title: string, topics: Topic[]) => (
    <div>
      <h2 className="font-semibold text-lg mb-4">{title}</h2>
      {topics.map((topic) => (
        <a
          key={topic.title}
          href={topic.href}
          className="block bg-zinc-50 hover:shadow-md transition rounded-xl p-4 mb-4"
        >
          <h3 className="font-medium">{topic.title}</h3>
          <p className="text-sm text-zinc-500">{topic.description}</p>
        </a>
      ))}
    </div>
  );

  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">
        Documentation Sections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {renderSection("Getting Started", gettingStarted)}
        {renderSection("Advanced Topics", advancedTopics)}
      </div>
    </section>
  );
};

export default DocumentationSections;
