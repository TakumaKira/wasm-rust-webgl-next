import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as wasm from 'wasm'

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    wasm.greet()
  })

  return <Component {...pageProps} />
}
