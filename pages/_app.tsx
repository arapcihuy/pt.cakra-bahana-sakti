import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTopButton />
    </>
  );
}

export default appWithTranslation(MyApp); 