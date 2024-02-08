export default function NewAccountPage() {
	return (
		<div>
			<h1>New Account</h1>
			<p>perguntas e mensagens anônimas</p>
			<FormEmail />
		</div>
	);
}

function FormEmail() {
	return (
		<>
			<input type="text" placeholder="informe seu email" />
			<button>continuar</button>
		</>
	);
}

function FormPassword() {
	return (
		<>
			<input type="text" placeholder="informe sua senha" />
			<button>continuar</button>
		</>
	);
}

function FormProfile() {
	return (
		<>
			<input type="text" placeholder="informe seu nome" />
			<input type="text" placeholder="informe seu usuário" />
			<FormAvatar />
			<button>continuar</button>
		</>
	);
}

function FormAvatar() {
	return (
		<>
			<ul>
				<li>avatar 1</li>
			</ul>
		</>
	);
}
