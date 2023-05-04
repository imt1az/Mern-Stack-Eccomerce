import React from 'react';
import Moment from 'react-moment';

const HistoryBlock = ({history}) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Products</th>
                            <th>Amount Paid</th>
                            <th>Order Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {history.map((item,index)=>(
                          <tr key={history.transactionId}>
                          <th>{index+1}</th>
                          <td><Moment to={item.date}></Moment></td>
                          <td>
                          <td>
                                { item.items.map((article,i)=>(
                                    <div className='text-green-500 font-bold' key={i}>{article.name}</div>
                                ))}
                            </td>
                            </td>
                          <td className='text-green-700 font-semibold'>${item.amount}</td>
                          <td className='font-bold'>{item.orderID}</td>
                      </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default HistoryBlock;