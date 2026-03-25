import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to FashionFusion, your ultimate destination for trendy and timeless fashion. Founded in 2023, we are passionate about bringing you the latest styles, from casual wear to elegant outfits, all designed to make you look and feel your best. Our carefully curated collections are inspired by global fashion trends, ensuring you stay ahead of the curve. At FashionFusion, we believe that fashion is more than just clothing—it’s a way to express yourself and embrace your unique identity.</p>
          <b className='text-gray-800 '>Our Mission</b>
          <p>At FashionFusion, our mission is simple: to empower individuals to express their personal style with confidence. We strive to provide high-quality, affordable fashion that caters to every taste and occasion. Whether you're dressing up for a special event or looking for everyday comfort, we’re here to help you find the perfect outfit. We’re committed to sustainability, inclusivity, and innovation, ensuring that our fashion choices not only look good but also do good for the planet and the people.</p>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At FashionFusion, quality is our priority. Every item in our collection is carefully inspected for durability, comfort, and style. We work with trusted manufacturers to ensure you receive only the best. Shop with confidence knowing your clothing is built to last.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We make shopping easy. Enjoy a seamless experience with fast shipping, hassle-free returns, and multiple payment options. Our user-friendly website is designed for effortless browsing and checkout, so you can focus on finding your perfect style.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exception Customer Service:</b>
          <p className='text-gray-600'>Your satisfaction matters. Our friendly support team is here to help with sizing, orders, or styling advice. We’re committed to providing prompt, personalized service to make your shopping experience exceptional.</p>
        </div>
      </div>

      <NewsLetterBox/>

      
    </div>
  )
}

export default About
