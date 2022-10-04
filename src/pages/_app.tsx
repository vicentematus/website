import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import type { ReactElement } from "react";
function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <div className="bg-gray-900 text-white">{children}</div>
    </>
  );
}
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default MyApp;
