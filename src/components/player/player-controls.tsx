import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
}

export function PlayerControls({ isPlaying, onPlayPause }: PlayerControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon">
        <SkipBack className="h-5 w-5" />
      </Button>
      <Button onClick={onPlayPause} size="icon">
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      <Button variant="ghost" size="icon">
        <SkipForward className="h-5 w-5" />
      </Button>
    </div>
  );
}