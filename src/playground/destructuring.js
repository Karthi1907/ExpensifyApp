const book = {
    title: 'Living Life the Lion\'s way',
    author: 'Karthi, the Lion',
    producedBy : {
        name: 'Anandhraj, the Mass Maker'
    }
};

const { title, author } = book;
const { name : producer = 'CS United Productions' } = book.producedBy;

console.log(` Book titled [${title}] written by [${author}] produced by [${producer}]`);

// Array Destructuring

const item = [undefined, '2.00', '2.50', '3.00'];
const [itemName = 'Iced Coffee', , medPrice,] = item;

console.log(` ${itemName} price is ${medPrice} `);
