import Logo from "./Logo";
import Enterprise from "./Enterprise"
import SimpleMenuItem from "./SimpleMenuItem"
import OptionsMenuItem from './OptionsMenuItem'
import HomeIcon from "./HomeIcon"
import OrdersIcon from "./OrdersIcon"
import RoutesIcon from "./RoutesIcon"
import MonitoringIcon from "./MonitoringIcon"
import FleetIcon from "./FleetIcon"
import SettingsIcon from "./SettingsIcon"
import SubItems from "./SubItems"
import { useRouter }  from 'next/router';

export default function SideMenu(props) {

    const router = useRouter()

    const home = () => {
        router.push('/')
    }

    return (
        <div>
            <div className={`
            flex flex-col items-center w-[15rem] h-screen
            bg-white
        `}>
                <Logo />
                <Enterprise />
                <SimpleMenuItem icon={<HomeIcon />} text="Home" onClick={home} />
                <OptionsMenuItem icon={<OrdersIcon />} text="Pedidos" />
                <OptionsMenuItem icon={<RoutesIcon />} text="Rotas" />
                <SimpleMenuItem icon={<MonitoringIcon />} text="Monitoriamento" />
                <OptionsMenuItem icon={<FleetIcon />} text="Frota" />
                <SubItems />
                <OptionsMenuItem icon={<SettingsIcon />} text="Configurações" />
            </div>
        </div>
    )
}