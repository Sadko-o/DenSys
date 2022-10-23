import React from 'react';
import HomeHeader from '../../headers/HomeHeader';

const Home = () => {
    return (
        <>
        <HomeHeader/>
        <div className="lg:h-[680px] bg-no-repeat bg-cover bg-center h-[350px] lg:bg-inherit bg-blend-multiply">
            <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
                <div className='lg:w-6/12 lg:mr-auto lg:mx-0 mx-auto lg:pt-[165px] pt-[50px]'>
                    <h1 className='lg:text-[3rem] lg:text-left lg:text-[#1B1212] text-white text-center text-[30px] font-thin'>
                        <span className='text-secondary  font-bold text-[#2273FF]'>We care</span>
                        <br />
                        <span className='text-secondary font-semibold'>about your health</span>
                    </h1>

                    <p className='lg:text-[#828282] text-white mt-3 leading-5 lg:text-left text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem similique odit repellat nostrum, saepe magnam beatae pariatur qui impedit eaque amet, corporis eos! Corrupti iure sunt dolorem doloremque deserunt eligendi!
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;