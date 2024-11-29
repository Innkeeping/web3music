import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface CollectModalProps {
  trackTitle: string;
  trackArtist: string;
  price: string;
  supply: number;
}

export function CollectModal({ trackTitle, trackArtist, price, supply }: CollectModalProps) {
  const handleCollect = async () => {
    // Implement Web3 minting logic here
    console.log('Minting NFT...');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Sparkles className="mr-2 h-4 w-4" />
          Collect
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Collect this Track</DialogTitle>
          <DialogDescription>
            Support {trackArtist} by collecting "{trackTitle}" as an NFT
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="rounded-lg border p-4">
            <div className="mb-2 text-sm font-medium">Edition Details</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Price</div>
                <div className="text-lg font-bold">{price} ETH</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Available</div>
                <div className="text-lg font-bold">{supply} editions</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            By collecting this track, you'll receive:
            <ul className="mt-2 list-inside list-disc">
              <li>High-quality audio download</li>
              <li>Exclusive collector benefits</li>
              <li>Direct support to the artist</li>
            </ul>
          </div>
          <Button onClick={handleCollect} className="w-full">
            <Sparkles className="mr-2 h-4 w-4" />
            Collect Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}