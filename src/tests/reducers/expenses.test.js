import expensesReducer from '../../reducers/expenses';
import defaultTestExpenses from '../fixtures/expenses'

test('Test case for default expenses state - @@INIT Action Type', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual( [] );
});

test('Test case for REMOVE_EXPENSE Action Type', () => {
    const state = expensesReducer(defaultTestExpenses, {type: 'DELETE_EXPENSE', id: 2});
    expect(state).toEqual( [ defaultTestExpenses[0], defaultTestExpenses[2], defaultTestExpenses[3] ] );
});

test('Test case for REMOVE_EXPENSE Action Type', () => {
    const state = expensesReducer(defaultTestExpenses, {type: 'DELETE_EXPENSE', id: -2});
    expect(state).toEqual( defaultTestExpenses );
});


test('Test case for EDIT_EXPENSE Action Type', () => {

    const editedExpense = {
        descr: 'Edited Description', amount:1000.00, comments: 'Added Comments', createdAt: 20230701
    }
    const editExpenseAction = { 
        type: 'EDIT_EXPENSE',
        id: 1,
        updates: editedExpense
     } 
    const state = expensesReducer(defaultTestExpenses, editExpenseAction );
    expect(state[0]).toEqual( { ...state[0], ...editedExpense } );
});

test('Test case for ADD_EXPENSE Action Type', () => {

    const newExpense = {
         id:5, descr: 'New Description', amount:1000.00, comments: 'New Comments', createdAt: 20240109
    };
    const newExpense2 = {
        id:6, descr: 'New Description', amount:1000.00, comments: 'New Comments', createdAt: 20240109
   };
    const addExpenseAction = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };

    const state = expensesReducer(defaultTestExpenses, addExpenseAction );
    // expect(state).toEqual( [ ...defaultTestExpenses, newExpense2 ]);
    expect(state).toEqual( [ ...defaultTestExpenses, newExpense ]);
});
