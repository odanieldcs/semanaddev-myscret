import type { Metadata } from 'next';
import { Inter, Exo_2 } from 'next/font/google';
import './globals.css';
import Header from './components/header';

const exo2 = Exo_2({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '600', '700'],
	variable: '--font-exo2',
});

export const metadata: Metadata = {
	title: 'MyScret',
	description: 'perguntas e respostas anonimas',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={exo2.variable}>
				<div className="backgroundGradient">
					<div className="flex flex-col items-center container mx-auto max-w-sm p-4 m-4">
						{/* <Header /> */}
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
