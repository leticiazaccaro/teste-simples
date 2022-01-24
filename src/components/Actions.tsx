import { useRouter } from 'next/router';
import EditIcon from './EditIcon';
import SeeIcon from './SeeIcon';

interface ActionsProps {
    id: string
}

export default function Actions(props: ActionsProps) {

    const router = useRouter()

    function editVehicle() {
        router.push(`/editar-veiculo/${props.id}`)
    }

    return (
        <div className={`
            bg-white rounded-xl w-36
            mt-2 shadow-5xl pb-5
            absolute right-11
            text-left pl-4 z-10
        `}>
            <p className="text-xs flex text-dark-gray-text pt-5"><SeeIcon /> Ver detalhes</p>
            <p className="text-xs flex text-dark-gray-text cursor-pointer pt-5" onClick={() => editVehicle()}>
                <EditIcon /> Editar</p>
        </div>
    )
}