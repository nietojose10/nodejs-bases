// console.log(process.env);

const { USERNAME, PUBLIC, SystemRoot } = process.env;

// console.table({ USERNAME, PUBLIC, SystemRoot });

const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [, , , b] = characters;
// console.log(b)