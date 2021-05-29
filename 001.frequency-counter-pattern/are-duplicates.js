export function areDuplicates(...args) {
  const lookup = {};

  // look of args and assign values to object, using the value as the key
  for (const value of args) {
    // check if value exist on object as key, if so there are duplicates
    if (lookup[value]) return true;
    lookup[value] = (lookup[value] || 0) + 1;
  }
};