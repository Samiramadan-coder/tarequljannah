/* eslint-disable @next/next/no-img-element */
// components/youtube-lite.tsx

"use client";

import { Play } from "lucide-react";
import { useState } from "react";

type YouTubeLiteProps = {
  videoId: string;
  title: string;
};

export default function YouTubeLite({ videoId, title }: YouTubeLiteProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className="group absolute inset-0 h-full w-full overflow-hidden bg-black"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />

      <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />

      <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:scale-105">
        <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
      </span>
    </button>
  );
}
