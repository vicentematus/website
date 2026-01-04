import Image from "next/image";

export const PokedexCard = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <Image
        src="/img/svelte-pokedex.png"
        fill
        className="object-cover"
        alt="Pokedex Svelte"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="mb-2 text-2xl font-bold text-white">Pokedex</h3>
        <p className="text-sm text-gray-200">
          Svelte · PokeAPI · First 150 Pokemon
        </p>
      </div>
    </div>
  );
};
