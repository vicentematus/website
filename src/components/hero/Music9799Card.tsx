import Image from "next/image";

const PlayButton = () => {
  return (
    <svg
      className="h-8 w-8 hover:cursor-pointer"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
      />
    </svg>
  );
};
export const Music9799Card = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#2393e0] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <svg
        className="waves absolute top-0 z-0 w-full rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave-9799"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave-9799" x="48" y="0" fill="#0579C9" />
          <use xlinkHref="#gentle-wave-9799" x="48" y="3" fill="#1F78B6" />
          <use xlinkHref="#gentle-wave-9799" x="48" y="5" fill="#1F78B6" />
          <use xlinkHref="#gentle-wave-9799" x="48" y="7" fill="#2393E0" />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 z-10 overflow-visible">
        <div className="light-line absolute left-[-50%] top-[-10%] h-8 w-[200%] rotate-[-70deg] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px]" />
        <div className="light-line absolute left-[-30%] top-[5%] h-6 w-[180%] rotate-[-70deg] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[2px]" />
        <div className="light-line absolute left-[-20%] top-[15%] h-5 w-[160%] rotate-[-70deg] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[2px]" />
      </div>

      <main className="relative z-50 flex h-full flex-col items-center justify-center px-2 sm:px-4">
        <Image
          src="/projects/9799/9799.png"
          width={100}
          height={70}
          alt="9799"
          className="mx-auto w-[100px] sm:w-[150px] lg:w-auto "
        />

        <div className="mt-2 w-full max-w-[180px] rounded-lg bg-[#282828] p-2 shadow-xl sm:mt-4 sm:max-w-[250px] sm:rounded-xl sm:p-3 lg:max-w-[300px] xl:max-w-[350px] xl:p-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src={"/img/fold/9799-cover.jpeg"}
              width={60}
              height={60}
              alt="9799 cover"
            ></Image>
            <div className="flex-1">
              <div className="text-[10px] font-semibold text-white sm:text-xs lg:text-sm">
                9799
              </div>
              <div className="text-[8px] text-gray-400 sm:text-[10px] lg:text-xs">
                Pvblo28
              </div>
            </div>
            <div>
              <PlayButton />
            </div>
          </div>
          <div className="mt-1 flex items-center space-x-2 sm:mt-2 sm:space-x-3 lg:mt-3">
            <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-gray-600 sm:h-1">
              <div className="h-full w-1/2 rounded-full bg-white" />
            </div>
            <span className="text-[8px] font-medium text-gray-400 sm:text-[10px] lg:text-xs">
              02:44
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
          <Image
            src="/projects/9799/pvblo28.png"
            width={200}
            height={300}
            alt="Pvblo28"
            className="pvblo28-float w-[80px] sm:w-[120px] lg:w-[160px] xl:w-[200px]"
          />
        </div>
      </main>

      <style jsx>{`
        .waves {
          position: absolute;
          width: 100%;
          height: 20vh;
          min-height: 100px;
          max-height: 150px;
        }

        .parallax > use {
          animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
            infinite;
        }
        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }

        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }

        .pvblo28-float {
          animation: upNdown 3s infinite linear;
        }

        @keyframes upNdown {
          0% {
            transform: translateY(0);
          }
          60% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .waves {
            height: 40px;
            min-height: 40px;
          }
        }
      `}</style>
    </div>
  );
};
