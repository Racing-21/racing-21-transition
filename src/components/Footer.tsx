import Image from "next/image";
import logo from "../images/logo.png";
import { MapPinIcon } from "./MapPin";
import { EmailIcon } from "./EmailIcon";
import { PhoneIcon } from "./Phoneicon";
import { ComponentProps } from "react";

const footerItem = 'col-span-2 md:flex justify-center flex-row  h-full sm:flex-row  text-white items-center'

export const Footer = ({className}: ComponentProps<'div'>) => {
	return (
		<div className={`relative mt-auto p-4 sm:p-6 md:p-10 flex flex-col md:flex-row items-center w-full ${className}`}>
			{/* Logo on top */}
			<div className="mb-6 md:mb-0">
				<Image alt="Company name" src={logo} />
			</div>

			{/* Address and Email next to each other */}
			<div className={'grid grid-cols-4 md:flex flex-row md:ml-4 gap-4  h-full' }>
				<div className={`${footerItem} col-span-4 md:col-span-1 items-center`}>
					<div className="flex justify-center mb-2 sm:mb-0 sm:mr-2">
						<MapPinIcon />
					</div>
					<div className={'flex flex-col flex-wrap items-center ml-auto md:items-start '}>
						<p className={'flex text-white text-center md:text-left'}>Hájecká 47</p>
						<p className={'flex text-white text-center md:text-left mb-0'}>Červený Újezd, 273 51</p>
					</div>
				</div>
				<div className={footerItem}>
					<div className="flex justify-center mb-2 sm:mb-0 sm:mr-2">
						<PhoneIcon />
					</div>
					<div className={'flex flex-col items-center sm:items-start'}>
						<p className={'text-white mb-0'}>+420 602 465 381</p>
					</div>
				</div>

				<div className={footerItem}>
					<div className="flex justify-center mb-2 sm:mb-0 sm:mr-2">
						<EmailIcon />
					</div>
					<div className={'flex flex-col items-center sm:items-start'}>
						<p className={'text-white mb-0'}>servis@racing21.cz</p>
					</div>
				</div>

			</div>
		</div>
	);
}
