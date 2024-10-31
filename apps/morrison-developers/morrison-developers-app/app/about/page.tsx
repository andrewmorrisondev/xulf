// apps/nextjs-app/about.tsx
import { metadata as aboutMetadata } from './metadata';

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}
