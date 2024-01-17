import uuid from 'uuid';

export const addExpense = 
    ( 
        {
            descr, 
            comments,
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

export const removeExpense = ( id ) => (
    {
        type: 'DELETE_EXPENSE',
        id
    }
)

export const editExpense = ( (id, updates ) => 
    (
        {
            type: 'EDIT_EXPENSE',
            id,
            updates
        }
    )
);
