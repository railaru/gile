import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

import RouteChangeAnimation from '@/app/RouteChangeAnimation/RouteChangeAnimation';
import { ClerkProvider } from '@clerk/nextjs';
import ConvexClientProvider from '@/app/Providers/ConvexClientProvider';

const matter = localFont({
	variable: '--font-matter',
	src: [
		{
			path: './../../public/assets/fonts/Matter-Light.ttf',
			weight: '200',
		},
		{
			path: './../../public/assets/fonts/Matter-LightItalic.ttf',
			weight: '200',
			style: 'italic',
		},
		{
			path: './../../public/assets/fonts/Matter-Regular.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './../../public/assets/fonts/Matter-RegularItalic.ttf',
			weight: '300',
			style: 'italic',
		},
		{
			path: './../../public/assets/fonts/Matter-Medium.ttf',
			weight: '400',
		},
		{
			path: './../../public/assets/fonts/Matter-MediumItalic.ttf',
			weight: '400',
			style: 'italic',
		},
		{
			path: './../../public/assets/fonts/Matter-Bold.ttf',
			weight: '500',
		},
		{
			path: './../../public/assets/fonts/Matter-BoldItalic.ttf',
			weight: '500',
			style: 'italic',
		},
		{
			path: './../../public/assets/fonts/Matter-Heavy.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './../../public/assets/fonts/Matter-HeavyItalic.ttf',
			weight: '600',
			style: 'italic',
		},
	],
});

export const metadata: Metadata = {
	title: 'Gile',
	description: 'Make Better Decisions',
};

export default function RootLayout({children}: { children: ReactNode }) {
	return (
		<ClerkProvider>
			<ConvexClientProvider>
				<html lang="en">
				<body className={matter.variable}>
				<RouteChangeAnimation/>

				{children}
				
				{
					process.env.NODE_ENV === 'production' && <Analytics/>
				}
				</body>
				</html>
			</ConvexClientProvider>
		</ClerkProvider>
	);
}
