import React from 'react'

function PastEvents() {
    return (
        <div id="PastEvents" className="flex flex-col min-h-screen justify-center gap-10 md:gap-20 items-start px-6 md:px-20 lg:px-40">
            <img alt="" src="/images/PastEventsHeading.svg" className='w-11/12 sm:w-96' />
            <div className="flex flex-col items-center gap-2 md:gap-5 mb-10 self-center">
                {/* <Image src="/images/lazertag_past.svg" height="1700px" width="1200px" /> */}
                <div className='flex gap-2 md:gap-5 justify-center items-center'>
                    <img className="w-1/3 rounded-md md:rounded-lg overflow-hidden" src="/images/past/1.webp" alt="1" />
                    <img className="w-2/3 rounded-md md:rounded-lg overflow-hidden" src="/images/past/2.webp" alt="2" />
                </div>
                <div className='flex gap-2 md:gap-5 justify-center items-center'>
                    <img className="w-1/2 rounded-md md:rounded-lg overflow-hidden" src="/images/past/3.webp" alt="3" />
                    <img className="w-1/2 rounded-md md:rounded-lg overflow-hidden" src="/images/past/4.webp" alt="4" />
                </div>
                <div className='flex gap-2 md:gap-5 justify-center items-center'>
                    <img className="w-1/2 rounded-md md:rounded-lg overflow-hidden" src="/images/past/5.webp" alt="5" />
                    <img className="w-1/2 rounded-md md:rounded-lg overflow-hidden" src="/images/past/6.webp" alt="6" />
                </div>
            </div>
        </div>
    )
}

export default PastEvents;