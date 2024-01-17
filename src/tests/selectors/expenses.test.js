import selectExpenses from '../../selectors/expenses';
import moment from 'moment'
import defaultTestExpenses from '../fixtures/expenses'


test ('Testing filtering', () => {
    const filters = {
        text: 'bill',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date',
        order: 'desc'
    };
    const result = selectExpenses(defaultTestExpenses, filters);
    expect(result).toEqual([ defaultTestExpenses[0], defaultTestExpenses[2] ])
})

test ('Testing filtering', () => {
    const filters = {
        text: 'bill',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date',
        order: 'asc'
    };
    const result = selectExpenses(defaultTestExpenses, filters);
    expect(result).toEqual([ defaultTestExpenses[2], defaultTestExpenses[0] ])
})

test ('Testing filtering - filter by text sort by amount in ascending order', () => {
    const filters = {
        text: 'bill',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
        order: 'asc'
    };
    const result = selectExpenses(defaultTestExpenses, filters);
    expect(result).toEqual([ defaultTestExpenses[0], defaultTestExpenses[2] ])
})

test ('Testing filtering - filter by startdate, enddate, sort by date in ascending order', () => {
    const filters = {
        text: '',
        startDate: moment(20230101, 'YYYYMMDD'),
        endDate: moment(20231201, 'YYYYMMDD'),
        sortBy: 'date',
        order: 'asc'
    };
    const result = selectExpenses(defaultTestExpenses, filters);
    expect(result).toEqual([ defaultTestExpenses[2], defaultTestExpenses[3], defaultTestExpenses[0] ])
})

test ('Testing filtering - filter by startdate sort by date in ascending order', () => {
    const filters = {
        text: '',
        startDate: moment(20230101, 'YYYYMMDD'),
        endDate: undefined,
        sortBy: 'date',
        order: 'asc'
    };
    const result = selectExpenses(defaultTestExpenses, filters);
    expect(result).toEqual([ defaultTestExpenses[2], defaultTestExpenses[3], defaultTestExpenses[0], defaultTestExpenses[1]] )
})

test ('Testing filtering - filter by text, startdate, enddate, sort by date in ascending order', () => {
    const filters = {
        text: 'bill',
        startDate: moment(20230101, 'YYYYMMDD'),
        endDate: moment(20231201, 'YYYYMMDD'),
        sortBy: 'date',
        order: 'asc'
    };
    const result = selectExpenses(defaultTestExpenses, filters);
    expect(result).toEqual([ defaultTestExpenses[2], defaultTestExpenses[0] ])
})

test ('Testing filtering - filter by text, startdate, enddate, sort by amount in descending order', () => {
    const filters = {
        text: 'e',
        startDate: moment(20230101, 'YYYYMMDD'),
        endDate: moment(20231201, 'YYYYMMDD'),
        sortBy: 'amount',
        order: 'desc'
    };
    const result = selectExpenses(defaultTestExpenses, filters);
    expect(result).toEqual([ defaultTestExpenses[0], defaultTestExpenses[3] ])
})