import Image from "next/image";
import { portfolio } from "src/utils/portfolio";
import {
  Github,
  Gmail,
  Linkedin,
  ReactJs,
} from "@icons-pack/react-simple-icons";
import { useTranslation } from "next-i18next";

const CTASection = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-900">
      <div>
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg bg-gray-800 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2
                  className="text-3xl font-extrabold text-white sm:text-4xl"
                  id="contact"
                >
                  <span className="block">{t("contact.title")}</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-indigo-200">
                  {t("contact.description")}
                </p>
                <div className="mt-4 space-y-4 font-display">
                  <div>
                    <a href="https://github.com/vicentematus">
                      <div className="flex items-center">
                        <Github size={24} />
                        <p className="ml-2 hover:text-gray-300">
                          @vicentematus
                        </p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href={t("contact.linkedin")}>
                      <div className="flex items-center">
                        <Linkedin size={24} />
                        <p className="ml-2">vicentematus</p>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href={"mailto:" + t("contact.mail")}>
                      <div className="flex items-center">
                        <Gmail size={24} />
                        <p className="ml-2">{t("contact.mail")}</p>
                      </div>
                    </a>
                  </div>
                </div>

                <a
                  href={"mailto:" + t("contact.mail")}
                  className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 shadow hover:bg-gray-200"
                >
                  {t("contact.cta")}
                </a>
              </div>
            </div>
            <div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 -mt-6">
              <Image
                className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                height={753}
                width={1035}
                src={`/img/windows-art.png`}
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
