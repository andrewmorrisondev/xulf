// apps/nextjs-app/about.tsx
import { metadata as blogMetadata } from './metadata';

export const metadata = blogMetadata;

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <p>This is the blog page.</p>
    </div>
  );
}
