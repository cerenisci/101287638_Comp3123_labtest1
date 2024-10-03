// Existing methods in callbacks.js
function delayedSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success after delay");
        }, 1000);
    });
}

function delayedException() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Error after delay"));
        }, 1000);
    });
}

// New method: resolvedPromise
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved message after 500ms");
        }, 500);
    });
}

// New method: rejectedPromise
function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Rejected error message after 500ms"));
        }, 500);
    });
}

// Call both promises
resolvedPromise()
    .then((message) => {
        console.log("Resolved:", message);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

rejectedPromise()
    .then((message) => {
        console.log("Resolved:", message);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
