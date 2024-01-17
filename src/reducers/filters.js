import moment from 'moment'

const filterDefaultState = {
    text: '',
    sortBy: 'amount',
    order: 'asc',
    startDate: moment().startOf('year'),
    endDate: moment().endOf('year')  
};

export default (filters = filterDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            console.log(`Setting text to ${action.text}`);
            return {...filters, text: action.text}
        case 'SORT_BY_AMOUNT':
            console.log('Setting sortBy to amount');
            return {...filters, sortBy: 'amount'}    
        case 'SORT_BY_DATE':
            console.log('Setting sortBy to date');
            return {...filters, sortBy: 'date'}
        case 'SET_START_DATE':
            if (action.startDate )
            {
                console.log(`Setting startDate to ${action.startDate.format('YYYYMMDD')}`);
            }
            else {
                console.log(`Setting startDate to NULL`);
            }
            return {...filters, startDate: action.startDate}
        case 'SET_END_DATE':
            if (action.endDate )
            {
                console.log(`Setting endDate to ${action.endDate.format('YYYYMMDD')}`);
            }
            else {
                console.log(`Setting endDate to NULL`);
            }
            return {...filters, endDate: action.endDate}
        case 'SET_ASC_ORDER':
            console.log( 'Setting order as ASCENDING')
            return {...filters, order: 'asc'}
        case 'SET_DESC_ORDER':
            console.log('Setting order as DESCENDING')
            return {...filters, order: 'desc'}           
        default:
            return filters;
    }
};