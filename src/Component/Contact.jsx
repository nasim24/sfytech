import React, { useState } from 'react'

function Contact() {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: ''
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        // alert(`${data.fullname} ${data.phone} ${data.email} ${data.message} `)
    };



    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="from-label">Full Name</label>
                                <input type="text" class="form-control"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    id="exampleFormControlInput1" placeholder="Enter Your Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="from-label">Phone</label>
                                <input type="text" class="form-control"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    id="exampleFormControlInput1" placeholder="Enter Your Mobile Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="from-label">Email</label>
                                <input type="email" class="form-control"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    id="exampleFormControlInput1" placeholder="Enter Your Email" />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control"
                                    name="message"
                                    value={data.message}
                                    onChange={InputEvent}
                                    placeholder="Message" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-outline-primary">Send to us</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
