import { Button } from "antd";
import { useRouter }  from 'next/router';

interface RegisterOptionsProps {
    label: string
    confirm?: () => void
}

export default function RegisterOptions(props: RegisterOptionsProps) {

    const router = useRouter()

    const back = () => {
        router.push('/')
    }

    return (
        <div className={`
            flex items-center justify-center
            m-14
        `}>
            <Button type="default" className="m-2" onClick={back}>Cancelar</Button>
            <Button type="primary" onClick={props.confirm}>{props.label}</Button>
        </div>
    )
}
