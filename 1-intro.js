// GLOBALS NO WINDOW !!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJs)
// modules    - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname, __filename);
setInterval(() => {
    console.log('hello world');
}, 1000)