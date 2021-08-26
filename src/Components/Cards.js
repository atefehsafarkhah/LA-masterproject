import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from '../Components/Images/Angular.jpg';
import img2 from '../Components/Images/Vue.jpg';
import img3 from '../Components/Images/reactcourse.jpg';
import img4 from '../Components/Images/NodeJs.jpg';
import img5 from '../Components/Images/HTML-CSS.jpg';





function Cards() {
    return (
        <div className='cards'>
         <h1>Check out these practical Cources!</h1>   
         <div className="cards__container">
         <div className="cards__wraper">
           <ul className="cards__items">
               <CardItem
               src={img1}
               text="Angular tutorial"
               label='Intermediate'
               path='/services'

               
               />
                <CardItem
               src={img2}
               text="Vue tutorial"
               label='Begginer'
               path='/services'
               />

                 <CardItem
               src={img3}
               text="React tutorial"
               label='Begginer'
               path='/services' 
               />

               <CardItem
               src={img4}
               text="NodeJs tutorial"
               label='Advanced'
               path='/services'

               />

               <CardItem
               src={img5}
               text="HTML-CSS tutorial"
               label='Advanced'
               path='/services'
               />


           </ul>
         </div>
        </div>
        </div>
    )
}

export default Cards
