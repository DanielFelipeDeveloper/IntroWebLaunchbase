const user = {
    name: 'Daniel',
    transactions: [],
    balance : 0
}

function createTransaction(transaction) {

    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else if (transaction.type === 'debit') {
        user.balance -= transaction.value
    }
    
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0
 
   for (transaction of user.transactions) {
       if(transaction.type == type && transaction.value > higherValue) {
           higherValue = transaction.value
           higherTransaction = transaction
       }
   }

   return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0
    
    for (transaction of user.transactions) {
        sum += transaction.value
    }

    const average = sum / user.transactions.length

    return average
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            count.credit++
        } else {
            count.debit++
        }
    }

    return count
}

createTransaction({ type: 'credit', value: 80 })
createTransaction({ type: 'credit', value: 90 })
createTransaction({ type: 'debit', value: 50 })
createTransaction({ type: 'debit', value: 70 })

console.log(`largest type transaction:`)
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(`The average value of ${user.name}'s transactions is $ ${getAverageTransactionValue()}`)

console.log(`Number of each type of transaction:`, getTransactionsCount())




