import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.heading}</h5>
                        <p className="card-text">{props.desc}</p>

                        <NavLink to="#" className="btn btn-primary">Read more</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
