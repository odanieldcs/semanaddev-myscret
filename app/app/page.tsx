import Header from './components/header';

export default function AccountPage() {
	return (
		<>
			<Header />
			<h1 className="mb-[60px]">perguntas e mensagens anônimas</h1>
			<p className="title mb-[30px]">vamos começar?</p>
			<a className="button mb-[15px]" href="/account/new">
				criar conta
			</a>
			<a className="button" href="/account/login">
				acessar minha conta
			</a>
		</>
	);
}
