import Link from 'next/link'

export function FooterNavigation() {
	return (
		<footer className="bg-slate-900 text-white animate-fade-in" role="contentinfo">
			<div className="container mx-auto px-4 py-12">
				{/* Upper Section - Main Navigation */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					{/* Branding Block */}
					<div className="md:col-span-1">
						<div className="flex items-center space-x-3 mb-4">
							<div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
								<span className="text-white font-mono text-sm">&lt;/&gt;</span>
							</div>
							<span className="text-base font-semibold">Blend Integration</span>
						</div>
						<p className="text-zinc-400 text-sm">
							Professional-grade Blend integration tools powered by Scaffold Rust.
						</p>
					</div>

					{/* Product Links */}
					<div className="md:col-span-1">
						<h3 className="text-base font-semibold mb-4">Product</h3>
						<nav className="space-y-2" role="navigation" aria-label="Product navigation">
							<Link 
								href="/features" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								Features
							</Link>
							<Link 
								href="/templates" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								Templates
							</Link>
							<Link 
								href="/integrations" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								Integrations
							</Link>
						</nav>
					</div>

					{/* Developers Links */}
					<div className="md:col-span-1">
						<h3 className="text-base font-semibold mb-4">Developers</h3>
						<nav className="space-y-2" role="navigation" aria-label="Developers navigation">
							<Link 
								href="/documentation" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								Documentation
							</Link>
							<Link 
								href="/api-reference" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								API Reference
							</Link>
							<Link 
								href="/examples" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								Examples
							</Link>
							<Link 
								href="/community" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								Community
							</Link>
						</nav>
					</div>

					{/* Company Links */}
					<div className="md:col-span-1">
						<h3 className="text-base font-semibold mb-4">Company</h3>
						<nav className="space-y-2" role="navigation" aria-label="Company navigation">
							<Link 
								href="/about" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								About
							</Link>
							<Link 
								href="/blog" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								Blog
							</Link>
							<Link 
								href="/careers" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								Careers
							</Link>
							<Link 
								href="/contact" 
								className="block text-zinc-400 text-sm hover:text-white transition-colors"
							>
								Contact
							</Link>
						</nav>
					</div>
				</div>

				{/* Bottom Row - Copyright and Badge */}
				<div className="border-t border-slate-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-zinc-400 text-sm">
							© 2024 Blend Integration. Powered by Scaffold Rust.
						</div>
						<div className="flex items-center space-x-4">
							<span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">
								Scaffold Rust
							</span>
							<Link 
								href="https://blend.com" 
								className="text-white text-sm hover:text-zinc-300 transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								blend.com
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
} 