import yargs from "yargs";


const parser = yargs(process.argv.slice(2)).options({
    bobo: { type: 'boolean', default: false },
});


(async () => {
    const argv = await parser.argv;
    console.log(argv.bobo);
})();
