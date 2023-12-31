// @see https://dev.to/iprosk/cc-code-in-react-using-webassembly-7ka

#include <assert.h>
#include <stdio.h>

extern "C" {
  void greet_console() {
    printf("Hello from C++!\n");
  }

  long fibonacci(int n) {
    if (n == 0) {
      return 0;
    }

    long a = 0, b = 1;
    for (int i = 1; i < n; ++i) {
      long temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }
}

// Build WASM with the command below:
// em++ lib.cpp -o lib.js -sMODULARIZE -sSINGLE_FILE=1 -sEXPORTED_FUNCTIONS=_greet_console,_fibonacci,_malloc,_free,getValue -sEXPORTED_RUNTIME_METHODS=ccall
