

function findMaxValue(arr) {
    if (arr.length === 0) return null; // Return null for empty array
    let maxValue = arr[0]; // Initialize maxValue with the first element
    for (let i = 1; i < arr.length; i++) { // Start loop from the second element
        if (arr[i] > maxValue) { // Compare current element with maxValue
            maxValue = arr[i]; // Update maxValue if current element is greater
        }
    }
    return maxValue; // Return the maximum value found
}

function findMaxValueMethod2(arr) {
    if (arr.length === 0) return null; // Return null for empty array
    return arr.reduce((max, current) => Math.max(max, current), arr[0]); // Use reduce to find max value
}

function findMaxValueMethod3(arr) {
    if (arr.length === 0) return null; // Return null for empty array
    return Math.max(...arr); // Use spread operator to find max value
}