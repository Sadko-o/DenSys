import React from 'react'

const Hero = () => {
  return (
    <>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium  "><span class="text-[#2273FF] font-bold">We care</span>
                <br class="hidden lg:inline-block"/><span class="text-[#1B1212]">about your health</span>
            </h1>
            <p class="mb-8 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis deleniti placeat voluptatibus aperiam harum deserunt quis distinctio reprehenderit quibusdam ad vitae cumque omnis tempora explicabo dignissimos inventore, assumenda soluta cupiditate.</p>
            <div class="flex justify-center ">
                <button class="inline-block px-4 py-2 text-[#1B1212] font-semibold border-2 border-[#2273FF] rounded-md hover:bg-[#2273FF] hover:text-white focus:outline-none">Sign In</button>
            </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
            </div>
        </div>
        </section>
    </>
  )
}

export default Hero