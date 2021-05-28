export function areDuplicates(...args) {
  const lookup = {};

  for (const value of args) {
    if (lookup[value]) return true;
    lookup[value] = (lookup[value] || 0) + 1;
  }
};