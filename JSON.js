const user = { id: 11, name: 'Amir', job: 'actor' };
const stringified = JSON.stringify(user);
const a = JSON.parse(stringified);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    ptoducts: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor',
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified);

console.log(shopStringified);
console.log(converted);
