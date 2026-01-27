'use client';

import { useRef, useEffect, useState } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

type AspectRatio = '16:9' | '9:16';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  aspectRatio?: AspectRatio;
}

export function VideoPlayer({ src, poster, className = '', aspectRatio = '16:9' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);
  const [isClient, setIsClient] = useState(false);

  const isVertical = aspectRatio === '9:16';
  const aspectClass = isVertical ? 'aspect-[9/16]' : 'aspect-video';

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !videoRef.current) return;

    playerRef.current = new Plyr(videoRef.current, {
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'fullscreen',
      ],
      hideControls: true,
      resetOnEnd: true,
      ratio: aspectRatio,
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [isClient, aspectRatio]);

  if (!isClient) {
    return (
      <div className={`relative ${aspectClass} ${isVertical ? 'max-w-sm mx-auto' : 'w-full'} overflow-hidden rounded-2xl bg-muted ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 animate-pulse rounded-full bg-muted-foreground/20" />
        </div>
      </div>
    );
  }

  return (
    <div className={`video-player-wrapper ${isVertical ? 'video-player-vertical max-w-sm mx-auto' : 'w-full'} relative overflow-hidden rounded-2xl ${className}`}>
      <video
        ref={videoRef}
        className="plyr-video"
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
      <style jsx global>{`
        .video-player-wrapper {
          --plyr-color-main: #E81ADE;
          --plyr-video-background: hsl(var(--muted));
          --plyr-menu-background: hsl(var(--background));
          --plyr-menu-color: hsl(var(--foreground));
        }

        .video-player-wrapper .plyr {
          border-radius: 1rem;
          overflow: hidden;
        }

        .video-player-wrapper .plyr--video {
          background: hsl(var(--muted));
        }

        .video-player-wrapper .plyr__control--overlaid {
          background: rgba(232, 26, 222, 0.9);
        }

        .video-player-wrapper .plyr__control--overlaid:hover {
          background: #E81ADE;
        }

        .video-player-wrapper .plyr--full-ui input[type='range'] {
          color: #E81ADE;
        }

        .video-player-wrapper .plyr__controls {
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
        }

        .video-player-vertical .plyr__control--overlaid {
          transform: translate(-50%, -50%) scale(0.8);
        }
      `}</style>
    </div>
  );
}
