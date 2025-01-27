import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@folie/cobalt-animation/cobalt-animation.css";
import "@folie/cobalt/cobalt.css";

import type { AppProps } from "next/app";

import { CobaltConfig } from "@/configs";
import { MantineTheme } from "@/configs/theme";
import { CobaltContext } from "@folie/cobalt";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Template"
        description="Don't build from scratch"
      />
      <CobaltContext
        config={CobaltConfig}
        mantine={MantineTheme}
        router={router}
      >
        <Component {...pageProps} />
      </CobaltContext>
    </>
  );
}