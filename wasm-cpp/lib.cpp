// @see https://dev.to/iprosk/cc-code-in-react-using-webassembly-7ka

#include <assert.h>
#include <stdio.h>

extern "C" {
  void greet_console() {
    printf("Hello from C++!\n");
  }
}

// Build WASM with the command below:
// em++ lib.cpp -o lib.js -sMODULARIZE -sSINGLE_FILE=1 -sEXPORTED_FUNCTIONS=_greet_console,_malloc,_free,getValue -sEXPORTED_RUNTIME_METHODS=ccall
