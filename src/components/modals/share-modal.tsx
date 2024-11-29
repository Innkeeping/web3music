import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Share2, Twitter, Facebook, Link2 } from 'lucide-react';

interface ShareModalProps {
  trackTitle: string;
  trackArtist: string;
  embedCode: string;
}

export function ShareModal({ trackTitle, trackArtist, embedCode }: ShareModalProps) {
  const shareUrl = window.location.href;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const shareToTwitter = () => {
    const text = `Check out "${trackTitle}" by ${trackArtist} on Web3Music`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${shareUrl}`);
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Track</DialogTitle>
          <DialogDescription>Share this track or embed it on your website</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Share on social media</div>
            <div className="flex gap-2">
              <Button onClick={shareToTwitter} variant="outline" className="flex-1">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
              <Button onClick={shareToFacebook} variant="outline" className="flex-1">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Share link</div>
            <div className="flex gap-2">
              <Input value={shareUrl} readOnly />
              <Button
                onClick={() => copyToClipboard(shareUrl)}
                variant="secondary"
                size="icon"
              >
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium">Embed code</div>
            <div className="flex gap-2">
              <Input value={embedCode} readOnly />
              <Button
                onClick={() => copyToClipboard(embedCode)}
                variant="secondary"
                size="icon"
              >
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}