onmessage = function(e) {
  console.log('Message received from main script');

  var workerResult = fibonacciSequence(e.data);

  console.log('Done calculating!');
  console.log('Posting message back to main script');

  postMessage(workerResult);
}

function fibonacciSequence(n){
  let sequence = [];
  for (let i = 0; i <= n; i++){
    sequence.push(fibonacci(i));
  }
  return sequence;
}

function fibonacci(n) {
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2);
}
