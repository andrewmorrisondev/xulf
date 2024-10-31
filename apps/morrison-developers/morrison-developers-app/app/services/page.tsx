// apps/nextjs-app/services/page.tsx
import { metadata as servicesMetadata } from './metadata';

export const metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <div>
      <h1>Services</h1>
      <p>This is the services page.</p>
    </div>
  );
}
