'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '../../common/button';
import { toast } from 'sonner';

type SongPlayerProps = {
  src: string;
  title: string;
  artist?: string;
};

export default function SongPlayer({ src, title, artist }: SongPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // ▶️ Play automatically on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    toast(`Now Playing`, {
      description: `${title}${artist ? ` by ${artist}` : ''}`,
    });
    audio.volume = 0.6;
    audio.play().catch(() => {
      setIsPlaying(false);
    });
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border bg-background/90 px-4 py-3 shadow-lg backdrop-blur">
      <audio ref={audioRef} src={src} preload="auto" />

      {/* 🎶 Song Info */}
      <div className="leading-tight">
        <p className="text-xs text-muted-foreground">Now Playing</p>
        <p className="text-sm font-semibold truncate max-w-[140px]">{title}</p>
      </div>

      {/* ▶️ Play / Pause */}
      <Button
        size="icon"
        variant="secondary"
        onClick={togglePlay}
        className="h-9 w-9"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </Button>
    </div>
  );
}
