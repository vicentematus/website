import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import CTASection from "src/components/cta";
import Design from "src/components/design";
import DesignAlt from "src/components/design/design-alt";
import Education from "src/components/education";
import Hero from "src/components/hero";
import Portfolio from "src/components/portfolio";
import PortfolioAlt from "src/components/portfolio-alt";
import PreviewFold from "src/components/preview-fold";
import Work from "src/components/work";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18config from "next-i18next.config.mjs";
import HeaderSection from "src/components/menu";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vicente Matus</title>
        <meta
          name="description"
          content="In pursuit of the arcane secrets of the coding universe. "
        />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <HeaderSection />
      <Hero />
      <PreviewFold />
      {/* <Portfolio /> */}
      <PortfolioAlt />
      {/* <Work /> */}
      <Design />
      <CTASection />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], i18config, [
      "en",
      "sv",
    ])),
  },
});
export default Home;
