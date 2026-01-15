longRunningOperation(() =>{
    anotherLongRunningOperation(() =>{
        yetAnother(() =>{
            lastONe (()=>{
                console.log('Where are we?');
            });
        });
    });
});