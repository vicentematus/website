import { Dribbble, Notepadplusplus } from "@icons-pack/react-simple-icons";
import { portfolio } from "src/utils/portfolio";
import { useRouter } from "next/router";
import { handleLocaleChange } from "src/utils/locale";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const { hero } = portfolio;
const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <div className=" pt-10 sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mt-16 max-w-2xl">
              <div>
                <Image
                  width={70}
                  priority
                  height={70}
                  className="mb-2 rounded-full"
                  src="/img/me-in-35mm.png"
                  alt="me in 35 mm "
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                {t("hero.title")}
              </h1>
              <p className="mt-6 text-base text-zinc-400 ">
                {t("hero.description")}
              </p>
              <div className="mt-6 flex gap-6">
                <a
                  className="group -m-1 p-1"
                  aria-label="Follow on GitHub"
                  href="https://github.com/vicentematus"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                    />
                  </svg>
                </a>
                <a
                  className="group -m-1 p-1"
                  aria-label="Follow on LinkedIn"
                  href="https://linkedin.com/in/vicentematus"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                  >
                    <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                  </svg>
                </a>
                <a
                  className="group -m-1 p-1"
                  aria-label="Follow on Dribble"
                  href="https://dribbble.com/vicentematus"
                >
                  <Dribbble
                    height={24}
                    width={24}
                    className="fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                  />
                </a>
                <a
                  className="group -m-1 p-1"
                  aria-label="Link para mis notas"
                  href="https://notas.vicentematus.cl"
                >
                  <div className="inline-flex items-center gap-2">
                    <Notepadplusplus
                      height={24}
                      width={24}
                      className="fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                    />
                    <span className="text-sm text-zinc-500 transition group-hover:text-zinc-300  ">
                      {t("hero.cta.notes")}
                    </span>
                  </div>
                </a>

                <a
                  className="group -m-1 p-1"
                  aria-label="Flickr para ver mis fotos"
                  href="https://www.flickr.com/vicentematus/"
                >
                  <div className="inline-flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-300 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      />
                    </svg>

                    <span className="text-sm text-zinc-500 transition group-hover:text-zinc-300  ">
                      {t("hero.cta.flickr")}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
