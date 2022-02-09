import React from 'react';


// props < />
// state <  />
// children <>asdfa</>

const Scroll = (props) => {
    return (
        <div style={{ overflowY:'scroll', border:'5px solid black', height:'800px' }}>
            { props.children }
        </div>  
    );
};

export default Scroll;