import React, { useContext } from 'react'
import { sender } from '../../Store'
import './Home.css';

const Home = () => {

    let {mode,setMode}=useContext(sender)

  return (
    <>
        <div className={`container-fluid bg-${mode?"dark":"light"}`} id="home">
            <div className="row home align-items-center">
                <div className={`col-7 text-${mode?"light":"dark"}`}>
                    <h1 className='pb-5'>Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quasi impedit reprehenderit facilis tempore animi deserunt minus aut officiis unde asperiores, amet, voluptate dignissimos perspiciatis consequuntur maiores iusto, esse debitis velit repellat itaque praesentium provident aperiam voluptatibus? Consectetur rerum incidunt sequi accusamus, eaque perferendis non nam repellat nemo, suscipit blanditiis? Maiores cupiditate asperiores laudantium ab corrupti. Ducimus magnam nostrum numquam, incidunt, culpa soluta hic temporibus suscipit, voluptas velit iusto magni.</p>
                </div>
                <div className={`col-5 text-${mode?"light":"dark"}`}>
                    <img src="Images/Home/pexels-olia-danilevich-4974914.jpg" width="100%" alt="" />
                </div>

            </div>
        </div>
    </>
  )
}

export default Home