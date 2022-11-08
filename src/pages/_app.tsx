import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import type { ReactElement } from "react";
import Menu from "src/components/menu";
import Footer from "src/components/footer";
import "@fontsource/silkscreen/700.css";
import "@fontsource/silkscreen/400.css";
import { appWithTranslation } from "next-i18next";
import i18config from "next-i18next.config.mjs";
function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      {/*   HAy problemas ya que estoy causa overflow*/}
      {/* <Menu /> */}
      <div className="bg-gray-900 text-white">{children}</div>
      <Footer />
    </>
  );
}
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(MyApp, i18config);
