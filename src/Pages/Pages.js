import React from 'react';
import { Link } from 'react-router-dom';

const Pages = () => {
    return (
        <div style={{marginTop: '20%'}}> 
            <Link to='/taskOne'>Task One: User Registration</Link> <br />
            <Link to='/taskTwo'>Task Two: Store User Information</Link> <br />
            <Link to='/taskThree'>Task Three: Fetch student and teacher name from defferent database</Link>
        </div>
    );
};

export default Pages;