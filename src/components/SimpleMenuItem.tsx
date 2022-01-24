interface SimpleMenuItemProps {
    icon: any
    text: string
    onClick?: () => void
}

export default function SimpleMenuItem(props: SimpleMenuItemProps) {
    return (
        <div
            className={`
                flex items-center
                mt-9 ml-7 mr-6 w-48
                cursor-pointer
            `}
            onClick={props.onClick}
        >
            {props.icon}
            <p className="text-xs text-dark-gray-text">{props.text}</p>
        </div>
    )
}