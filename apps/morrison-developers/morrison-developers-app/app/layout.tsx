import './global.css';
import { StyledComponentsRegistry } from './registry';

export const metadata = {
  title: 'Under Construction',
  description: 'Morrison Developers Coming Soon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
