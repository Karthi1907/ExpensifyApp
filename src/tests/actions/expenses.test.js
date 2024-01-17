import { addExpense, removeExpense, editExpense } from '../../actions/expenses';


test('should setup removeExpense action object', () => {

    const action = removeExpense( 12345 );
    expect(action).toEqual({
        type:'DELETE_EXPENSE',
        id:12345
    });

});

test('should setup editExpense action object', () => {

    const action = editExpense(12345, { descr: 'Edited Description' } );
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:12345,
        updates: { descr: 'Edited Description' }
    });

});

test('should setup addExpense action object with provided values', () => {
    const newExpense = { descr: 'New Description', amount:'100.00', comments:'Comment' }
    const action = addExpense(newExpense);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: { ...newExpense, id: expect.any(String), createdAt: 0 }
    });

});

test('should setup addExpense action object with default values', () => {
    const newExpense = {  }
    const action = addExpense(newExpense);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: 
            { ...newExpense, 
                amount: 0, 
                comments: undefined, 
                createdAt: 0, 
                id: expect.any(String), 
                createdAt: 0,
                descr: undefined
            }
    });
});

