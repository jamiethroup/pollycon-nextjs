import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="view-transition" content="same-origin" />
      <body>
        <div className="border-4 md:border-[10px] lg:border-[20px] h-full w-full fixed top-0 left-0 z-30 pointer-events-none border-emerald-600"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
