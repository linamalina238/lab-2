 const { cyclicDayGenerator, sleep, timeoutIteratorAsync } = require("..");

async function main() {
    console.log("=== Тест 1: перші 10 днів ===");
    const gen = cyclicDayGenerator();
    for (let i = 0; i < 10; i++) {
        console.log((i + 1) + ": " + gen.next().value);5
    }

    console.log("\n=== Тест 2: запуск на 3 секунди з датою ===");
    const gen2 = cyclicDayGenerator();
    let count = 0;
    const start = Date.now();
    const timeout = 3000;

    while (Date.now() - start < timeout) {
        const day = gen2.next().value;
        count++;
        const now = new Date().toLocaleString();
        console.log(`Ітерація ${count}: ${day} | Дата: ${now}`);
        await sleep(500);
    }
    console.log(`\nВсього ітерацій: ${count}`);

    console.log("\n=== Тест 3: timeoutIteratorAsync на 2 секунди ===");
    const gen3 = cyclicDayGenerator();
    await timeoutIteratorAsync(gen3, 2);
}

main();
