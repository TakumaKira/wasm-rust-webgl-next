import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import * as wasm from 'wasm'
import factory from '../../wasm-cpp/lib'

wasm.greet_console()

factory().then((instance: any) => {
  instance._greet_console()
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
