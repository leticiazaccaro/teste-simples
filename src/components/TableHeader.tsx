import { Button } from "antd";
import Label from "./Label";
import Title from "./Title";
import Select from "./Select"
import DeleteIcon from "./DeleteIcon";
import ShareIcon from "./ShareIcon";
import { useRouter }  from 'next/router';

export default function TableHeader(props) {

    const router = useRouter()

    const options = [{
        label: 'Todos',
        value: 'Todos'
    }, {
        label: 'Ativo',
        value: 'Ativo'
    }]

    const click = () => {
        router.push('/criar-veiculo')
    }

    return (
        <div className={`
            flex items-center justify-between 
            mt-5 ml-8 mr-[1.88rem] w-[95%] mb-8
        `}>
            <div className="flex items-center">
                <Title>Lista de veículos</Title>
                <Button type="primary" className={`
                    ml-4 py-[0.88rem] pl-5 pr-8
                `}
                onClick={click}
                >+ Criar veículo</Button>
            </div>
            <div className="flex items-center">
                <Label style={{ marginRight: 8, marginBottom: 0 }}>Alterar status:</Label>
                <Select options={options} value="Todos" />
                <DeleteIcon />
                <ShareIcon /> 
            </div>
        </div>
    )
}