export default function Card() {
	return (
		<div className="flex flex-col w-full">
			<div className="flex items-center space-x-4 float-left">
				<span className="rounded-full w-16 h-16 bg-blue-400"></span>
				<div>
					<h3 className="text-sm font-semibold text-[#D43A72]">
						Nome da Pessoa
					</h3>
					<p className="text-xs font-semibold text-[#848484]">@username</p>
				</div>
			</div>
			<div className="bg-gray-100 rounded-[12px] shadow-sm p-[15px] pt-[20px] float-left -top-2">
				<p className="text-[#D43A72] text-sm">Título da minha pergunta</p>
				<p>Aqui vai uma resposta para uma pergunta aberta para usuários</p>
			</div>
		</div>
	);
}
