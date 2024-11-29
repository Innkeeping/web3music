import { Link } from '@tanstack/react-router';
import { Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { AudioPlayer } from '@/components/player/audio-player';
import { ShareModal } from '@/components/modals/share-modal';
import { CollectModal } from '@/components/modals/collect-modal';

export function Layout({ children }: { children: React.ReactNode }) {
  // This would come from your global state management
  const currentTrack = {
    title: 'Ethereal Dreams',
    artist: 'CryptoBeats',
    src: 'https://example.com/audio.mp3',
    embedCode: '<iframe src="https://example.com/embed" />',
    price: '0.1',
    supply: 100,
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link to="/" className="flex items-center space-x-2">
            <Music2 className="h-6 w-6" />
            <span className="text-xl font-bold">Web3Music</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/explore">Explore</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/upload">Upload</Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <div className="h-24">
        {/* Spacer for the fixed audio player */}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background">
        <div className="container mx-auto flex items-center justify-between px-4">
          <AudioPlayer
            src={currentTrack.src}
            title={currentTrack.title}
            artist={currentTrack.artist}
          />
          <div className="flex items-center gap-2">
            <ShareModal
              trackTitle={currentTrack.title}
              trackArtist={currentTrack.artist}
              embedCode={currentTrack.embedCode}
            />
            <CollectModal
              trackTitle={currentTrack.title}
              trackArtist={currentTrack.artist}
              price={currentTrack.price}
              supply={currentTrack.supply}
            />
          </div>
        </div>
      </div>
    </div>
  );
}