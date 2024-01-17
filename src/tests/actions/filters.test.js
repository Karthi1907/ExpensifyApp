import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setFilterText, setAscendingOrder, setDescendingOrder } from '../../actions/filters';

test('should setup startDate filter action object with given value', () => {

    const action = setStartDate( moment(0) );
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    });

});

test('should setup endDate filter action object with given value', () => {

    const action = setEndDate( moment(0) );
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    });

});

test('should setup ascending order sort action', () => {

    const action = setAscendingOrder(  );
    expect(action).toEqual({
        type:'SET_ASC_ORDER'
    });

});

test('should setup descending order sort action', () => {

    const action = setDescendingOrder(  );
    expect(action).toEqual({
        type:'SET_DESC_ORDER'
    });

});

test('should setup filter text with given text', () => {

    const action = setFilterText( 'Some Text' );
    expect(action).toEqual({
        type:'SET_TEXT', text: 'Some Text'
    });

});

test('should setup filter text with given text', () => {

    const action = setFilterText( );
    expect(action).toEqual({
        type:'SET_TEXT', text: ""
    });

});

test('should setup date sort order', () => {

    const action = sortByDate(  );
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });

});

test('should setup amount sort order', () => {

    const action = sortByAmount(  );
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });

});
