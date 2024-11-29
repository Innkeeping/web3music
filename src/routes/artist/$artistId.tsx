import { createFileRoute } from '@tanstack/react-router';
import { ArtistProfile } from '@/pages/artist-profile';

export const Route = createFileRoute('/artist/$artistId')({
  component: ArtistProfile,
});