import Arrow from "./Arrow";
import NotificationIcon from "./NotificationIcon";

export default function User(props) {
    return (
        <div className={`
            bg-white rounded-xl w-[12.85rem] h-[3.2rem]
            pl-[1.15rem] pr-5
            flex items-center justify-between
        `}>
            <NotificationIcon />
            <img src='https://stomatologiapiastowska.pl/wp-content/uploads/2019/03/person-icon-png-7.png' width={33} />
            <p className="text-xs text-dark-gray-text">Olá, Maria</p>
            <Arrow />
        </div>
    )
}