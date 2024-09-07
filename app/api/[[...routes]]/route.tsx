/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'


const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  title: 'Frog Frame',
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame("/", async (c) => {
  return c.res({
    action: "/finish",
    image:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/37e16d62-efa5-4dca-8e6d-dfd7be477c00/rectcontain3",
    imageAspectRatio: "1:1",
    intents: [
      <Button.Link href="https://docs.linea.build/">Linea Docs</Button.Link>,
      <Button.Link href="https://bridge.linea.build/">Bridge your funds？🚀</Button.Link>
    ],
    title: "Buy ETH",
  });
// }
});

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)

// NOTE: That if you are using the devtools and enable Edge Runtime, you will need to copy the devtools
// static assets to the public folder. You can do this by adding a script to your package.json:
// ```json
// {
//   scripts: {
//     "copy-static": "cp -r ./node_modules/frog/_lib/ui/.frog ./public/.frog"
//   }
// }
// ```
// Next, you'll want to set up the devtools to use the correct assets path:
// ```ts
// devtools(app, { assetsPath: '/.frog' })
// ```
