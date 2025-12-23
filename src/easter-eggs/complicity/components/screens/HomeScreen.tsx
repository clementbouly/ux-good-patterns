import { useState } from "react";
import { colors } from "../../constants/colors";
import { Logo } from "../Logo";
import { useGameStore } from "../../store/useGameStore";

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
            <h3 className="mb-1 font-bold">👥 Joueurs</h3>
            <p>
              Réunissez 4 joueurs minimum pour jouer 2 contre 2.
              <br />
              Vous pouvez être plus nombreux mais nous conseillons de ne pas dépasser 6 joueurs.
            </p>
          </section>

          <section>
            <h3 className="mb-1 font-bold">🔄 Déroulement</h3>
            <ol className="ml-4 list-decimal space-y-1">
              <li>Faites au minimum deux groupes de deux personnes</li>
              <li>Un premier groupe commence</li>
              <li>Une personne de ce groupe tire secrètement un mot au hasard</li>
              <li>Cette personne essaie de faire deviner le mot par tous les moyens possibles à son groupe</li>
              <li>Son groupe doit trouver le mot avant qu'un autre groupe ne le trouve !</li>
            </ol>
          </section>

          <section>
            <h3 className="mb-1 font-bold">💡 Astuces</h3>
            <p className="mb-2">
              Utilisez la complicité de votre groupe pour faire deviner votre mot sans que vos adversaires ne sachent vraiment de quoi vous parlez.
            </p>
            <p className="italic" style={{ color: colors.navy, opacity: 0.8 }}>
              Exemple : "Tu te souviens hier midi je t'ai parlé de quelqu'un et bien c'est le même prénom de la célébrité que je dois te faire deviner."
            </p>
          </section>

          {/* Vidéo YouTube */}
          <section>
            <h3 className="mb-2 font-bold">🎬 Vidéo explicative</h3>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                src="https://www.youtube.com/embed/OsvD1yQDDc4?si=WW0yo4gcWP_ipv96"
                title="Complicité - Règles du jeu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
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

export function HomeScreen() {
  const setScreen = useGameStore((state) => state.setScreen);
  const [showRules, setShowRules] = useState(false);

  return (
    <>
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
            onClick={() => setScreen("setup")}
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
    </>
  );
}
