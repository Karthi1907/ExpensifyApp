// Get Visible Expenses

export default ( ( expenses, {text, sortBy, startDate, order, endDate} ) => 
    {
        return expenses.filter(( expense ) => {
            const startDateFormatted = startDate ? startDate.format('YYYYMMDD') : null;
            const endDateFormatted = endDate ? endDate.format('YYYYMMDD') : null;
            console.log (` startDate: ${startDateFormatted} | endDate: ${endDateFormatted} | text: ${text} | sortBy: ${sortBy}
               order: ${order} | expense descr: ${expense.descr} | expense createdAt: ${expense.createdAt} `);
            const startDateMatch = startDate ? expense.createdAt >= startDateFormatted : true;
            const endDateMatch = endDate ? expense.createdAt < endDateFormatted : true;
            const textMatch =  !text ||  expense.descr.toLowerCase().includes(text.toLowerCase()) ;
            console.log (`${startDateMatch} && ${endDateMatch} && ${textMatch}`)

            return startDateMatch && endDateMatch && textMatch;
        }).sort( (a,b) => {

                switch(sortBy) {
                    case 'date':
                        switch (order) {
                            case 'asc':
                                return (
                                    a.createdAt === b.createdAt ? 0 : a.createdAt  > b.createdAt ? 1 : -1
                                );
                            case 'desc':
                                return (
                                    a.createdAt === b.createdAt ? 0 : a.createdAt < b.createdAt ? 1 : -1        
                                );
                        }
                    case 'amount':
                    default:
                        switch (order) {
                            case 'asc':    
                                return (
                                    a.amount === b.amount ? 0 : a.amount > b.amount ? 1 : -1
                                );
                            case 'desc':
                                return (
                                    a.amount === b.amount ? 0 : a.amount < b.amount ? 1 : -1
                                );
                        }
                } 

            } 
        )
    }   
);