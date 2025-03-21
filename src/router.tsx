import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "./components/DefaultCatchBoundary";
import { NotFound } from "./components/NotFound";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

// Create a new router instance
export function createRouter() {
	return createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		context: { queryClient },
		defaultPreload: "intent",
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => <NotFound />,
	});
}

export function AppQueryContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
