import React, { useContext } from 'react'
import { FcNightPortrait } from "react-icons/fc";
import { sender } from '../../Store';
import Links from './Links';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Navbar = () => {

    let {mode,setMode}=useContext(sender)

    return (
        <>
            <nav class={`fixed-top navbar navbar-expand-lg bg-${mode?"dark":"light"}`}>
                <div class="container-fluid">
                    <a class="navbar-brand fs-2 p-0" href="#"><FcNightPortrait /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <Links link="Home" id="#home"/>
                            <Links link="About" id="#about"/>
                            <Links link="Skills" id="#skills"/>
                            <Links link="Contact" id="#contact"/>
                        </ul>
                        <div class="d-flex" role="search">
                            <button className={`border-0 fs-4 bg-${mode?"dark":"light"}`} onClick={()=>setMode(!mode)}>{mode?<BsFillSunFill className='fs-4 text-warning'/>:<BsFillMoonFill className='fs-4 text-primary'/>}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar