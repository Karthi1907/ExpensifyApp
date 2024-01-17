import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


const now = moment();
console.log(now.format('YYYY MMMM Do'));   
console.log(now.startOf('month').format('YYYYMMDD'));


export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            descr: props.expense ? props.expense.descr : '',
            comments: props.expense ? props.expense.comments : '',
            amount: props.expense ? props.expense.amount : '0.00',
            createdAt: props.expense ? moment(props.expense.createdAt, 'YYYYMMDD')   : moment(),
            calendarFocused: false,
            error: undefined
        }
    }



    onDescriptionChange = (e) => {

        const description = e.target.value;
        this.setState( () => ({ descr: description }) );
        console.log(this.state);
    };

    onCommentsChange = ( e ) => {
        //const comments = e.target.value;
        e.persist();
        this.setState( () => ( { comments: e.target.value }) );
        console.log(this.state);
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount ||  amount.match(/^\d{1,7}(\.\d{0,2})?$/) ) {
            this.setState( () => ({  amount }) );
        }
    }

    onDateChange = ( createdAt ) => {
        
        if (createdAt) {
            const createdAtDate = createdAt.format('YYYYMMDD');
            console.log(createdAtDate);
            this.setState( () => ( { createdAt } ) );
            console.log(createdAt.format('YYYYMMDD'));
            console.log(this.state);    
            console.log(this.state.createdAt);
        }
    }

    onFocusChange = ( {focused} ) => {
        this.setState( () => ( { calendarFocused: focused } ) );
        console.log(this.state);
    }

    onSubmit = (e) => {

        e.preventDefault();
        console.log('Inside onSubmit() function');
        let error = '';

        if ( !this.state.descr || !this.state.amount ) {
            error = 'Mandatory inputs missing - add both description and amount to continue';
        }

        if (error) {
            this.setState( () => ({ error: error }) );
        } else {
            this.setState( () => ({ error: '' }) );
        
            console.log(error);
            console.log(this.state); 
            this.props.onSubmit( {
                descr: this.state.descr,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.format('YYYYMMDD'),
                comments: this.state.comments
            } ) ;  
        }
    };


    render()
    {
        return (
            <form onSubmit={this.onSubmit}> 
            { this.state.error && <p style={{color: 'red',fontWeight:'bold'}}>  {this.state.error} </p> }   
            <div>
                <div>
                    <p> Description: </p>
                    <input 
                        type="text"
                        placeholder="Your Expense Descr"
                        autoFocus
                        value={this.state.descr}
                        onChange={this.onDescriptionChange}
                    />
                </div>
                <div>
                    <p> Amount:</p>
                    <input 
                        type="text"
                        value={this.state.amount}
                        placeholder="Your Expense Amount"
                        onChange={this.onAmountChange}
                    />
                </div>
                <div>
                <p> Create Date: </p>
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    displayFormat="DD-MM-YYYY"
                    numberOfMonths={1}
                    isOutsideRange={ () => false }
                />
                </div>
                <div>
                    <p> Comments</p>
                    <textarea
                        type="text"
                        placeholder="Add Comments for your expense here"
                        value={this.state.comments}
                        onChange={this.onCommentsChange}
                    />
                </div>
                <div> 
                    <p> </p>
                    <button> Add Expense </button>
                </div> 
            </div>
            </form>
        );
    }
};