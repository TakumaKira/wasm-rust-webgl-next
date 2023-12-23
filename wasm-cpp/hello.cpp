// @see https://dev.to/iprosk/cc-code-in-react-using-webassembly-7ka

#include <assert.h>
#include <stdio.h>

extern "C" {
  void hello_react() {
      printf("Hello, React!\n");
  }
}

extern "C" {
  void process_data(double* input, double* output, int size) {
      int i;

      assert(size > 0 && "size must be positive");
      assert(input && output && "must be valid pointers");

      for (i = 0; i < size; i++) {
          output[i] = input[i] * input[i];
      }
  }
}

// Build WASM with the command below:
// em++ hello.cpp -o hello.js -sMODULARIZE -sSINGLE_FILE=1 -sEXPORTED_FUNCTIONS=_hello_react,_process_data,_malloc,_free,getValue -sEXPORTED_RUNTIME_METHODS=ccall
