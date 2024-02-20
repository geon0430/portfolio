import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "이창건 | MLOps Dev",
  description: "안녕하세요, MLOps 개발자 이창건입니다.",
  canonical: "https://www.naver.com/",
  openGraph: {
    type: "AI, Backend",
    locale: "ko_KR",
    url: "https://www.naver.com/",
    title: "이창건 | MLOps Dev",
    site_name: "이창건 | MLOps Dev",
    // images: [
    //   {
    //     url: "/share.png",
    //     width: 285,
    //     height: 167,
    //     alt: "홍길동 | Front-End Dev",
    //   },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "이창건 | MLOps Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "이창건 | MLOps Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
