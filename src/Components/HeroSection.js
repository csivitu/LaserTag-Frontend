import React from 'react'

function Hero() {
    return (
        <div id="Hero" className="flex flex-col h-screen justify-center items-center gap-5 md:gap-20">
            <div className='h-32 sm:h-64 md:h-72 xl:h-96 w-full md:w-2/3 object-cover object-center' style={{
                backgroundImage: "url('/images/mainAnimation.gif')",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                {/* <button className='cursor-pointer py-3 px-5 text-xl bg-transparent border-2 border-gray-500 text-white outline-none border-solid rounded-lg w-48 hover:bg-laser-yellow hover:border-laser-yellow active:border-laser-yellow hover:text-black transition-all ease-linear' onClick={() => window.location.href = "https://events.vit.ac.in/events/gravitas2022/"}>Register Now</button> */}
                <button className='cursor-pointer py-3 px-5 text-xl bg-transparent border-2 border-gray-500 text-white outline-none border-solid rounded-lg w-48 hover:bg-laser-yellow hover:border-laser-yellow active:border-laser-yellow hover:text-black transition-all ease-linear' onClick={() => window.location.href = "/book"}>Book Slot</button>
            </div>
        </div>
    )
}

export default Hero;