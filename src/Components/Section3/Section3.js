import React, { useContext } from 'react'
import ThemeContext from '../../ContextApi/ThemeContext/Theme'
import "./Section3.scss"

export default function Section3() {
  const {theme} = useContext(ThemeContext)
  return (
    <div>
        <section className={` mt-5 p-4 rounded section3 ${theme}`}>
           <div className="d-flex justify-content-between align-items-center" >
             <h2>Trending topics</h2>
             <p>View all categories</p>
           </div>

           <div className='d-flex gap-4 mt-4'>
             <div className="box">
               <img src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/01.jpg" alt="" />
               <p>Traveling</p>
             </div>
             <div className="box">
               <img src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/02.jpg" alt="" />
               <p>Business</p>
             </div>
             <div className="box">
               <img src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/03.jpg" alt="" />
               <p style={{marginLeft:"-10px"}}>Marketing</p>
             </div>
             <div className="box">
               <img src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/04.jpg" alt="" />
               <p style={{marginLeft:"-24px"}}>Photography</p>
             </div>
             <div className="box">
               <img src="https://blogzine.webestica.com/assets/images/blog/1by1/thumb/05.jpg" alt="" />
               <p >Sports</p>
             </div>
           </div>
        </section>
    </div>
  )
}
