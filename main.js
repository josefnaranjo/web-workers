// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// Function to generate random numbers (prime)
document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
        command: "generate",
        quota,  
    });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
    document.querySelector(
        "#output",).textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
});

/**
 
In this information, we have a description of how a worker is created and used in JavaScript for generating prime numbers asynchronously. 
Here are the key points:

1. Worker Creation:
   - A worker is created using the `Worker()` constructor.
   - It is initialized with a URL pointing to a worker script.
   - The worker script starts executing as soon as the worker is created.

2. Event Handling:
   - A click event handler is added to the "Generate primes" button.
   - Instead of calling a `generatePrimes()` function, a message is sent to the worker using `worker.postMessage()`. 
     The message includes a JSON object with two properties:
     - `command`: Identifies the task for the worker.
     - `quota`: Specifies the number of primes to generate.

3. Message Event Handling:
   - An event handler is added to the worker to receive messages from the worker.
   - This event handler is used to inform the main thread when the worker has finished and to pass the resulting data.
   - The data from the message's `data` property is extracted and written to an output element.

4. Reload Button:
   - A click event handler for the "Reload" button is implemented, similar to the synchronous version.

In summary, this information explains how to create and use a web worker to perform a task asynchronously in JavaScript. 
The worker is responsible for generating prime numbers, and communication between the main thread and the worker is achieved through the use of message passing.

 */