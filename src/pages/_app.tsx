import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import type { ReactElement } from "react";
import Menu from "src/components/menu";
import Footer from "src/components/footer";
import "@fontsource/silkscreen/700.css";
import "@fontsource/silkscreen/400.css";
function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Menu />
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

export default MyApp;
