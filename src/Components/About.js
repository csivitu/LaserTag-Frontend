import React from 'react'
import Lottie from 'lottie-react'
import lasertagLogo from "../lottie/laserTag.json"

function AboutLaserTag() {
    return (
        <div id="About" className="flex flex-col h-screen justify-center items-center px-6 md:px-20 lg:px-40">
            <img src="/images/AboutLaserTag.svg" alt="" className='w-11/12 sm:w-96 ' />
            <div className="flex items-center gap-20 mb-10">
                <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20 mb-10">
                    <Lottie animationData={lasertagLogo} className="w-full sm:w-3/5 md:w-1/2" />
                    <div className='md:w-1/2 flex flex-col items-start md:text-xl'>
                        <p className='font-light mb-5'>
                            A great disturbance in the force can be felt again. Is it the rise of a skywalker or the rise of a phantom menace? Come join CSI-VIT in a battle of lasertag lightsabers to help restore balance to the force.
                        </p>
                        <p className='font-medium'>
                            For there is only do or do not, there is no try.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutLaserTag;