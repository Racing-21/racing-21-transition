import { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Racing 21 Transition",
	description: "Racing 21 Transition Web Application",
	manifest: "/site.webmanifest",
	themeColor: "#000000",
	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
			<body className={'antialiased overflow-x-hidden'}>
				<main className={"flex flex-col w-full min-h-screen"}>{children}</main>
			</body>
		</html>
	);
}
