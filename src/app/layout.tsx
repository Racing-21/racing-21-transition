import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Racing 21 Transition",
	description: "Racing 21 Transition Web Application",
	manifest: "/site.webmanifest",
	themeColor: "#000000",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: "Racing 21",
	},
};

export default function RootLayout({ children, }: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={'antialiased'}>
				<main className={"flex flex-col min-w-[100vw] min-h-[100vh]"}>{children}</main>
			</body>
		</html>
	);
}
