import Image from 'next/image';
import { Footer } from "../components/Footer";

export default function Page() {
	return (
		<div className={'relative flex flex-col items-center justify-center min-w-[100vw] min-h-[100vh]'}>
			{/* Background image */}
			<Image
				className={'object-cover'}
				src={"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1744190100/6O1A6413_mozrlk.webp"}
				fill
				alt="Background Image"
				priority
			/>

			{/* Overlay with 30% opacity */}
			<div className="absolute inset-0 bg-black opacity-35"></div>

			{/* Text content */}
			<div className="relative z-10 text-center mt-auto">
				<h1 className={'text-7xl font-bold text-white min-h-24'}>Připravujeme pro vás nový web!</h1>
				<p className={'text-3xl font-semibold text-white'}>Už brzy se můžete těšit na naše webové stránky v novém kabátu.</p>
			</div>
			<Footer />
		</div>
	);
}
