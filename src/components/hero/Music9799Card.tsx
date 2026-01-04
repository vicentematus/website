import Image from "next/image";

export const Music9799Card = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#2393e0] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Animated Waves */}
      <svg
        className="waves absolute bottom-0 z-0 w-full"
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

      {/* Diagonal light lines */}
      <div
        className="absolute top-0 z-10 opacity-40"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
          width: "2500px",
          height: "60px",
          borderRadius: "1400px/10px",
          filter: "blur(1.5px)",
          transform: "rotate(-70deg)",
        }}
      />
      <div
        className="absolute top-1/2 z-10 opacity-25"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
          width: "1400px",
          height: "40px",
          borderRadius: "1400px/10px",
          filter: "blur(1.5px)",
          transform: "rotate(-70deg)",
        }}
      />

      {/* Main content */}
      <main className="relative z-50 flex h-full flex-col items-center justify-center px-4">
        {/* 9799 Logo */}
        <Image
          src="/projects/9799/9799.png"
          width={250}
          height={80}
          alt="9799"
          className="mx-auto"
        />

        {/* Spotify Player Mockup */}
        <div className="mt-6 w-full max-w-[350px] rounded-xl bg-[#282828] p-4 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="h-14 w-14 flex-shrink-0 rounded bg-gradient-to-br from-purple-500 to-blue-500" />
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">9799</div>
              <div className="text-xs text-gray-400">Pvblo28</div>
            </div>
            <div className="text-gray-400">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
          </div>
          <div className="mt-3 flex items-center space-x-3">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-600">
              <div className="h-full w-1/2 rounded-full bg-white" />
            </div>
            <span className="text-xs font-medium text-gray-400">02:44</span>
          </div>
        </div>

        {/* Floating Pvblo28 character */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
          <Image
            src="/projects/9799/pvblo28.png"
            width={200}
            height={300}
            alt="Pvblo28"
            className="pvblo28-float"
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
