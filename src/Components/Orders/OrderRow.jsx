import React from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, productName, price, customer, phone, status } = order;


    return (
        <tr>
            <th scope="row">{customer}</th>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{phone}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-outline-danger'>Delete</button>

                <button onClick={() => handleStatusUpdate(_id)} className=' ms-3 btn btn-sm btn-outline-success'>{status ? status : 'Pending'}</button>
            </td>
        </tr>
    );
};

export default OrderRow;