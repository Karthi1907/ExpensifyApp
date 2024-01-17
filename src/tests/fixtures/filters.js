import moment from 'moment';
const filters = [
    { text: '', sortBy: 'date', order: 'asc', startDate: undefined, endDate: undefined},
    { text: 'b', sortBy: 'amount', order: 'desc', startDate: moment().startOf('year'), endDate: moment().endOf('year')},
    { text: 'b', sortBy: 'amount', order: 'desc', startDate: moment().startOf('month'), endDate: moment().endOf('month') },
    { text: 'g', sortBy: 'amount', order: 'asc', startDate: moment('20240601', 'YYYYMMDD'), endDate: moment().endOf('year') }
];

export default filters;