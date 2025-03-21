import { ReactNode } from "@tanstack/react-router";
import { useMemo } from "react";
import { getStorageValue } from "./storage";

function getLocationHref() {
	try {
		return location.href;
	} catch (error) {
		return "";
	}
}

export function useDevTools() {
	return useMemo(() => {
		const href = getLocationHref();
		return (
			href.includes("localhost") ||
			href.includes("dev=true") ||
			getStorageValue<string>("showDevTools", "false") == "true"
		);
	}, []);
}

export function DevToolsWrapper({ children }: { children: ReactNode }) {
	const showDevTools = useDevTools();
	if (showDevTools) {
		return <>{children}</>;
	}
	return null;
}
