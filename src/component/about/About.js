import React, { useContext } from 'react'
import { sender } from '../../Store'
import Heading from '../Heading'
import './About.css'
import { BsFillPersonFill, BsFillTelephoneFill, BsHeadphones } from "react-icons/bs";
import { MdEmail, MdMovie, MdPhotoCamera } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";

const About = () => {
  let {mode, setMode}=useContext(sender)

  let info=[
  {
    id:1,
    icon:<BsFillPersonFill/>,
    title: "Name",
    data:"Aditya Manohar Mulewar"
  },
  {
    id:2,
    icon:<BsFillTelephoneFill/>,
    title:"Phone",
    data:7721936313
  },
  {
    id:3,
    icon:<MdEmail/>,
    title:"Email",
    data:"aditya97mulewar@gmail.com"
  }
  ]

  let interest=[
    {
      id:1,
      icon:<BsHeadphones />,
      title:"Music"
    },
    {
      id:2,
      icon:<SiYourtraveldottv />,
      title:"Travel"
    },
    {
      id:3,
      icon:<MdMovie/>,
      title:"Movies"
    },
    {
      id:4,
      icon:<MdPhotoCamera />,
      title:"Photo"
    }
  ]

  return (
    <>
      <div className={`container-fluid bg-${mode?'dark':'light'} text-${mode?'light':'dark'}`} id='about' style={{paddingTop:"70px"}} >
          <Heading title="About Me" desp="Know About Me" size="75px"/>
          <div className="row align-items-center about">
            <div className="col-md-5">
              <img src="Images/About/pexels-cottonbro-studio-3201580.jpg" width="100%" height="580px" alt="" />
            </div>
            <div className="col-md-7">
              <h3>My Intro</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorum quidem optio, dolores reiciendis nisi aperiam sint aliquam vitae eveniet, reprehenderit accusamus quod modi vel adipisci. At sunt accusamus perspiciatis voluptatibus explicabo repellendus, iure pariatur neque deserunt excepturi laborum ducimus.</p>
              <table>
                {
                  info.map((e)=>{
                    return(
                      <tbody key={e.id}>
                          <tr>
                            <td className={`text-${mode?'primary':'warning'} fs-5`}>{e.icon}</td>
                            <td  title className='fs-5 pe-3'>{e.title}</td>
                            <td data className={`fs-5 text-${mode?'warning':'primary'}`}>{e.data}</td>
                          </tr>
                      </tbody>
                    )
                  })
                }
              </table>    
            
              <h4 className='mt-5'>My Interest</h4> 
              {
                interest.map((e)=>{
                  return(
                    <label htmlFor="" key={e.id} className='fs-5'>{e.icon}&nbsp;{e.title}&emsp;</label>
                  )
                })
              }       
            </div>
          </div>
      </div>
    </>
  )
}

export default About