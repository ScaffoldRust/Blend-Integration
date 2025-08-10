# Blend Template

Professional-grade templates and tools to integrate Blend's lending platform with pools and financial services. Built for developers who value speed and reliability.

## 🚀 Features

- **Next.js 15** with App Router for modern web development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible, unstyled components
- **shadcn/ui** for beautiful, customizable components
- **ESLint & Biome** for code quality and formatting
- **Husky** for Git hooks
- **Monorepo Structure** with apps and packages organization
- **Smart Contract Integration** ready for blockchain lending protocols
- **Financial Services Architecture** designed for DeFi applications

## 🏗 Tech Stack

- **Frontend:** Next.js 15 + App Router
- **Styling:** Tailwind CSS & shadcn/ui
- **Package Management:** Bun
- **Code Quality:** ESLint, Biome, Husky
- **Language:** TypeScript
- **Blockchain:** Soroban (Stellar) smart contracts
- **State Management:** Zustand

---

## 📂 Project Structure

```
blend-template/
├── .husky/                 # Pre-commit hooks
├── apps/
│   ├── webapp/             # Main Next.js application
│   │   ├── app/            # Next.js App Router pages
│   │   ├── components/     # React components
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── lib/            # Utility functions and helpers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── store/          # State management
│   │   ├── constants/      # Application constants
│   │   ├── public/         # Static assets
│   │   ├── .env.sample     # Example environment file
│   │   ├── components.json # shadcn/ui components
│   │   ├── eslint.config.mjs  # Linter configuration
│   │   ├── next.config.ts  # Next.js configuration
│   │   ├── package.json    # Dependencies
│   │   ├── tailwind.config.ts # Tailwind CSS configuration
│   │   └── tsconfig.json   # TypeScript configuration
│   └── contracts/          # Soroban smart contracts for lending
├── packages/               # Shared packages (if needed)
├── .gitignore              # Git ignored files
├── bun.lock                # Bun package lock file
├── commitlint.config.js    # Commit message rules
├── README.md               # Project documentation
└── package.json            # Root package dependencies
```

---

## 🏃 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js (v18 or higher)](https://nodejs.org/)
- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)
- [Rust](https://rustup.rs/) (for smart contract development)
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/setup) (for Stellar contracts)

### Clone and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blend-template.git
   cd blend-template
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Architecture Overview

### Frontend

- Uses **Next.js 15** with the **App Router**
- Modular structure with reusable components
- Optimized with **shadcn/ui** and **Tailwind CSS**
- Ready for financial data visualization and lending interfaces

### Smart Contracts

- **Soroban (Stellar)** smart contracts for lending protocols
- Modular contract architecture for different lending products
- Integration ready for Blend's lending platform

### Key Features

#### 🎨 UI Components

- Pre-configured shadcn/ui components
- Responsive design with Tailwind CSS
- Accessible components with Radix UI primitives
- Financial data visualization components

#### 🔧 Development Tools

- TypeScript for type safety
- ESLint and Biome for code quality
- Husky for Git hooks
- Prettier for code formatting

#### 💰 Financial Integration

- Lending pool management interfaces
- Interest rate calculations
- Collateral management
- Risk assessment tools

---

## 🛠 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun format-and-lint:fix` - Format and fix linting issues

---

## 📦 Adding New Components

This template uses shadcn/ui for components. To add new components:

```bash
cd apps/webapp
bunx shadcn@latest add button
bunx shadcn@latest add card
bunx shadcn@latest add table
bunx shadcn@latest add chart
# etc...
```

---

## 🔒 Best Practices

- **TypeScript**: Use strict type checking
- **Component Structure**: Follow single responsibility principle
- **Styling**: Use Tailwind CSS utility classes
- **Accessibility**: Ensure all components are accessible
- **Performance**: Optimize for Core Web Vitals
- **Security**: Implement proper validation for financial data
- **Testing**: Write comprehensive tests for lending logic

---

## 🚀 Blend Integration

This template is designed to integrate seamlessly with Blend's lending platform:

- **Pool Management**: Create and manage lending pools
- **Interest Calculations**: Implement dynamic interest rate models
- **Collateral Management**: Handle collateral deposits and liquidations
- **Risk Assessment**: Integrate risk scoring and management tools
- **Compliance**: Built-in compliance and regulatory features

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 🚀 Contributing

We welcome contributions! Feel free to submit pull requests or open issues.

---

Made with ❤️ by the Scaffold Rust Team
