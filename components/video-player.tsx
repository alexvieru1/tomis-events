'use client';

import { useRef, useEffect, useState } from 'react';
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
  const playerRef = useRef<unknown>(null);
  const [isClient, setIsClient] = useState(false);

  const isVertical = aspectRatio === '9:16';
  const aspectClass = isVertical ? 'aspect-[9/16]' : 'aspect-video';

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !videoRef.current) return;

    let player: unknown;

    // Dynamically import Plyr only on client side
    import('plyr').then((PlyrModule) => {
      const Plyr = PlyrModule.default;
      player = new Plyr(videoRef.current!, {
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
      playerRef.current = player;
    });

    return () => {
      if (playerRef.current && typeof (playerRef.current as { destroy?: () => void }).destroy === 'function') {
        (playerRef.current as { destroy: () => void }).destroy();
      }
    };
  }, [isClient, aspectRatio]);

  if (!isClient) {
    return (
      <div className={`relative ${aspectClass} ${isVertical ? 'w-full max-w-sm mx-auto' : 'w-full'} overflow-hidden rounded-2xl bg-black/5 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 animate-pulse rounded-full bg-[#E81ADE]/20" />
        </div>
      </div>
    );
  }

  return (
    <div className={`video-player-wrapper ${isVertical ? 'video-player-vertical w-full max-w-sm mx-auto' : 'w-full'} relative ${className}`}>
      <video
        ref={videoRef}
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
          --plyr-video-background: transparent;
          --plyr-menu-background: hsl(var(--background));
          --plyr-menu-color: hsl(var(--foreground));
          border-radius: 1rem;
          overflow: hidden;
        }

        .video-player-wrapper .plyr {
          border-radius: 1rem;
          overflow: hidden;
          background: transparent !important;
        }

        .video-player-wrapper .plyr--video {
          background: transparent !important;
        }

        .video-player-wrapper .plyr__video-wrapper {
          background: transparent !important;
          border-radius: 1rem;
          overflow: hidden;
        }

        .video-player-wrapper .plyr video {
          border-radius: 1rem;
          background: transparent !important;
        }

        .video-player-wrapper .plyr__poster {
          background-color: transparent !important;
          border-radius: 1rem;
        }

        /* Remove any white backgrounds from Plyr elements */
        .video-player-wrapper .plyr *:not(.plyr__control--overlaid):not(.plyr__controls) {
          background-color: transparent !important;
        }

        .video-player-wrapper .plyr__control--overlaid {
          background: rgba(232, 26, 222, 0.9) !important;
        }

        .video-player-wrapper .plyr__control--overlaid:hover {
          background: #E81ADE !important;
        }

        .video-player-wrapper .plyr--full-ui input[type='range'] {
          color: #E81ADE;
        }

        .video-player-wrapper .plyr__controls {
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.75)) !important;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }

        .video-player-vertical .plyr__control--overlaid {
          transform: translate(-50%, -50%) scale(0.8);
        }
      `}</style>
    </div>
  );
}
