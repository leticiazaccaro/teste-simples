import MenuIcon from "./MenuIcon";
import User from "./User";

export default function Header(props) {
    return (
        <div className={`
            flex justify-between items-center
        `}>
            <MenuIcon />
            <User />
        </div>
    )
}