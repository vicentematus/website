import Image from "next/image";

export const GreenEscapeCard = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <Image
        src="/img/design/greenscape-energia-solar.png"
        fill
        className="object-cover"
        alt="GreenEscape Solar"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="mb-2 text-2xl font-bold text-white">GreenEscape</h3>
        <p className="text-sm text-gray-200">
          Solar Energy Landing Page Design
        </p>
      </div>
    </div>
  );
};
