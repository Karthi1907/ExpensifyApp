const expenseDefaultState = [];

export default (expenses = expenseDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            console.log(`ADDNIG EXPENSE  ${action.expense.descr}`)
            //return expenses.concat(action.expense) -- this is okay as well but we will use spread operator to get same result as below
            return [...expenses, action.expense]

        case 'DELETE_EXPENSE':
            console.log(`DELETING EXPENSE ${action.id}`) 
            // return expenses.filter( (expense) => {
            //         return expense.id !== action.id;
            //     }
            // );   
            return expenses.filter( ( {id} )  => id !== action.id);

        case 'EDIT_EXPENSE':
            console.log(`Editing Expense id: ${action.id} `)
            return expenses.map( ( expense ) => {
                if ( expense.id === action.id ) 
                {
                    return { ...expense, ...action.updates }
                } 
                else 
                {
                    return expense;
                }  
            });
        
        default:
            return expenses;
    }
};