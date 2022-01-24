import Arrow from './Arrow'

interface OptionsMenuItem {
    icon: any
    text: string
}

export default function OptionsMenuItem(props: OptionsMenuItem) {
    return (
        <div className={`
            flex items-center justify-between
            mt-9 ml-7 mr-6 w-48
            cursor-pointer
        `}>
            <div className="flex items-center">
                {props.icon}
                <p className="text-xs text-dark-gray-text">{props.text}</p>
            </div>
            <div>
                <Arrow />
            </div>
        </div>
    )
}