import Image from 'next/image';
import logo from "images/logo.png";
import { MapPinIcon } from "../components/MapPin";
import { EmailIcon } from "../components/EmailIcon";

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
			<div className={'relative mt-auto p-10 flex items-start w-full h-full justify-start'}>
				<Image alt="Company name" src={logo} />
				<div className={'flex ml-10 justify-center'}>
					<div className={'flex text-white items-center'}>
						<MapPinIcon />
						<div className={' ml-2 flex flex-col align-start items-start justify-start'}>
							<p className={'text-white'}>Hájecká 47</p>
							<p className={'text-white mb-0'}>Červený Újezd, 273 51</p>
						</div>
					</div>
					<div className={'flex text-white ml-4 justify-center items-center h-full mt-auto mb-auto'}>
						<EmailIcon />
						<div className={'ml-2 flex flex-col'}>
							<p className={'text-white mb-0'}>kosnar@racing21.cz</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
