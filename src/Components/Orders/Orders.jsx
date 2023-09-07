import React, { useContext, useEffect, useState } from 'react';
import { WebController } from '../../ParentContext/Context';
import OrderRow from './OrderRow';

const Orders = () => {

    const { userInfo } = useContext(WebController)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://fisino-server.vercel.app/orders?email=${userInfo?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [userInfo?.email])


    const handleDelete = id => {
        const process = window.confirm('Are you wan to to delete')
        if (process) {
            fetch(`https://fisino-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete successfull');
                        const remaining = orders.filter(or => or._id !== id);
                        setOrders(remaining)
                    }
                })
        }

    }

    const handleStatusUpdate = id => {
        fetch(`https://fisino-server.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "Approved" })

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const statusRemaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = "Approved";
                    const newOrders = [approving, ...statusRemaining]
                    setOrders(newOrders)
                }
                console.log(data);
            })
    }



    return (
        <div className='my-5 py-5 container'>

            <h2 className='mt-5'>See all Orders</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Poduct Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                        ></OrderRow>)
                    }



                </tbody>
            </table>

        </div>
    );
};

export default Orders;