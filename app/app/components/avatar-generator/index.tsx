'use client';
import Image from 'next/image';

export default function AvatarGenerator() {
	return (
		<div className="border border-[#D9D9D9] rounded-[12px] w-full flex flex-col justify-between items-left p-[15px] space-y-[10px]">
			<p>escolhar um avatar</p>
			<div className="flex items-center">
				<div className="flex justify-center items-center space-x-[24px]">
					<Image
						src="/avatar/avatar3.png"
						alt="Avatar"
						width={64}
						height={64}
					/>
					<Image
						src="/avatar/avatar7.png"
						alt="Avatar"
						width={64}
						height={64}
					/>
					<Image
						src="/avatar/avatar12.png"
						alt="Avatar"
						width={64}
						height={64}
					/>
				</div>
				<button>
					<Image
						src="/icon/refresh-icon.svg"
						alt="Refresh"
						width={24}
						height={24}
						className="stroke-gray-400"
					/>
				</button>
			</div>
		</div>
	);
}
