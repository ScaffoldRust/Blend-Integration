"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Book, Code2Icon, Zap } from "lucide-react";
import Link from "next/link";

export function DocumentationHero() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Documentation</h1>
        <p className="text-lg text-zinc-500">
          Everything you need to integrate Blend with Scaffold Rust
        </p>
        <form className="w-full max-w-lg mx-auto mt-8">
          <Input
            type="text"
            placeholder="Search documentation..."
            className="rounded-md px-4 py-3 shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Search documentation"
          />
        </form>
      </div>
      <nav className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Quick Start Card */}
        <Card className="hover:shadow-md transition">
          <CardHeader className="flex flex-col justify-start items-start gap-4">
            <Zap className="w-8 h-8 text-black" />
            <div className="space-y-2">
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Get up and running in 5 minutes</CardDescription>
            </div>
          </CardHeader>
          <CardFooter>
            <Button
              asChild
              className="bg-black text-white hover:bg-zinc-800 w-full"
            >
              <Link href="/documentation/quick-start">Start Here &rarr;</Link>
            </Button>
          </CardFooter>
        </Card>
        {/* API Reference Card */}
        <Card className="hover:shadow-md transition">
          <CardHeader className="flex flex-col justify-start items-start gap-4">
            <Code2Icon className="w-8 h-8 text-blue-600" />
            <div className="space-y-2">
              <CardTitle>API Reference</CardTitle>
              <CardDescription>
                Complete API documentation and examples
              </CardDescription>
            </div>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/documentation/api">View API Reference &rarr;</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Guides Card */}
        <Card className="hover:shadow-md transition">
          <CardHeader className="flex flex-col justify-start items-start gap-4">
            <Book className="w-8 h-8 text-green-600" />
            <div className="space-y-2">
              <CardTitle>Guides</CardTitle>
              <CardDescription>
                Step-by-step tutorials and best practices
              </CardDescription>
            </div>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/documentation/guides">View Guides &rarr;</Link>
            </Button>
          </CardFooter>
        </Card>
      </nav>
    </section>
  );
}

export default DocumentationHero;
