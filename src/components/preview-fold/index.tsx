import { portfolio } from "src/utils/portfolio";
import Image from "next/image";
const PreviewFold: React.FC = () => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/svelte-pokedex.png"
            alt=""
            width="400"
            height="500"
            decoding="async"
            data-nimg="future"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/svelte-pokedex.png"
            alt=""
            width="400"
            height="500"
            decoding="async"
            data-nimg="future"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/svelte-pokedex.png"
            alt=""
            width="400"
            height="500"
            decoding="async"
            data-nimg="future"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/svelte-pokedex.png"
            alt=""
            width="400"
            height="500"
            decoding="async"
            data-nimg="future"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            src="/img/svelte-pokedex.png"
            alt=""
            width="400"
            height="500"
            decoding="async"
            data-nimg="future"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewFold;
