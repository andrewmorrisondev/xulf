import './global.css';
import { StyledComponentsRegistry } from './registry';

export const metadata = {
  title: 'Nicoletta Berry | Soprano, Producer, Curator',
  description: `Nicoletta Berry's personal portfolio`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon@2x.png" />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
