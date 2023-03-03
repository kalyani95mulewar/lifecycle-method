import React, { useContext } from 'react'
import { sender } from '../../Store'

const PgBar = () => {

    let{mode,setMode}=useContext(sender)

    let Info = [
        {
            id: 1,
            per: "58%",
            title: "HTML"
        },
        {
            id: 2,
            per: "50%",
            title: "CSS"
        },
        {
            id: 3,
            per: "55%",
            title: "BOOTSTRAP"
        },
        {
            id: 4,
            per: "68%",
            title: "JAVASCRIPT"
        },
        {
            id: 5,
            per: "60%",
            title: "REACT"
        }
    ]

    return (
        <>
            <div className={`container-fluid bg-${mode?"dark":"light"} text-${mode?"light":"dark"}`} >
                <div className="row">
                    {
                        Info.map((e) => {
                            return (
                                <div className="col-6">
                                    <div class="progress">
                                        <div class="progress-bar" role="progress-bar" aria-label="Example with label" style={{ width: e.per }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{e.per}</div>
                                    </div>
                                    <h6> {e.title}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PgBar