mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello from Rust!");
}

extern crate web_sys;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

#[wasm_bindgen]
pub fn greet_console() {
    log!("Hello from Rust!");
}

#[wasm_bindgen]
pub fn fibonacci(n: i32) -> u64 {
    if n == 0 {
        return 0;
    }

    let (mut a, mut b) = (0, 1);
    for _ in 1..n {
        let temp = a + b;
        a = b;
        b = temp;
    }

    b
}
