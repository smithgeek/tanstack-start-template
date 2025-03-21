import { MainLayout } from "@/components/layout/MainLayout";
import { seo } from "@/lib/seo";
import { DevToolsWrapper } from "@/lib/useDevTools";
import { AppQueryContextProvider } from "@/router";
import appCss from "@/styles/app.css?url";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { StrictMode } from "react";

// components

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		component: RootComponent,
		head: () => ({
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				...seo({
					title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
					description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
				}),
			],
			links: [
				{ rel: "stylesheet", href: appCss },
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon-16x16.png",
				},
				{ rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
				{ rel: "icon", href: "/favicon.ico" },
			],
		}),
	}
);

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body>
				<StrictMode>
					<AppQueryContextProvider>
						<MainLayout>{children}</MainLayout>
						<DevToolsWrapper>
							<ReactQueryDevtools buttonPosition="bottom-left" />
						</DevToolsWrapper>
					</AppQueryContextProvider>
				</StrictMode>

				<Scripts />
			</body>
		</html>
	);
}
