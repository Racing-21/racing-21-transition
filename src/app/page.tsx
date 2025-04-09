import Image from 'next/image';
import { Footer } from "../components/Footer";

export default function Page() {
	return (
		<div className={'relative flex flex-col items-center justify-center w-full min-h-screen'}>
			{/* Background image */}
			<Image
				className={'object-contain md:object-cover '}
				src={"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1744190100/6O1A6413_mozrlk.webp"}
				fill
				alt="Background Image"
				priority
				style={{  }}
			/>

			{/* Overlay with 30% opacity */}
			<div className="absolute inset-0 bg-black opacity-0 md:opacity-35"></div>

			{/* Text content */}
			<div className="relative z-10 text-center mt-10 md:mt-auto px-4 py-8 md:py-12">
				<h1 className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'}>Připravujeme pro vás nový web!</h1>
				<p className={'text-xl sm:text-2xl md:text-3xl font-semibold text-white mt-4'}>Už brzy se můžete těšit na naše webové stránky v novém kabátu.</p>
			</div>
			<Footer className={'mt-auto h-[250px] md:h-[150px] mb-2'} />
		</div>
	);
}
