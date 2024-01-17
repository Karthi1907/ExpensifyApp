import { createStore, combineReducers }  from 'redux';
import uuid from 'uuid';

const expenseDefaultState = [];

const addExpense = 
    ( 
        {
            descr ='Miscellaneous Expenses', 
            comments= 'Other daily expenses like fuel, water, etc..,',
            amount = 0,
            createdAt = 0
        } = {} 
    ) =>
({
    type: 'ADD_EXPENSE',
    expense:
    {
        id: uuid(),
        descr,
        comments,
        amount,
        createdAt
    }
});

const removeExpense = ( id ) => (
    {
        type: 'DELETE_EXPENSE',
        id
    }
)

const editExpense = ( (id, updates ) => 
    (
        {
            type: 'EDIT_EXPENSE',
            id,
            updates
        }
    )
);

const expensesReducer = (state = expenseDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            console.log('ADDNIG EXPENSE')
            //return state.concat(action.expense) -- this is okay as well but we will use spread operator to get same result as below
            return [...state, action.expense]

        case 'DELETE_EXPENSE':
            console.log(`DELETING EXPENSE ${action.id}`) 
            // return state.filter( (expense) => {
            //         return expense.id !== action.id;
            //     }
            // );   
            return state.filter( ( {id} )  => id !== action.id);

        case 'EDIT_EXPENSE':
            console.log(`Editing Expense id: ${action.id} `)
            return state.map( ( expense ) => {
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
            return state;
    }
};

const setFilterText = ( text = '' ) => (
    {
        type: 'SET_TEXT',
        text
    }
);

const sortByAmount = () => ( { type: 'SORT_BY_AMOUNT' } );

const sortByDate = () => ( { type: 'SORT_BY_DATE' } );

const setStartDate = ( startDate ) => (
    {
        type: 'SET_START_DATE',
        startDate
    }
);
const setEndDate = ( endDate = undefined ) => (
    {   
        type: 'SET_END_DATE',
        endDate
    }
);
const setAscendingOrder = () => ( { type: 'SET_ASC_ORDER' } );

const setDescendingOrder = () => ( { type : 'SET_DESC_ORDER' } );


const filterDefaultState = {
    text: '',
    sortBy: 'amount',
    order: 'asc',
    startDate: undefined,
    endDate: undefined      
};

const filtersReducer = (state = filterDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            return {...state, text: action.text}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}    
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate}
        case 'SET_ASC_ORDER':
            console.log( 'Setting order as ASCENDING')
            return {...state, order: 'asc'}
        case 'SET_DESC_ORDER':
            console.log('Setting order as DESCENDING')
            return {...state, order: 'desc'}           
        default:
            return state;
    }
};

const getVisibleExpenses = ( ( expenses, {text, sortBy, startDate, order, endDate} ) => 
    {
        return expenses.filter(( expense ) => {

            console.log (` startDate: ${startDate} | endDate: ${endDate} | text: ${text} | sortBy: ${sortBy}
               order: ${order} | expense descr: ${expense.descr} | expense createdAt: ${expense.createdAt} `);
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt < endDate;
            const textMatch =  !text ||  expense.descr.toLowerCase().includes(text.toLowerCase()) ;
            console.log (`${startDateMatch} && ${endDateMatch} && ${textMatch}`)

            return startDateMatch && endDateMatch && textMatch;
        }).sort( (a,b) => {

                switch(sortBy) {
                    case 'date':
                        switch (order) {
                            case 'asc':
                                return (
                                    a.createdAt === b.createdAt ? 0 : a.createdAt  > b.createdAt ? 1 : -1
                                );
                            case 'desc':
                                return (
                                    a.createdAt === b.createdAt ? 0 : a.createdAt < b.createdAt ? 1 : -1        
                                );
                        }
                    case 'amount':
                    default:
                        switch (order) {
                            case 'asc':    
                                return (
                                    a.amount === b.amount ? 0 : a.amount > b.amount ? 1 : -1
                                );
                            case 'desc':
                                return (
                                    a.amount === b.amount ? 0 : a.amount < b.amount ? 1 : -1
                                );
                        }
                } 

            } 
        )
    }   
);

const store = createStore(
    combineReducers( {
        expenses: expensesReducer,
        filters: filtersReducer
    } )
);

const demoState =  {
    expenses: [ 
        {
            id: 'someRandomId',
            descr: 'Some Description',
            comment: 'Dummy Comment',
            amount: 1000,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        order: undefined,
        startDate: undefined,
        endDate: undefined

    }
};

console.log(store.getState());

store.subscribe(() => {
   const newState = store.getState();
   const visibleExpenses =  getVisibleExpenses( newState.expenses, newState.filters );
   console.log(`------------------- EXPENSE LIST -----------------`)
   console.log (visibleExpenses)
   console.log(`--------------------------------------------------`)
});

const rentExp = store.dispatch ( 
    addExpense (
        {   
            descr: 'Rent',
            comments: 'Monthly Rent',
            amount: 10000,
            createdAt: 20240101
        } 
    ) 
);

const credCrdExp = store.dispatch (
    addExpense (
        {
            descr: 'Credit Card',
            comments: 'Credit Card Bill payment',
            amount: 20000,
            createdAt: 20240101
        }
    )
);

const credCrdExp2 = store.dispatch (
    addExpense (
        {
            descr: 'Credit Card 2',
            comments: 'Credit Card Bill payment',
            amount: 20000,
            createdAt: 20250101
        }
    )
);

store.dispatch(
    editExpense ( 
        rentExp.expense.id, 
        { 
            amount: 5000,
            descr: 'Half-Rent' 
        } 
    )
);

const credCrdExp3 = store.dispatch (
    addExpense (
        {
            descr: 'Credit Card 3',
            comments: 'Credit Card Bill payment',
            amount: 15000,
            createdAt: 20240701
        }
    )
);

const credCrdExp4 = store.dispatch (
    addExpense (
        {
            descr: 'Credit Card 4',
            comments: 'Credit Card Bill payment',
            amount: 14000,
            createdAt: 20240801
        }
    )
);

store.dispatch(
    removeExpense ( credCrdExp.expense.id )
);

store.dispatch(
    editExpense ( 
        rentExp.expense.id, 
        { 
            amount: 11000 
        } 
    )
);

store.dispatch( setDescendingOrder());

store.dispatch( setFilterText ( 'credit' ) );

store.dispatch ( sortByAmount() );

store.dispatch ( sortByDate() );

store.dispatch( setAscendingOrder());

store.dispatch( setDescendingOrder());

store.dispatch( setStartDate ( 20230101 ) );

store.dispatch( setStartDate ( ) );

store.dispatch( setStartDate ( 20230101 ) );

store.dispatch( setEndDate ( 20241231 ) );

store.dispatch( setDescendingOrder());

store.dispatch ( sortByAmount() );

// const user = {
//     name: 'Anandh',
//     age: 33
// };

// console.log( {
//     ...user,
//     location: 'Chennai'
// }); 

// console.log( {
//     age:29,
//     ...user,
//     location: 'Chennai'
// }); 

// console.log( {
//     ...user,
//     location: 'Chennai',
//     age:29
// }); 