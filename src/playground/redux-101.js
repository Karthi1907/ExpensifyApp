import { createStore} from 'redux';

/* Action Generator functions - Start */

const increment = ( { increaseBy = 1 } = {}  ) => ({
    
    type: 'INCREMENT',
    increaseBy
});

const decrement = ( { decreaseBy = 1 } = {} ) => ({

    type: 'DECREMENT',
    decreaseBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ( { value } = {} ) => ({

    type: 'SET',
    value

});

/* Action Generator functions - End  */

const store = createStore( (state = { count : 0 }, action) => {

switch (action.type) {
    case 'INCREMENT':
        return {

            count : state.count + action.increaseBy
        };
        
    case 'DECREMENT':
         
        return  { count : state.count - action.decreaseBy };
    
    case 'RESET':
        return { count : 0 };
    
    case 'SET':
        return { count : action.value };
    
    default:
        return state;
    }
});

const unsubscribe =  store.subscribe (() => { console.log(store.getState()) } );
//console.log(store.getState());

store.dispatch( increment( {increaseBy : 20} ) );
store.dispatch( increment( {increseBy : 20} ) );
//console.log(store.getState());    
store.dispatch ( increment() );
store.dispatch ( decrement({ decreaseBy : 5 } ) );
//console.log(store.getState());
store.dispatch ( reset() );
store.dispatch ( decrement() );  
//console.log(store.getState());
// OLD FORMAT: store.dispatch( {type : 'SET', value: 100} );
store.dispatch( set( {value : 100} ) );
//unsubscribe();
store.dispatch ( decrement() );  
store.dispatch( set( {value : -100}  ) );
//store.dispatch ( { type : 'DECREMENT', decreaseBy: 10 } );  // Old Format
store.dispatch( decrement( { decreaseBy : 8 } ) )
console.log(store.getState());

