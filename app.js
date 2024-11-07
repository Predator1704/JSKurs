const operations = [1000, -700, 300, -500, 10000];
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
    ${Summ(operations, myBalance).toFixed(2)}$
    `);

const income = [];
const expense = [];
let averageIncome;
let averageExpense;

function average() {
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] < 0) {
            continue;
        } 
        income.push(operations[i]);
        averageIncome = Summ(income) / income.length;
    }
        for (let i = 0; i < operations.length; i++) {
        if (operations[i] > 0) {
            continue;
        } 
        expense.push(operations[i]);
        averageExpense = expense.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / expense.length;
    }
        return (`your average income: ${averageIncome.toFixed(2)}$ and your average expence ${averageExpense.toFixed(2)}$ `);
}
console.log(average());



