// @see https://dev.to/iprosk/cc-code-in-react-using-webassembly-7ka

#include <assert.h>
#include <stdio.h>

extern "C" {
  void hello_react() {
    printf("Hello, React!\n");
  }
}

// Build WASM with the command below:
// em++ lib.cpp -o lib.js -sMODULARIZE -sSINGLE_FILE=1 -sEXPORTED_FUNCTIONS=_hello_react,_malloc,_free,getValue -sEXPORTED_RUNTIME_METHODS=ccall
