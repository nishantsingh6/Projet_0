import React from 'react'
import aboutImg from "../imgs/about.jpg"
import whoAre from '../imgs/tech.jpg';

const Home = () => {
  return (
    <div className='main-content'>
       <div className='w-[100vp] h-[700px] bg-blue-700 flex '>
           <div className='w-[50%] ml-[50px] pt-[150px]'>
			<h1 className=' font-bold  text-yellow-100  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, repellendus?</h1>
			<p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis sint tempore quibusdam dolorem libero nihil illo exercitationem. Sint, incidunt?</p>
			<button className='bg-white  mt-20 '>Like</button>
		   </div>
		   <div>
			<img className='pt-[100px] w-[92%]' src={aboutImg} alt="About" />
		   </div>
	   </div>

	   <div className='bg-white flex'>
           
			<div className='w-[50%]'>
				<img className='h-[250px] w-[250px] mt-[30px] ml-[50px]' src={whoAre} alt="Who are" />
			</div>
			<div className='w-[50%]'>
				<h3>Who are we ?</h3>
     <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, necessitatibus.</h1>
	 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt tempore ullam eligendi accusantium excepturi, praesentium dolore voluptas aliquam sint?</p>
			</div>

	
	   </div>
    </div>
  )
}

export default Home