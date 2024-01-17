

export const setFilterText = ( text = '' ) => (
    {
        type: 'SET_TEXT',
        text
    }
);

export const sortByAmount = () => ( { type: 'SORT_BY_AMOUNT' } );

export const sortByDate = () => ( { type: 'SORT_BY_DATE' } );

export const setStartDate = ( startDate ) => (
    {
        type: 'SET_START_DATE',
        startDate
    }
);

export const setEndDate = ( endDate = moment().endOf('year').format('YYYYMMDD') ) => (
    {   
        type: 'SET_END_DATE',
        endDate
    }
);

export const setAscendingOrder = () => ( { type: 'SET_ASC_ORDER' } );

export const setDescendingOrder = () => ( { type : 'SET_DESC_ORDER' } );