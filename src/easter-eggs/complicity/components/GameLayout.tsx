import type { ReactNode } from "react";
import { colors } from "../constants/colors";
import { VerbamLogo } from "./VerbamLogo";

interface GameLayoutProps {
  children: ReactNode;
}

export function GameLayout({ children }: GameLayoutProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{ backgroundColor: colors.navy }}
    >
      <header className="flex justify-center py-4">
        <a href="https://app.verbam.net" target="_blank" rel="noopener noreferrer">
          <VerbamLogo width={250} height={80} />
        </a>
      </header>

      <main className="flex flex-1 flex-col items-center start overflow-hidden p-4">
        {children}
      </main>
    </div>
  );
}
