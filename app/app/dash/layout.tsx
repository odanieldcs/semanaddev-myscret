'use client';
import Image from 'next/image';
import Styles from './styles.module.css';
import Nav from '../components/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className={Styles.header}>
				<button>
					<Image src="/icon/log-out.svg" alt="Sair" width={24} height={24} />
				</button>
				<Image
					src="/logo.png"
					alt="MyScret"
					width={32}
					height={32}
					className="opacity-50"
				/>
				<Image src="/avatar/avatar5.png" alt="MyScret" width={48} height={48} />
			</header>
			<Nav />
			{children}
		</>
	);
}
