import { useState, useRef } from "react";
import { colors } from "../constants/colors";
import { VerbamLogo } from "./VerbamLogo";

interface SwipeableCardProps {
  word: string;
  nextWord?: string; // Le prochain mot à afficher sous la carte
  isFlipped: boolean;
  onFlip: () => void;
  onSwipe: () => void;
}

export function SwipeableCard({
  word,
  nextWord,
  isFlipped,
  onFlip,
  onSwipe,
}: SwipeableCardProps) {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [skipTransition, setSkipTransition] = useState(false);
  const startX = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const SWIPE_THRESHOLD = 100;

  const handleDragStart = (clientX: number) => {
    if (!isFlipped) return;
    setIsDragging(true);
    startX.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !isFlipped) return;
    const diff = clientX - startX.current;
    setDragX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(dragX) > SWIPE_THRESHOLD) {
      // Swipe detected - animate card exit
      setIsExiting(true);
      const exitDirection = dragX > 0 ? 1 : -1;
      setDragX(exitDirection * 400);

      setTimeout(() => {
        // Désactiver la transition avant de reset dragX
        setSkipTransition(true);
        setDragX(0);
        setIsExiting(false);
        onSwipe();

        // Réactiver la transition au prochain frame
        requestAnimationFrame(() => {
          setSkipTransition(false);
        });
      }, 300);
    } else {
      // Return to center
      setDragX(0);
    }
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isFlipped) {
      onFlip();
      return;
    }
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isFlipped) {
      onFlip();
      return;
    }
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const rotation = dragX * 0.05;
  const opacity = isExiting ? 0 : 1;

  return (
    <div
      className="relative"
      style={{
        perspective: "1200px",
        width: "280px",
        height: "210px", // Plus de hauteur pour voir la pile
      }}
    >
      {/* Pile de cartes en dessous - toujours visible */}
      {/* Carte 3 (la plus en dessous) - décorative */}
      <div
        className="absolute rounded-2xl"
        style={{
          width: "280px",
          height: "180px",
          backgroundColor: colors.lime,
          border: `4px solid white`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          top: "20px",
          left: "6px",
          transform: "rotate(2deg)",
          zIndex: 1,
        }}
      />

      {/* Carte 2 - Prochain mot (visible quand on swipe) */}
      <div
        className="absolute rounded-2xl flex flex-col items-center justify-center"
        style={{
          width: "280px",
          height: "180px",
          backgroundColor: colors.lime,
          border: `4px solid white`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          top: "10px",
          left: "-3px",
          transform: "rotate(-1deg)",
          zIndex: 2,
        }}
      >
        {/* Bordure intérieure */}
        <div
          className="absolute inset-2 rounded-xl"
          style={{
            border: `2px solid ${colors.navy}20`,
          }}
        />
        {/* Prochain mot */}
        {isFlipped && nextWord && (
          <span
            className="text-center text-2xl font-bold"
            style={{ color: colors.navy }}
          >
            {nextWord}
          </span>
        )}
      </div>

      {/* Container pour le swipe (translateX + rotation) */}
      <div
        ref={cardRef}
        className="absolute cursor-pointer select-none"
        style={{
          width: "280px",
          height: "180px",
          transform: isFlipped
            ? `translateX(${dragX}px) rotate(${rotation}deg)`
            : "none",
          transition: isDragging || skipTransition ? "none" : "transform 0.3s ease-out, opacity 0.3s",
          opacity,
          zIndex: 10,
          top: 0,
          left: 0,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Container pour le flip 3D (rotateY) */}
        <div
          style={{
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)",
            transformOrigin: "center center",
          }}
        >
        {/* Face cachée (dos de carte) */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl"
          style={{
            backgroundColor: colors.navy,
            border: `4px solid white`,
            boxShadow: `
              0 8px 24px rgba(0,0,0,0.3),
              0 4px 8px rgba(0,0,0,0.2),
              inset 0 1px 0 rgba(255,255,255,0.1)
            `,
            backfaceVisibility: "hidden",
            animation: !isFlipped ? "pulse-card 2s ease-in-out infinite" : "none",
          }}
        >
          {/* Bordure intérieure pour effet de profondeur */}
          <div
            className="absolute inset-2 rounded-xl"
            style={{
              border: `2px solid ${colors.lime}40`,
            }}
          />
          <VerbamLogo width={200} height={80} />
        </div>

        {/* Face visible (mot) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl"
          style={{
            backgroundColor: colors.lime,
            border: `4px solid white`,
            boxShadow: `
              0 8px 24px rgba(0,0,0,0.3),
              0 4px 8px rgba(0,0,0,0.2)
            `,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Bordure intérieure */}
          <div
            className="absolute inset-2 rounded-xl"
            style={{
              border: `2px solid ${colors.navy}20`,
            }}
          />
          <span
            className="text-center text-2xl font-bold"
            style={{ color: colors.navy }}
          >
            {word}
          </span>

          {/* Indicateur de swipe */}
          <div
            className="absolute bottom-3 flex items-center gap-1 text-xs"
            style={{ color: `${colors.navy}80` }}
          >
            <span>← Glisser pour changer →</span>
          </div>
        </div>
        </div>
      </div>

      {/* CSS pour l'animation pulse */}
      <style>{`
        @keyframes pulse-card {
          0%, 100% {
            transform: scale(1) translateY(0);
            box-shadow:
              0 8px 24px rgba(0,0,0,0.3),
              0 4px 8px rgba(0,0,0,0.2),
              inset 0 1px 0 rgba(255,255,255,0.1);
          }
          50% {
            transform: scale(1.015) translateY(-4px);
            box-shadow:
              0 16px 40px rgba(0,0,0,0.35),
              0 8px 16px rgba(0,0,0,0.25),
              inset 0 1px 0 rgba(255,255,255,0.1);
          }
        }
      `}</style>
    </div>
  );
}
