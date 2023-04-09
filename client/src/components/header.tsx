import MatchDayIndicator from "./matchDayIndicator";

import { ReactComponent as Soccer } from "../assets/icons/soccer ball.svg";

type Props = {
  isMobile?: boolean;
};

export default function Header({ isMobile = true }: Props) {
  return (
    <header className="bg-slate-800 py-2 relative">
      <h1 className="text-2xl text-gray-300 font-bold flex justify-center items-center">
        <span>A2SV</span> <Soccer className="w-8 h-8 inline-block mx-1" />
        <span>Football Cup</span>
      </h1>
      {isMobile && <MatchDayIndicator />}
    </header>
  );
}
