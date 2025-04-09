import Image from "next/image";
import logo from "../images/logo.png";
import { MapPinIcon } from "./MapPin";
import { EmailIcon } from "./EmailIcon";
import { PhoneIcon } from "./Phoneicon";
import { ComponentProps } from "react";

export const Footer = ({className}: ComponentProps<'div'>) => {
	return (
		<div className={`relative mt-auto p-4 sm:p-6 md:p-10 flex flex-col md:flex-row items-center w-full ${className}`}>
			{/* Logo on top */}
			<div className="mb-6">
				<Image alt="Company name" src={logo} />
			</div>

			{/* Address and Email next to each other */}
			<div className={'flex flex-row flex-wrap md:flex-nowrap md:flex-row-reverse md:ml-4 justify-between items-center p-1 sm:items-center gap-2 sm:gap-5 mb-6 md:w-full'}>
				<div className={'flex w-[45%] md:w-full flex-col sm:flex-row text-white items-center sm:items-start'}>
					<div className="flex justify-center mb-2 sm:mb-0 sm:mr-2">
						<PhoneIcon />
					</div>
					<div className={'flex flex-col items-center sm:items-start'}>
						<p className={'text-white mb-0'}>+420 602 465 381</p>
					</div>
				</div>

				<div className={'flex w-[45%] md:w-full flex-col sm:flex-row text-white items-center sm:items-start'}>
					<div className="flex justify-center mb-2 sm:mb-0 sm:mr-2">
						<EmailIcon />
					</div>
					<div className={'flex flex-col items-center sm:items-start'}>
						<p className={'text-white mb-0'}>servis@racing21.cz</p>
					</div>
				</div>
				<div className={'flex w-full m-auto flex-col sm:flex-row text-white items-center'}>
					<div className="flex justify-center mb-2 sm:mb-0 sm:mr-2">
						<MapPinIcon />
					</div>
					<div className={'flex flex-col items-center sm:items-start ml-2'}>
						<p className={'text-white'}>Hájecká 47</p>
						<p className={'text-white mb-0'}>Červený Újezd, 273 51</p>
					</div>
				</div>
			</div>
		</div>
	);
}
