import chalk = require("chalk");

const { log } = console;

const wait = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
    log(chalk.green("Hello world!"));
    await wait(1000);
    log("🚀");
})();
