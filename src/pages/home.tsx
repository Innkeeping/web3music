import { Link } from '@tanstack/react-router';
import {
  Disc3,
  Flame,
  HeartPulse,
  Music,
  PlayCircle,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const trendingTracks = [
  {
    id: 1,
    title: 'Ethereal Dreams',
    artist: 'CryptoBeats',
    plays: 15432,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
  },
  {
    id: 2,
    title: 'Digital Horizon',
    artist: 'Web3 Collective',
    plays: 12543,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
  },
  {
    id: 3,
    title: 'Blockchain Beats',
    artist: 'NFT Sound',
    plays: 9876,
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
  },
  {
    id: 4,
    title: 'Metaverse Melody',
    artist: 'Crypto Composer',
    plays: 8765,
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80',
  },
  {
    id: 5,
    title: 'Decentralized Dreams',
    artist: 'Token Tracks',
    plays: 7654,
    image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&q=80',
  },
];

export function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center bg-gradient-to-b from-primary/10 to-background px-4 py-16">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Discover Web3 Music
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            The future of music distribution and ownership. Connect, collect, and support your favorite
            artists directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/explore">
                <Sparkles className="mr-2 h-4 w-4" />
                Explore Music
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/upload">
                <Music className="mr-2 h-4 w-4" />
                Start Creating
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* Trending Section */}
        <section className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Trending Now</h2>
              <p className="text-muted-foreground">Top tracks this week</p>
            </div>
            <Button variant="ghost">View All</Button>
          </div>
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {trendingTracks.map((track) => (
                <CarouselItem key={track.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>{track.title}</CardTitle>
                      <CardDescription>{track.artist}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div
                        className="aspect-square rounded-md bg-cover bg-center"
                        style={{ backgroundImage: `url(${track.image})` }}
                      />
                      <div className="mt-4 flex items-center justify-between">
                        <Button variant="ghost" size="sm">
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Play
                        </Button>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <TrendingUp className="mr-1 h-4 w-4" />
                          {track.plays.toLocaleString()} plays
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Browse Categories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Flame, label: 'Hot & New', count: '1.2k tracks' },
              { icon: HeartPulse, label: 'Chill Beats', count: '856 tracks' },
              { icon: Disc3, label: 'Electronic', count: '2.1k tracks' },
              { icon: Music, label: 'Ambient', count: '943 tracks' },
            ].map((category, i) => (
              <Card key={i} className="group cursor-pointer transition-colors hover:bg-muted/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <category.icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                  <div>
                    <h3 className="font-semibold">{category.label}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Artists */}
        <section>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Featured Artists</h2>
              <p className="text-muted-foreground">Top creators in the community</p>
            </div>
            <Button variant="ghost">View All</Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-muted" />
                    <div>
                      <h3 className="font-semibold">Artist Name {i}</h3>
                      <p className="text-sm text-muted-foreground">
                        {Math.floor(Math.random() * 100)}k followers
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="aspect-square rounded-md bg-muted" />
                    ))}
                  </div>
                  <Button className="mt-4 w-full">Follow</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}