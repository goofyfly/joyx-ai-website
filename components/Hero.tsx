import React, { useRef, useState, useEffect } from 'react';
import { useParallax } from '../hooks/useParallax';

const Hero: React.FC = () => {
  const scrollOffset = useParallax(0.2);
  const imageOffset = useParallax(0.1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Playlist of 3 videos simulating the "attached" demo content
  // 1. Sports/Action (Contextual In-Video Ads)
  // 2. Indoor/Business (Product Placement)
  // 3. Outdoor/City (Billboards/Screens)
  const videoSources = [
    "/03.mp4",
    "/04.mp4",
    "/05.mp4"
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  // Auto-play when video source changes
  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
        setIsPlaying(false);
      });
    }
  }, [currentVideoIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-60 -z-10 blur-3xl"
        style={{ transform: `translateY(${scrollOffset * 0.5}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-50 to-transparent rounded-full opacity-60 -z-10 blur-3xl"
        style={{ transform: `translateY(${-scrollOffset * 0.2}px)` }}
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Unlock the Other <span className="text-joyx-blue">96%</span>:<br />
            The Future of In-Video Advertising.
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-10">
            Seamless 3D insertion driven by CNN & Spatial Computing. <br className="hidden md:block" />
            Non-intrusive, High-impact, and Brand-safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 transition-colors shadow-xl">
              See It in Action
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-slate-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Video Container */}
        <div
          className="relative mx-auto max-w-6xl rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 aspect-video group"
          style={{ transform: `translateY(${imageOffset * 0.5}px)` }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            src={videoSources[currentVideoIndex]}
            poster="https://images.unsplash.com/photo-1535378437327-10f547334fc1?auto=format&fit=crop&w=1920&q=80"
          >
            Your browser does not support the video tag.
          </video>

          {/* Progress Indicators for Playlist */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {videoSources.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentVideoIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>

          {/* Play/Pause Button Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
          >
            <button
              onClick={togglePlay}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-joyx-blue to-joyx-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl shadow-blue-500/40 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} ml-${isPlaying ? '0' : '1'}`}></i>
              </div>
              <span className="font-semibold text-slate-800">{isPlaying ? 'Pause Demo' : 'Watch Demo Reel'}</span>
            </button>
          </div>

          {/* Overlay Graphics (Mock UI elements) */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-mono flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              AI Object Tracking Active
            </div>
            <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-mono">
              Latency: 12ms
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;