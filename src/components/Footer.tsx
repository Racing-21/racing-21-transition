import Image from "next/image";
import logo from "../images/logo.png";
import { MapPinIcon } from "./MapPin";
import { EmailIcon } from "./EmailIcon";
import { PhoneIcon } from "./Phoneicon";

export const Footer = () => {
	return 	<div className={'relative mt-auto p-10 flex items-start w-full h-full justify-start'}>
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
					<p className={'text-white mb-0'}>servis@racing21.cz</p>
				</div>
			</div>
			<div className={'flex text-white ml-4 justify-center items-center h-full mt-auto mb-auto'}>
				<PhoneIcon />
				<div className={'ml-2 flex flex-col'}>
					<p className={'text-white mb-0'}>+420 602 465 381</p>
				</div>
			</div>
		</div>
	</div>
}
