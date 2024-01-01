import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import * as wasm from 'wasm'
import factory from '../../wasm-cpp/lib'

console.time('Rust')
console.log(wasm.fibonacci(45))
console.timeEnd('Rust')

factory().then((instance: any) => {
  console.time('C++')
  console.log(instance._fibonacci(45))
  console.timeEnd('C++')
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
