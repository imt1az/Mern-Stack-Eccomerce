import React from 'react';

const Loading = ({full}) => {
    return (
        <div>
            <div className='container mx-auto'>
                {
                    full ?
                    <div className={`min-h-screen flex justify-center`}>
                    <button className="btn btn-square loading"></button>
                    </div>
                    : ''
                }
           
        </div>
        </div>
    );
};

export default Loading;