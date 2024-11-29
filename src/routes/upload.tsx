import { createFileRoute } from '@tanstack/react-router';
import { Upload } from '@/pages/upload';

export const Route = createFileRoute('/upload')({
  component: Upload,
});