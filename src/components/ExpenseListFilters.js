import React from 'react';
import { connect } from 'react-redux';
import {setFilterText, sortByDate, sortByAmount, setAscendingOrder, setDescendingOrder, setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocusedInput : null
    };

    onDatesChange = ( {startDate, endDate} ) => {
        this.props.setStartDate ( startDate ) ;
        this.props.setEndDate( endDate  );
    };

    onFocusChange = (calendarFocusedInput) => {
        this.setState( () => ({ calendarFocusedInput }) ); 
    };
    
    onFilterTextChange = ( e ) => {
        this.props.setFilterText(e.target.value);
    };

    onSortBySelectionChange = ( e ) => {
        console.log(e.target.value);
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
    };

    onSortOrderChange = ( e ) => {
        console.log(e.target.value);
        e.target.value === "asc" ? this.props.setAscendingOrder() : this.props.setDescendingOrder() ;                   
    }


    render() {
        return (
            <div>
            <input type = "text" value={this.props.filters.text} onChange={ this.onFilterTextChange} />
            <select value={this.props.filters.sortBy} onChange={ this.onSortBySelectionChange }>
                <option value="amount"> Amount </option>
                <option value="date"> Date </option>
            </select> 
    
            <select value={this.props.filters.order}
                onChange={ this.onSortOrderChange } >
                    <option value="asc">  Ascending Order </option>
                    <option value="desc"> Descending Order </option>
            </select>
            <DateRangePicker 
                startDate={this.props.filters.startDate}
                startDateId='startDateId'
                endDate={this.props.filters.endDate}
                endDateId='endDateId'
                onDatesChange={ this.onDatesChange }
                focusedInput={ this.state.calendarFocusedInput }
                onFocusChange={ this.onFocusChange }
                numberOfMonths={1}
                isOutsideRange={() => false}
                
                showClearDates={true}
                

            />
        </div>


        )
    }


}

// const ExpenseListFilters = ( props ) => (
//     <div>
//         <input type = "text" value={props.filters.text} onChange={ (e) => {
//             props.dispatch(setFilterText(e.target.value));
//         } } />
//         <select value={props.filters.sortBy} onChange={ (e) => {
//             console.log(e.target.value);
//             e.target.value === 'date' ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount());
//         } }>
//             <option value="amount"> Amount </option>
//             <option value="date"> Date </option>
//         </select> 

//         <select value={props.filters.order}
//             onChange={(e) => {
//                 console.log(e.target.value);
//                 e.target.value === "asc" 
//                     ? props.dispatch( setAscendingOrder() ) 
//                     : props.dispatch ( setDescendingOrder() );                   
//             } } >
//                 <option value="asc">  Ascending Order </option>
//                 <option value="desc"> Descending Order </option>
//         </select>
//         <DateRangePicker 
//             startDate={props.filters.startDate}
//             endDate={}
        
//         />

    

//     </div>
// );

const mapStateToProps = (state) => {

    return {
       // expenses: state.expenses,
        filters: state.filters
    };

};

const mapDispatchToProps = (dispatch) => {
    return {
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        setFilterText: (textVal) => dispatch(setFilterText(textVal)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setAscendingOrder: () => dispatch(setAscendingOrder()),
        setDescendingOrder: () => dispatch(setDescendingOrder())
    }
};

const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

export default ConnectedExpenseListFilters;