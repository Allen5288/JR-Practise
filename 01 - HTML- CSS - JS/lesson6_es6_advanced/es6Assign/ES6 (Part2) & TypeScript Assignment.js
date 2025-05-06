// Post-Lesson Exercise: Practicing Callbacks, Promises, and Async/Await

/**
 * Part 1: callbacks
Exercise Task:

Create a function fetchData that simulates fetching data from a server. This function should take two arguments: a url (string) and a callback function. Use setTimeout to simulate a delay of 2 seconds before calling the callback function with the fetched data.
Instructions:

The fetchData function should print "Fetching data from [url]..." when it starts.
After 2 seconds, it should call the callback function with the data: "Data from [url]".
*/
function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);
    setTimeout(() => {
        const data = `Data from ${url}`;
        callback(data);
    }, 2000);
}

/**
 * Part 2: Promises

Exercise Task:

Refactor the fetchData function to return a promise instead of using a callback.
Instructions:

The function should still simulate a 2-second delay before resolving the promise with the data: "Data from [url]".
If the url is empty or not provided, reject the promise with an error message: "Invalid URL".
 */
function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject("Invalid URL");
            return;
        }
        console.log(`Fetching data from ${url}...`);
        setTimeout(() => {
            const data = `Data from ${url}`;
            resolve(data);
        }, 2000);
    });
}

/**
 * Part 3: Async/Await

Exercise Task:

Refactor the code to use async/await to fetch data and handle errors.
Instructions:

Create an async function named loadData that calls fetchData with a given url.
Use try/catch to handle any errors that occur during the data fetching process.
 */
async function loadData(url) {
    try {
        const data = await fetchDataPromise(url);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}