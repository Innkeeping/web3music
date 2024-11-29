import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="web3-music-theme">
      <Toaster />
    </ThemeProvider>
  );
}

export default App;