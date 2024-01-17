import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Test case for default filter state - @@INIT Action Type', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual( {
        text: '', sortBy: 'amount', order: 'asc', startDate: moment().startOf('year'), endDate: moment().endOf('year')
    } )
});

test('Test case for SORT_BY_DATE Action Type', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'});
    expect(state).toEqual( {
        text: '', sortBy: 'date', order: 'asc', startDate: moment().startOf('year'), endDate: moment().endOf('year')
    } )
});

test('Test case for SORT_BY_DATE Action Type', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('Test case for SORT_BY_AMOUNT Action Type', () => {
    const currentState = {
        text: '', sortBy: 'date', order: 'asc', startDate: undefined, endDate: undefined
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Test case for SET_TEXT Action Type', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT', text:'Some Text'});
    expect(state.text).toBe('Some Text');
});

test('Test case for SET_START_DATE Action Type', () => {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment().startOf('month')});
    expect(state.startDate).toEqual(moment().startOf('month'));
});

test('Test case for SET_END_DATE Action Type', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment().endOf('month')});
    expect(state.endDate).toEqual(moment().endOf('month'));
});

test('Test case for SET_ASC_ORDER Action Type', () => {
    const state = filtersReducer( undefined, {type: 'SET_ASC_ORDER'} );
    expect(state.order).toEqual("asc");
});

test('Test case for SET_DESC_ORDER Action Type', () => {
    const state = filtersReducer( undefined, {type: 'SET_DESC_ORDER'} );
    expect(state.order).toBe("desc");
});