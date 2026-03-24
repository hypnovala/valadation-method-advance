import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Valadation Method™ — Advanced Integration',
  description:
    'Premium 60+ day advanced integration landing page for the Valadation Method™.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
