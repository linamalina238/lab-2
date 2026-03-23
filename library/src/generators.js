function* cyclicDayGenerator() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let i = 0;
    while (true) {
        yield days[i % days.length];
        i++;
    }
}

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

async function timeoutIteratorAsync(iterator, timeoutSeconds, delayMs = 500) {
    let start = Date.now();
    let timeoutMs = timeoutSeconds * 1000;
    let count = 0;

    while (Date.now() - start < timeoutMs) {
        let result = iterator.next();
        count++;
        console.log("Ітерація " + count + ": " + result.value);
        await sleep(delayMs);
    }

    console.log("\nУсього ітерацій: " + count);
    return count;
}

module.exports = { cyclicDayGenerator, sleep, timeoutIteratorAsync };