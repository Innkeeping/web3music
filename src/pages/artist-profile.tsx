// import { Link } from '@tanstack/react-router';
// import { useParams } from '@tanstack/react-router';
import {
  BarChart3,
  Heart,
  MessageCircle,
  Share2,
  Users,
  Music,
  PlayCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Mock data - replace with real data fetching
const artistData = {
  id: '1',
  name: 'CryptoBeats',
  bio: 'Web3 music producer and sound designer creating immersive audio experiences.',
  avatar: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=200&q=80',
  coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80',
  followers: 12543,
  tracks: [
    {
      id: 1,
      title: 'Ethereal Dreams',
      plays: 15432,
      likes: 2341,
      duration: '3:45',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    },
    {
      id: 2,
      title: 'Digital Horizon',
      plays: 12543,
      likes: 1876,
      duration: '4:20',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    },
    // Add more tracks as needed
  ],
};

export function ArtistProfile() {
  // const { artistId } = useParams({ from: '/artist/$artistId' });

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Image */}
      <div
        className="h-64 w-full bg-cover bg-center md:h-80"
        style={{ backgroundImage: `url(${artistData.coverImage})` }}
      />

      {/* Artist Info */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-20 mb-6 flex flex-col items-center md:flex-row md:items-end md:space-x-6">
          <Avatar className="h-40 w-40 rounded-full border-4 border-background">
            <AvatarImage src={artistData.avatar} alt={artistData.name} />
            <AvatarFallback>{artistData.name[0]}</AvatarFallback>
          </Avatar>
          <div className="mt-4 text-center md:mt-0 md:text-left">
            <h1 className="text-3xl font-bold">{artistData.name}</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">{artistData.bio}</p>
            <div className="mt-4 flex items-center justify-center gap-4 md:justify-start">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span className="text-sm">{artistData.followers.toLocaleString()} followers</span>
              </div>
              <div className="flex items-center gap-1">
                <Music className="h-4 w-4" />
                <span className="text-sm">{artistData.tracks.length} tracks</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-1 justify-end gap-2 md:mt-0">
            <Button>
              <Heart className="mr-2 h-4 w-4" />
              Follow
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Tabs */}
        <Tabs defaultValue="tracks" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tracks">Tracks</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
          </TabsList>

          <TabsContent value="tracks" className="space-y-4">
            {artistData.tracks.map((track) => (
              <Card key={track.id}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div
                    className="h-16 w-16 flex-shrink-0 rounded-md bg-cover bg-center"
                    style={{ backgroundImage: `url(${track.image})` }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{track.title}</h3>
                    <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{track.duration}</span>
                      <span>•</span>
                      <span>{track.plays.toLocaleString()} plays</span>
                      <span>•</span>
                      <span>{track.likes.toLocaleString()} likes</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <PlayCircle className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">About {artistData.name}</h2>
                <p className="text-muted-foreground">{artistData.bio}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-semibold">Links</h3>
                    <div className="space-y-2">
                      <Button variant="link" className="h-auto p-0">
                        Twitter
                      </Button>
                      <Button variant="link" className="h-auto p-0">
                        Instagram
                      </Button>
                      <Button variant="link" className="h-auto p-0">
                        Website
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Member Since</h3>
                    <p className="text-muted-foreground">January 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Statistics</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      <span className="font-semibold">Total Plays</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold">27,975</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      <span className="font-semibold">Total Likes</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold">4,217</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      <span className="font-semibold">Followers</span>
                    </div>
                    <p className="mt-2 text-2xl font-bold">12,543</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}