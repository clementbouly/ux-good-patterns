import { useState } from "react";
import { colors } from "../../constants/colors";
import { Logo } from "../Logo";
import { VerbamLogo } from "../VerbamLogo";

interface HomeScreenProps {
  onPlay: () => void;
}

function RulesModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[80vh] w-full max-w-md overflow-y-auto rounded-3xl p-6"
        style={{ backgroundColor: colors.lime }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold" style={{ color: colors.navy }}>
            📜 Règles du jeu
          </h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-xl font-bold transition-transform hover:scale-110"
            style={{ backgroundColor: colors.navy, color: colors.lime }}
          >
            ×
          </button>
        </div>

        <div className="space-y-4 text-sm" style={{ color: colors.navy }}>
          <section>
            <h3 className="mb-1 font-bold">🎯 Objectif</h3>
            <p>Faire deviner un mot à votre complice (coéquipier) avant les autres équipes !</p>
          </section>

          <section>
            <h3 className="mb-1 font-bold">👥 Équipes</h3>
            <p>Formez 2 équipes ou plus de 2-3 joueurs chacune.</p>
          </section>

          <section>
            <h3 className="mb-1 font-bold">🔄 Déroulement</h3>
            <ol className="ml-4 list-decimal space-y-1">
              <li>Un joueur de chaque équipe voit le même mot secret</li>
              <li>Il donne UN seul indice (un mot) à son équipe</li>
              <li>Son complice doit deviner le mot</li>
              <li>L'équipe qui trouve en premier marque 1 point</li>
            </ol>
          </section>

          <section>
            <h3 className="mb-1 font-bold">⚠️ Interdictions</h3>
            <ul className="ml-4 list-disc space-y-1">
              <li>Pas de mots de la même famille</li>
              <li>Pas de traduction directe</li>
              <li>Pas de gestes ni de mimiques</li>
            </ul>
          </section>

          <section>
            <h3 className="mb-1 font-bold">🏆 Victoire</h3>
            <p>L'équipe avec le plus de points après 12 manches gagne !</p>
          </section>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-full py-3 font-bold transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: colors.pink, color: "white" }}
        >
          J'ai compris !
        </button>
      </div>
    </div>
  );
}

export function HomeScreen({ onPlay }: HomeScreenProps) {
  const [showRules, setShowRules] = useState(false);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden p-4"
      style={{ backgroundColor: colors.navy }}
    >
      {/* Logo VERBAM en haut */}
      <a
        href="https://app.verbam.net"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 left-0 right-0 flex justify-center"
      >
        <VerbamLogo width={120} height={42} />
      </a>

      {/* Card jaune principale */}
      <div
        className="flex w-full max-w-md flex-col items-center gap-8 rounded-3xl px-6 py-10"
        style={{ backgroundColor: colors.lime }}
      >
        {/* Logo + description */}
        <div className="text-center">
          <Logo width={240} height={50} className="mx-auto" />
          <p className="mt-3 text-base" style={{ color: colors.navy }}>
            Devinez le mot de votre complice avant tout le monde
          </p>
        </div>

        {/* Cartes info */}
        <div className="flex gap-4">
          <div
            className="flex w-28 flex-col items-center gap-1 rounded-2xl py-4"
            style={{ backgroundColor: colors.navy }}
          >
            <span className="text-2xl">👥</span>
            <span className="text-sm font-medium" style={{ color: colors.lime }}>
              Joueurs
            </span>
            <span className="font-bold" style={{ color: colors.lime }}>
              4, 5 ou 6
            </span>
          </div>
          <div
            className="flex w-28 flex-col items-center gap-1 rounded-2xl py-4"
            style={{ backgroundColor: colors.navy }}
          >
            <span className="text-2xl">⏰</span>
            <span className="text-sm font-medium" style={{ color: colors.lime }}>
              Tour
            </span>
            <span className="font-bold" style={{ color: colors.lime }}>
              2 min
            </span>
          </div>
        </div>

        {/* Boutons */}
        <div className="flex w-full flex-col items-center gap-3">
          <button
            onClick={onPlay}
            className="w-full animate-wiggle rounded-full px-12 py-4 text-lg font-bold active:scale-95"
            style={{ backgroundColor: colors.pink, color: "white" }}
          >
            Je joue
          </button>

          <button
            onClick={() => setShowRules(true)}
            className="flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "transparent",
              color: colors.navy,
              border: `2px solid ${colors.navy}`,
            }}
          >
            <span>❓</span>
            Voir les règles
          </button>
        </div>
      </div>

      {/* Modal règles */}
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </div>
  );
}
