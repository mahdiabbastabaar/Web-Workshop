import React, { Component } from 'react'

class Rating extends Component {
    render() {
        return (
            <div className="justify-content-center  mt-3 d-flex flex-row align-items-center">
                <div className="text-muted">(57)</div>
                <div className="d-flex flex-row-reverse m-2">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
                <div style={{ color: 'orange' }}>3.1</div>
            </div>
        )
    }

}

export default Rating