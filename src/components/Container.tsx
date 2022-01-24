interface ContainerProps {
    children: any
}

export default function Container(props: ContainerProps) {
    return (
        <div className="w-full">
            <div className={`
            bg-light-gray h-fit
              pl-3 pr-[1.9rem] pt-5 pb-28
            `}>
                {props.children}
            </div>
        </div>
    )
}