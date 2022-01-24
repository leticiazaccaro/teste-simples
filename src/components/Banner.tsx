export default function Banner() {
    return (
        <div className={`
            w-full bg-gradient-to-r from-blue-default to-blue-gradient ...
            h-28 rounded-[0.65rem] mt-5 pl-16
            flex justify-between
        `}>
            <div className="flex flex-col justify-center text-white">
                <p className="text-[1.15rem]">Gerencie seus veículos</p>
                <p className="text-xs">Crie e gerencie seus veiculos</p>
            </div>
            <div className="flex mr-36">
                <img src="https://onedoor.com.br/img/caminh%C3%A3o.png" className="mr-10" />
                <img src="https://onedoor.com.br/img/carro.png" />
            </div>
        </div>
    )
}