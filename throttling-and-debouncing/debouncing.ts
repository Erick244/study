function debouncing(callBack: (...args: any[]) => void, delay: number) {
    let timeoutRef: NodeJS.Timeout;

    return function (...args: any[]) {
        clearTimeout(timeoutRef);
        timeoutRef = setTimeout(() => {
            callBack(...args);
        }, delay);
    };
}

// Usage
const onInputChange = debouncing(() => {
    console.log("Searching...");
}, 300);
