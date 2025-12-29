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
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 🔇 start muted to bypass autoplay restriction
    audio.muted = true;
    audio.volume = 0.6;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);

        // show toast only once
        if (!hasPlayedRef.current) {
          toast('Now Playing', {
            description: `${title}${artist ? ` by ${artist}` : ''}`,
          });
          hasPlayedRef.current = true;
        }
      })
      .catch(() => {
        setIsPlaying(false);
      });

    // 🔊 unmute on first user interaction
    const unmute = () => {
      audio.muted = false;
      window.removeEventListener('click', unmute);
      window.removeEventListener('scroll', unmute);
      window.removeEventListener('keydown', unmute);
    };

    window.addEventListener('click', unmute);
    window.addEventListener('scroll', unmute);
    window.addEventListener('keydown', unmute);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);

      if (!hasPlayedRef.current) {
        toast('Now Playing', {
          description: `${title}${artist ? ` by ${artist}` : ''}`,
        });
        hasPlayedRef.current = true;
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border bg-background/90 px-4 py-3 shadow-lg backdrop-blur">
      <audio ref={audioRef} src={src} preload="auto" />

      <div className="leading-tight">
        <p className="text-xs text-muted-foreground">Now Playing</p>
        <p className="max-w-[140px] truncate text-sm font-semibold">{title}</p>
      </div>

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
