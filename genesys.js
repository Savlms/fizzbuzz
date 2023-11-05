function nth_most_rare(arr, n) {
    if (n < 1 || n > arr.length) {
        return null; // Invalid n
    }

    // Count occurrences of each integer
    const countMap = new Map();
    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Sort by the number of occurrences
    const sortedCounts = [...countMap.entries()].sort((a, b) => a[1] - b[1]);

    // Check if n is out of range
    if (n > sortedCounts.length) {
        return null;
    }

    // Get the nth rarest item
    const nthRarest = sortedCounts[n - 1][0];

    return nthRarest;
}

// Example:
const arr = [1, 2, 3, 1, 2, 4, 5, 3, 6];
const n = 2;
const result = nth_most_rare(arr, n);

if (result !== null) {
    console.log(`The ${n}th rarest item is: ${result}`);
} else {
    console.log(`Invalid value of n`);
}
