import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { WebController } from '../../ParentContext/Context';

const Checkout = () => {

    const { _id, price, name, img, ratings, shipping, seller } = useLoaderData();

    const { userInfo } = useContext(WebController);

    const handlePlaceOrder = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = `${form.first.value} ${form.last.value}`;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        // console.log(name, email, phone, message);
        const order = {
            service: _id,
            productName: name,
            price,
            customer: userName,
            email,
            phone,
            message,
            status: 'Pending'
        }
        // console.log(order);
        fetch('https://fisino-server.vercel.app/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Your Order is Successfully Done')
                }
                form.reset();
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='row align-items-center justify-content-center py-5 my-5 container'>
            <div className="col-12 col-lg-6">
                <div className="cart-img"><img className='w-75' src={img} alt={name} /></div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="details">
                    <h4><span className='text-secondary'>Ratings:</span> {ratings}</h4>
                    <h1>{name}</h1>
                    <div className="d-flex align-items-center"><h3 className='pe-5'>Price: $ {price}</h3>
                        <h5 className='text-secondary'>Shipping: $ {shipping}</h5></div>
                    <p>Brand: {seller}</p>
                    <p className='color-text'>In order to sit comfortably for long periods, people need freedom of movement. The Form rocking chair has a molded plastic shell with a wide, curved seat…</p>
                    <p className='color-text'>* Certified engineered hardwood frame.</p>
                    <p className='color-text'>* Durable mortise-and-tenon construction.</p>

                    <div className="">
                        <form onSubmit={handlePlaceOrder} className="row">
                            <div className="col-12 mb-3 me-3">
                                <input type="text" name='first' className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col-12">
                                <input type="text" name='last' className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>


                            <div className="col-12 my-3">
                                <input type="number" name='phone' className="form-control" placeholder="phone" />
                            </div>

                            <div className="col-12 mb-3">
                                <input type="email" name='email' defaultValue={userInfo?.email} readOnly className="form-control" placeholder="Email here" />
                            </div>

                            <div className="col-12">
                                <textarea name='message' className="form-control" placeholder="Write product details" id="floatingTextarea" ></textarea>

                            </div>
                            <input className='mt-3 btn btn-dark rounded-0 btn-200px orderBtn' type="submit" value="Order Now" />
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;