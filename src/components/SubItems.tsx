export default function SubItems(props) {
    return (
        <div className={` 
            mt-[1.13rem] ml-12 mr-6 w-[9.5rem]
        `}>
            <p className="text-xs ml-2 text-ligth-gray-text">Entregadores</p>
            <div className={`
                rounded-md bg-blue-default
                h-[2.13rem] mt-4
                flex flex-col justify-center
            `}>
                <p className="text-xs text-white ml-2">Frota</p>
            </div>
        </div>
    )
}