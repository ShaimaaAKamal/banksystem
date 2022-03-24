import React from 'react';
function Home(props){
    return(
        <button className="btn btn-Primary" onClick={props.getCustomers}>View all Customers</button>
    );
}

export default Home;
