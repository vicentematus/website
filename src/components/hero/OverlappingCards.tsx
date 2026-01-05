import { Music9799Card } from "./Music9799Card";
import { PokedexCard } from "./PokedexCard";
import { GreenEscapeCard } from "./GreenEscapeCard";
import { GameOfLifeCard } from "./GameOfLifeCard";

export const OverlappingCards = () => {
  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl lg:w-80 xl:w-96 dark:bg-zinc-800">
        <GreenEscapeCard />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl lg:w-80 xl:w-96 dark:bg-zinc-800">
        <PokedexCard />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl lg:w-80 xl:w-96 dark:bg-zinc-800">
        <Music9799Card />
      </div>
      <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl lg:w-80 xl:w-96 dark:bg-zinc-800">
        <GameOfLifeCard />
      </div>
    </div>
  );
};
