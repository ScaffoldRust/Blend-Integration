# Blend Webapp

This is the main Next.js application for the Blend lending platform template. Built for developers who want to create financial applications with modern web technologies.

## 🚀 Features

- **Next.js 15** with App Router for modern web development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible, unstyled components
- **shadcn/ui** for beautiful, customizable components
- **ESLint & Biome** for code quality and formatting
- **Zustand** for state management
- **Financial Data Visualization** ready for lending interfaces

---

## 🏃 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js (v18 or higher)](https://nodejs.org/)
- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)

### Setup

1. Install dependencies:

   ```bash
   bun install
   ```

2. Start the development server:

   ```bash
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## 🏗 Architecture

The web application follows a structured component-based approach:

- **App Router**: Next.js 15 App Router for routing
- **Components**: Reusable UI elements (`components/`)
- **UI Components**: Basic UI building blocks (`components/ui/`)
- **Lib**: Utility functions and helpers (`lib/`)
- **Hooks**: Custom React hooks (`hooks/`)
- **Store**: State management with Zustand (`store/`)
- **Constants**: Application constants (`constants/`)

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

### Financial Features Ready

This template is pre-configured for lending applications:

- **Lending Pool Management**: Interfaces for creating and managing pools
- **Interest Rate Calculations**: Dynamic rate models and calculations
- **Collateral Management**: Deposit and liquidation interfaces
- **Risk Assessment**: Risk scoring and management tools
- **Data Visualization**: Charts and graphs for financial data

### Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 🚀 Contributing

We welcome contributions! Feel free to submit pull requests or open issues.

---

Made with ❤️ by the Scaffold Rust Team
