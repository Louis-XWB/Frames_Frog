import { getFrameMetadata } from "frog/next";
import type { Metadata } from "next";
import Image from "next/image";

import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api`
  );
  return {
    other: frameTags,
  };
}

export default function Home() {
  return (
    <main className={styles.main}>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/37e16d62-efa5-4dca-8e6d-dfd7be477c00/rectcontain3"
        />
        <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
        <meta property="fc:frame:button:1" content="Linea Docs" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta
          property="fc:frame:button:1:target"
          content="https://docs.linea.build/"
        />
        <meta property="fc:frame:button:2" content="Linea Docs" />
        <meta property="fc:frame:button:2:action" content="link" />
        <meta
          property="fc:frame:button:2:target"
          content="https://bridge.linea.build/"
        />
        <title>Farcaster Frames</title>
      </head>
    </main>
  );
}
