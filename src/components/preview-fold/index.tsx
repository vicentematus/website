import { portfolio } from "src/utils/portfolio";
import Image from "next/image";
const PreviewFold: React.FC = () => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/design/lux-portfolio.png"
            alt=""
            width="500"
            height="500"
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/svelte-pokedex.png"
            alt=""
            width="400"
            priority
            height="500"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/design/greenscape-energia-solar.png"
            alt=""
            width="400"
            height="500"
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/fold/pvblo28.png"
            alt=""
            width="400"
            height="500"
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/fold/salvaje.png"
            alt=""
            width="400"
            height="500"
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewFold;
