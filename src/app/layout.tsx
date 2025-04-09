import { ReactNode } from "react";
import "./globals.css";

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
