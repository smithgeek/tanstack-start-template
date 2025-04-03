import { Link, LinkProps } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { SiteInfo } from "../../site-info";
import { Button } from "../ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "../ui/navigation-menu";
interface MainLayoutProps {
	children: React.ReactNode;
	className?: string;
}

interface IRoute {
	link: LinkProps["to"];
	label: string;
	quick?: boolean;
}

const routes: IRoute[] = [
	{
		link: "/about",
		label: "About",
		quick: true,
	},
];

export function MainLayout({ children, className }: MainLayoutProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-background flex flex-col">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
					<div className="flex items-center gap-6">
						<Link to="/" className="flex items-center space-x-2">
							<span className="text-xl font-bold text-primary">
								<Link to="/">{SiteInfo.companyName}</Link>
							</span>
						</Link>
						{/* Desktop Navigation */}
						<NavigationMenu className="hidden md:block">
							<NavigationMenuList>
								{routes.map(route => (
									<NavigationMenuItem key={route.link}>
										<Link
											to={route.link}
											className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
										>
											{route.label}
										</Link>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>

						{/* Mobile Navigation */}
						<div className="md:hidden">
							<Button
								variant="ghost"
								size="icon"
								className="relative"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								aria-label="Toggle Menu"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="4" y1="12" x2="20" y2="12" />
									<line x1="4" y1="6" x2="20" y2="6" />
									<line x1="4" y1="18" x2="20" y2="18" />
								</svg>
							</Button>
							{isMenuOpen && (
								<div className="absolute top-16 left-0 right-0 bg-background border-b p-4">
									<nav className="flex flex-col gap-4">
										{routes.map(route => (
											<Link
												to={route.link}
												className="px-4 py-2 text-sm hover:bg-accent rounded-md"
												onClick={() =>
													setIsMenuOpen(false)
												}
											>
												{route.label}
											</Link>
										))}
									</nav>
								</div>
							)}
						</div>
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
							<h3 className="text-lg font-semibold">
								<Link to="/">{SiteInfo.companyName}</Link>
							</h3>
							<p className="mt-2 text-sm text-muted-foreground">
								Professional website.
							</p>
						</div>
						<div>
							<h4 className="text-sm font-semibold">
								Quick Links
							</h4>
							<ul className="mt-2 space-y-1">
								{routes
									.filter(route => route.quick)
									.map(route => (
										<li key={route.link}>
											<Link
												to={route.link}
												className="text-sm text-muted-foreground hover:text-primary"
											>
												{route.label}
											</Link>
										</li>
									))}
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
