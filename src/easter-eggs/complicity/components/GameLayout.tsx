import type { ReactNode } from "react";
import { colors } from "../constants/colors";
import { VerbamLogo } from "./VerbamLogo";

interface GameLayoutProps {
  children: ReactNode;
}

export function GameLayout({ children }: GameLayoutProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col overflow-y-auto"
      style={{ backgroundColor: colors.navy }}
    >
      <header className="flex shrink-0 justify-center py-4">
        <a href="https://app.verbam.net" target="_blank" rel="noopener noreferrer">
          <VerbamLogo width={100} height={30} />
        </a>
      </header>

      <main className="flex flex-1 flex-col items-center p-4 pt-0 pb-8">{children}</main>
    </div>
  );
}
