 function* cyclicDayGenerator() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let i = 0;
    while (true) {
        yield days[i % days.length];
        i++;
    }
}

module.exports = { cyclicDayGenerator };
