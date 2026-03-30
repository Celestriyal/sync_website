import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sync.',
  description: 'The Majestic Campus OS.',
};

export default function SyncLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
