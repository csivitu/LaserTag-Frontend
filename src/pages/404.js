import Lottie from 'lottie-react';
import notFound from '../lottie/not-found-1.json';

const pageNotFound = () => {
	return (
		<div className='w-screen h-screen flex flex-col items-center justify-center'>
			<Lottie
				animationData={notFound}
				className='w-60 sm:w-2/5 md:w-96'
			/>
			<h1 className='text-2xl md:text-4xl -mt-10 md:-mt-16'>Page Not Found</h1>
			<a href='/' className='py-2 px-5 rounded-md bg-white text-black border-2 border-solid border-white hover:bg-transparent hover:text-white transition-all'>
				Home
			</a>
		</div>
	);
};

export default pageNotFound;
