let timer: ReturnType<typeof setTimeout> | undefined;
function debounce<T extends unknown[]>(
  func: (...args: T) => any,
  delay: number
): (...args: T) => void {
  return (...args: T) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.call(null, ...args);
    }, delay);
  };
}

export default debounce;
