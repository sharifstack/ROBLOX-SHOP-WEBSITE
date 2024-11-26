import React from 'react'
import ProductCard from '../Layout/ProductCard'
import rb400 from "../../public/RB450.png";
import Container from '../Layout/Container';
import p1 from '../../public/pricechart/p1.png'
import p2 from '../../public/pricechart/p2.png'
import p3 from '../../public/pricechart/p3.png'
import r1 from '../../public/pricechart/r80.png'
import r2 from '../../public/pricechart/r400.png'
import r3 from '../../public/pricechart/r800.png'
import r4 from '../../public/pricechart/r1700.png'
import r5 from '../../public/pricechart/r4500.png'
import "animate.css";

const Shop = () => {
  return (
    <div className='bg-[url(../public/bg.png)] bg-contain bg-center pt-20'>
    <Container className='animate__animated animate__fadeIn md:py-16 py-8'>
    <div className='md:mb-7 mb-4 border-b pb-2 md:pb-3 flex justify-between items-center px-2'>
        <h1 className='text-white font-arimo text-xl md:text-[40px]'>PREMIUM PACKAGE</h1>

        <div className="btn bg-white text-black text-center hover:bg-black hover:text-white transition-all duration-200">
        <button className="md:py-4 md:px-6 py-1 px-2 font-bold font-arimo">VIEW MORE</button>
        </div>
      </div>

      <div className="chart md:flex md:justify-evenly px-2 grid grid-cols-2 gap-y-4 md:gap-y-0">
      
      <ProductCard src={p1}
       Price="500 BDT" 
       detail=' Instant Delivery' />

      <ProductCard src={p2}
       Price="1000 BDT" 
       detail=' Instant Delivery' />

      <ProductCard src={p3}
       Price="2000 BDT"
        detail=' Instant Delivery' />
     
      </div>
    </Container>

    {/* SECTION------------------- */}
    <Container className='md:py-16 py-8'>
    <div className='md:mb-7 mb-4 border-b pb-2 md:pb-3 flex justify-between items-center px-2'>
        <h1 className='text-white font-arimo text-xl md:text-[40px]'>NORMAL PACKAGE</h1>

        <div className="btn bg-white text-black text-center hover:bg-black hover:text-white transition-all duration-200">
        <button className="md:py-4 md:px-6 py-1 px-2 font-bold font-arimo">VIEW MORE</button>
        </div>
      </div>
      <div className="chart md:flex md:justify-between px-2 grid grid-cols-2 gap-y-4 md:gap-y-0">
      <ProductCard src={r1}
       Price="99 BDT"
       detail=' Instant Delivery' />
        
      <ProductCard src={r2}
       Price="499 BDT"
       detail=' Instant Delivery' />
        
      <ProductCard src={r3}
       Price="999 BDT"
       detail=' Instant Delivery' />

      <ProductCard src={r4} 
      Price="1999 BDT"
      detail=' Instant Delivery' />

      <ProductCard src={r5} 
      Price="4999 BDT"
      detail=' Instant Delivery' />

      </div>
    </Container>


    {/* SELLER SECTION */}
    <Container className='md:py-16 py-8'>
    <div className='md:mb-7 mb-4 border-b pb-2 md:pb-3 flex justify-between items-center px-2'>
        <h1 className='text-white font-arimo text-xl md:text-[40px]'>PACKAGES BY THE SELLER</h1>

        <div className="btn bg-white text-black text-center hover:bg-black hover:text-white transition-all duration-200">
        <button className="md:py-4 md:px-6 py-1 px-2 font-bold font-arimo">VIEW MORE</button>
        </div>
      </div>
      <div className="chart md:flex md:justify-between px-2 grid grid-cols-2 gap-y-4 md:gap-y-0">
      <ProductCard src={rb400}
       Price="500TK"
       detail=' Depends On Seller' />

      <ProductCard src={rb400}
       Price="500TK"
       detail=' Depends On Seller' />
      <ProductCard src={rb400}
       Price="500TK"
       detail=' Depends On Seller' />
      <ProductCard src={rb400}
       Price="500TK"
       detail=' Depends On Seller' />
      <ProductCard src={rb400}
       Price="500TK" 
       detail=' Depends On Seller'/>
      </div>
    </Container>
    </div>
  )
}

export default Shop