export default function BreadcrumbEdit(props) {
    return (
        <div className={`
            mt-[1.66rem] text-xs
        `}>
            <span className="text-ligth-gray-text">Frota/</span>
            <span className="text-ligth-gray-text">Veículos/</span>
            <span className="text-blue-default">{props.page}</span>
        </div>
    )
}