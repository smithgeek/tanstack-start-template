import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export function NotFound({ children }: { children?: any }) {
	return (
		<div className="flex flex-col justify-center items-center flex-1 gap-4">
			<div className="text-gray-600 dark:text-gray-400">
				{children || (
					<p>The page you are looking for does not exist.</p>
				)}
			</div>
			<p className="flex items-center gap-2 flex-wrap">
				<Button theme="secondary" onClick={() => window.history.back()}>
					Go back
				</Button>
				<Link to="/">
					<Button>Start Over</Button>
				</Link>
			</p>
		</div>
	);
}
