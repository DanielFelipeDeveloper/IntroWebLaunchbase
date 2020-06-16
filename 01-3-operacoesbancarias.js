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
    
    console.log(user)
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'debit', value: 50 })

