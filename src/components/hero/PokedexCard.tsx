import Image from "next/image";

const DPad = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    className="h-8 w-8 hover:cursor-pointer sm:h-10 sm:w-10"
  >
    <rect x="16" y="0" width="16" height="48" rx="2" fill="#2d2d2d" />
    <rect x="0" y="16" width="48" height="16" rx="2" fill="#2d2d2d" />
    <circle cx="24" cy="24" r="4" fill="#1a1a1a" />
  </svg>
);

const ActionButtons = () => (
  <svg
    width="40"
    height="24"
    viewBox="0 0 56 32"
    className="h-5 w-8 hover:cursor-pointer sm:h-6 sm:w-10"
  >
    <circle cx="12" cy="20" r="10" fill="#8b2252" />
    <circle cx="12" cy="20" r="8" fill="#a02860" />
    <circle cx="44" cy="12" r="10" fill="#8b2252" />
    <circle cx="44" cy="12" r="8" fill="#a02860" />
  </svg>
);

type PokemonCardProps = {
  name: string;
  sprite: string;
  nameSvg?: string; // optional custom SVG for the name
};

const PokemonCard = ({ name, sprite, nameSvg }: PokemonCardProps) => (
  <div className="flex aspect-square flex-col items-center justify-between rounded border-2 border-[#9bbc0f] bg-white p-1 sm:p-2">
    <div className="flex flex-1 items-center justify-center">
      <Image
        src={sprite}
        width={48}
        height={48}
        alt={name}
        className="h-8 w-8 object-contain sm:h-12 sm:w-12"
      />
    </div>
    {nameSvg ? (
      <Image
        src={nameSvg}
        width={60}
        height={12}
        alt={name}
        className="h-2 w-auto object-contain sm:h-3"
      />
    ) : (
      <span className="font-mono text-[8px] font-bold text-zinc-800 sm:text-[10px]">
        {name}
      </span>
    )}
  </div>
);

export const PokedexCard = () => {
  return (
    <div className="relative flex h-full w-full flex-col rounded-lg bg-zinc-400 p-2 sm:p-3 md:p-5">
      {/* Screen area - classic Game Boy green */}
      <div className="flex flex-1 flex-col items-center justify-center rounded-sm bg-[#9bbc0f] px-2 py-2 sm:px-3">
        {/* Header */}
        <div className="mb-2 flex items-center gap-1 sm:mb-3 sm:gap-2">
          <Image
            src="/img/fold/pokeball-capture.gif"
            width={24}
            height={24}
            alt="Pokeball"
            unoptimized
            className="h-5 w-5 sm:h-6 sm:w-6"
          />
          <span className="font-mono text-xs font-bold text-zinc-800 sm:text-sm">
            Pokedex
          </span>
        </div>

        {/* Pokemon Grid - 2 on mobile, 3 on sm+ */}
        <div className="grid w-full grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2">
          <PokemonCard
            name="Charizard"
            sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
            nameSvg="/img/fold/pokemon/ivysaur-name.svg"
          />
          <PokemonCard
            name="Charizard"
            sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
            nameSvg="/img/fold/pokemon/charizard-name.svg"
          />
          <div className="hidden sm:block">
            <PokemonCard
              name="Charizard"
              sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
              nameSvg="/img/fold/pokemon/pikachu-name.svg"
            />
          </div>
        </div>
      </div>

      {/* Nintendo GAME BOY text */}
      <div className="flex items-center justify-center gap-1 py-1 sm:py-2">
        <Image
          src="/img/fold/nintendo.svg"
          width={50}
          height={20}
          alt="Nintendo"
          className="h-3 w-auto sm:h-4"
        />
        <Image
          src="/img/fold/gameboy-real.png"
          width={70}
          height={20}
          alt="Game Boy"
          className="h-3 w-auto sm:h-4"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 pb-1 sm:gap-10 sm:pb-2">
        <DPad />
        <ActionButtons />
      </div>
    </div>
  );
};
