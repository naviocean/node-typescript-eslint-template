import { green } from 'chalk';

const { log } = console;

const wait = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
    log(green('Hello world!'));
    await wait(1000);
    log('🚀🔥🚀🔥🚀🔥🚀🔥');
})();
