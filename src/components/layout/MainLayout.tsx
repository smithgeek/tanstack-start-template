import { Link } from "@tanstack/react-router";
import { cn } from "../../lib/utils";

interface MainLayoutProps {
	children: React.ReactNode;
	className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
					<div className="flex items-center gap-6">
						<Link to="/" className="flex items-center space-x-2">
							<span className="text-xl font-bold text-primary">
								My Site
							</span>
						</Link>
						<nav className="hidden md:flex gap-6"></nav>
					</div>
				</div>
			</header>
			<main
				className={cn(
					"container mx-auto max-w-7xl px-4 py-8 flex-1",
					className
				)}
			>
				{children}
			</main>
			<footer className="border-t bg-background">
				<div className="container mx-auto max-w-7xl px-4 pt-8 pb-2">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
						<div>
							<h3 className="text-lg font-semibold">My Site</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Professional website.
							</p>
						</div>
						<div>
							<h4 className="text-sm font-semibold">
								Quick Links
							</h4>
							<ul className="mt-2 space-y-1">
								<li>
									<Link
										to="/"
										className="text-sm text-muted-foreground hover:text-primary"
									>
										Home
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-2 text-center text-sm text-muted-foreground">
						<p>
							&copy;{" "}
							{`${new Date().getFullYear()} All rights reserved`}
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
