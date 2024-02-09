import Image from 'next/image';
import Styles from './styles.module.css';

export default function Nav() {
	return (
		<nav className="flex w-full mb-4">
			<ul className="flex w-full justify-between">
				<li>
					<NavButton
						href="/dash/answers"
						imageUrl="/icon/message.svg"
						title="Perguntas"
					/>
				</li>
				<li>
					<NavButton
						href="/dash/answers"
						imageUrl="/icon/inbox.svg"
						title="Mensagens"
					/>
				</li>
				<li>
					<NavButton
						href="/dash/answers"
						imageUrl="/icon/send.svg"
						title="Respostas"
					/>
				</li>
			</ul>
		</nav>
	);
}

function NavButton({
	href,
	imageUrl,
	title,
}: {
	href: string;
	imageUrl: string;
	title: string;
}) {
	return (
		<a className={Styles.navButton} href={href}>
			<Image src={imageUrl} alt={title} width={16} height={16} />
			<span>{title}</span>
		</a>
	);
}
