// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`

// Listen for messages from the content script
addEventListener("message", (message) => {
    // Check if the command is 'generate'
    if(message.data.command === 'generate'){
        // Generate prime numbers up to the given quota
        generatePrimes(message.data.quota);
    };
});

function generatePrimes(quota) {
    // Check if a number is prime
    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); c++) {
            if ((n % c) == 0){
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    // Generate prime numbers until quota is met
    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    postMessage(primes.length);
}

/** 
 
 In this code, we define a function `generatePrimes` that generates prime numbers. 
 The function `isPrime` checks if a number is prime. We use a while loop to generate prime numbers until the quota is met. 
 Finally, we post the length of the generated prime numbers array.
 
 */


 /**
  * 
  In this text, we learn about the operation of a web worker in JavaScript:

    1. The worker script starts running as soon as it is created by the main script.

    2. The worker listens for messages from the main script using `addEventListener()`, which is a global function in a worker. 
        Messages are received in the message event handler.

    3. The data property of the event contains a copy of the argument passed from the main script. 
        If the main script instructs the worker to generate primes, it calls the `generatePrimes()` function, passing in the quota value from the message event.

    4. The `generatePrimes()` function is similar to the synchronous version but doesn't return a value. 
        Instead, it sends a message to the main script using `postMessage()`. The main script listens for this message and updates the DOM when it is received.

  In essence, this text explains how a web worker processes messages from the main script, performs tasks, and communicates the results back to the main script using message passing.

  */