export function fibonacci(number) {
  if (number < 3) return 1;
  return fibonacci(number - 1) + fibonacci(number - 2)
}
/**
 * fib(3) - fib(2) + fib(1) = 1 + 1 = 2
 * fib(3) - fib(2) + fib(1) = 1 + 1 = 2
 * fib(4) - fib(3) + fib(2) = 2 + 1 = 3
 * fib(5) - 3 + 2 = 5
 */
