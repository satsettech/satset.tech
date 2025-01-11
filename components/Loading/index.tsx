"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Loading = ({ onScrollComplete }: { onScrollComplete: () => void }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);
  const { theme } = useTheme();
  const threshold = 100;

  useEffect(() => {
    let accumulatedScroll = 0;

    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        accumulatedScroll += e.deltaY;
        const progress = Math.min((accumulatedScroll / threshold) * 100, 100);
        setScrollProgress(progress);
        
        if (accumulatedScroll >= threshold) {
          onScrollComplete();
        }
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [onScrollComplete]);

  const handleClick = () => {
    setScrollProgress(100);
    onScrollComplete();
  };

  return (
    <div 
      onClick={handleClick}
      style={{ 
        transform: `translateY(-${scrollProgress}%)`,
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out cursor-pointer"
    >
      <style jsx global>{`
        @keyframes glitch {
          0% {
            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
            transform: translate(20px);
          }
          2% {
            clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
            transform: translate(-20px);
          }
          4% {
            clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
            transform: translate(20px);
          }
          6% {
            clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
            transform: translate(-20px);
          }
          8% {
            clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
            transform: translate(20px);
          }
          10% {
            clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
            transform: translate(-20px);
          }
          12% {
            clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
            transform: translate(20px);
          }
          14% {
            clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
            transform: translate(-20px);
          }
          16% {
            clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
            transform: translate(20px);
          }
          18% {
            clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
            transform: translate(-20px);
          }
          20% {
            clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
            transform: translate(20px);
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translate(0);
          }
        }

        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .image-container {
          position: relative;
          overflow: hidden;
        }

        .image-container::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background: ${theme === 'dark'
            ? 'rgba(255, 255, 255, 0.3)'
            : 'rgba(30, 30, 30, 0.3)'
          };
          animation: scanline 2s linear infinite;
          z-index: 2;
        }

        .tech-image {
          opacity: 0;
          transform: scale(0.8);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tech-image.loaded {
          opacity: 1;
          transform: scale(1);
          animation: glitch 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }

        .futuristic-bg {
          background: ${theme === 'dark'
            ? 'linear-gradient(rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.99))'
            : 'linear-gradient(rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0.99))'
          },
          url('/images/tech-bg.jpg');
          background-size: cover;
          background-position: center;
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .futuristic-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            ${theme === 'dark'
              ? 'rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.1), rgba(100, 100, 100, 0.1)'
            }
          );
          pointer-events: none;
        }

        @keyframes arrowGlitch {
          0% {
            opacity: 1;
            transform: translateY(0);
            text-shadow: ${theme === 'dark'
              ? `0 0 7px #fff,
               0 0 10px #fff,
               0 0 21px #fff,
               0 0 42px #93d,
               0 0 82px #93d,
               0 0 92px #93d,
               0 0 102px #93d,
               0 0 151px #93d`
              : `0 0 7px #ddd,
               0 0 10px #ddd,
               0 0 21px #ddd,
               0 0 42px #93d,
               0 0 82px #93d,
               0 0 92px #93d,
               0 0 102px #93d,
               0 0 151px #93d`
            };
          }
          50% {
            opacity: 0.5;
            transform: translateY(10px);
          }
          52% {
            opacity: 0.3;
            transform: translateY(5px) skewX(10deg);
          }
          54% {
            opacity: 0.7;
            transform: translateY(8px) skewX(-10deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            text-shadow: ${theme === 'dark'
              ? `0 0 7px #fff,
               0 0 10px #fff,
               0 0 21px #fff,
               0 0 42px #93d,
               0 0 82px #93d,
               0 0 92px #93d,
               0 0 102px #93d,
               0 0 151px #93d`
              : `0 0 7px #ddd,
               0 0 10px #ddd,
               0 0 21px #ddd,
               0 0 42px #93d,
               0 0 82px #93d,
               0 0 92px #93d,
               0 0 102px #93d,
               0 0 151px #93d`
            };
          }
        }

        .glitch-arrow {
          font-size: 3rem;
          color: ${theme === 'dark' ? '#fff' : '#333'};
          animation: arrowGlitch 2s infinite;
          text-shadow: ${theme === 'dark'
            ? `0 0 7px #fff,
               0 0 10px #fff,
               0 0 21px #fff,
               0 0 42px #93d,
               0 0 82px #93d,
               0 0 92px #93d,
               0 0 102px #93d,
               0 0 151px #93d`
            : `0 0 7px #ddd,
               0 0 10px #ddd,
               0 0 21px #ddd,
               0 0 42px #93d,
               0 0 82px #93d,
               0 0 92px #93d,
               0 0 102px #93d,
               0 0 151px #93d`
          };
        }
      `}</style>

      <div className="futuristic-bg"></div>

      <div className="image-container w-64 h-64 relative">
        <Image 
          src="/images/logo/satset_full_white.png"
          alt="Welcome"
          className={`tech-image ${imageLoaded ? 'loaded' : ''} w-full dark:hidden`}
          width={500}
          height={500}
          onLoad={() => setImageLoaded(true)}
        />
        <Image
          src="/images/logo/satset_full_black.png"
          alt="Welcome"
          className={`tech-image ${imageLoaded ? 'loaded' : ''} hidden w-full dark:block`}
          width={500}
          height={500}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="glitch-arrow mt-24">
        ↓
      </div>
    </div>
  );
};

export default Loading;
