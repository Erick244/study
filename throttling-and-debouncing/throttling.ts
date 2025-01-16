function throttle(callBack: (...args: any[]) => void, delay: number) {
    let lastCallTime = 0;

    return function (...args: any[]) {
        const now = Date.now();
        const interval = now - lastCallTime;

        if (interval >= delay) {
            callBack(...args);
            lastCallTime = now;
        }
    };
}

// Usage
const scrollHandle = throttle(() => {
    console.log("scrolling");
}, 1000);
