const operations = [1000, -700, 300, -500, 10000, -9000, 2311, 4344, -60000];
const myBalance = 100;

function Summ(Array = [], myBalance = 0) {
    let sum = 0;
    for (let i = 0; i < Array.length; i++) {
        sum += Array[i]
        if (sum < 0) {
            return false;
        }
    }
    return myBalance + sum;
}

console.log(`
    your current Balance:
    ${!Summ(operations, myBalance) ? 'you had big operation then your balance': `${Summ(operations, myBalance)}$`} 
    `);


function average(Array = []) {
const income = [];
const expense = [];
let averageIncome;
let averageExpense;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] < 0) {
            continue;
        } 
        income.push(Array[i]);
        averageIncome = Summ(income) / income.length;
    }
        for (let i = 0; i < Array.length; i++) {
        if (Array[i] > 0) {
            continue;
        } 
        expense.push(Array[i]);
        averageExpense = expense.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / expense.length;
    }
        return (`
        average income: ${averageIncome.toFixed(2)}$
        average expence ${averageExpense.toFixed(2)}$ `
    );
}
console.log(average(operations));



