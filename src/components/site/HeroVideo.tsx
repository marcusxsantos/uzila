import { useEffect, useRef, useState } from "react";
import heroPoster from "@/assets/hero-video-poster.jpg";
import heroLoop from "@/assets/hero-loop.mp4.asset.json";

/**
 * Vídeo de fundo do hero: autoplay silencioso, com poster de fallback.
 * O <video> só é montado após a hidratação (e fora de prefers-reduced-motion),
 * mantendo o LCP no poster e evitando custo de rede desnecessário.
 */
export function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    if (connection?.saveData || /2g/.test(connection?.effectiveType ?? "")) return;

    const id = window.setTimeout(() => setShowVideo(true), 400);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={heroPoster}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {showVideo ? (
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={heroPoster}
          onCanPlay={() => setReady(true)}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
          style={{ opacity: ready ? 1 : 0 }}
        >
          <source src={heroLoop.url} type="video/mp4" />
        </video>
      ) : null}

      {/* Overlays de leitura, derivados das cores da marca */}
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-hero-fade" />
    </div>
  );
}
