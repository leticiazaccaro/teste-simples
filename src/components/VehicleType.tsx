import Label from './Label';
import Input from './Input'
import Select from './Select'
import Title from './Title';

interface VehicleTypeProps {
    type: string
    setType: any
    volume: string
    setVolume: any
    weight: string
    setWeight: any
    size: string
    setSize: any
}

export default function VehicleType(props: VehicleTypeProps) {

    const types = [{
        label: '1/4',
        value: '1/4'
    }, {
        label: '2/4',
        value: '2/4'
    }, {
        label: '3/4',
        value: '3/4'
    }]

    return (
        <div className={`
            bg-white rounded-[1.3rem] w-[55%] h-[11.5rem]
            py-8 pl-8 mt-8 shadow-3xl mr-[1.15rem]
        `}>
            <Title>Tipo de veículo</Title>
            <div className='flex items-center justify-start mt-8'>
                <div className='mr-[0.95rem]'>
                    <Label>Tipo de veículo</Label>
                    <Select
                        options={types}
                        width={146}
                        onChange={props.setType}
                        value={props.type}
                    />
                </div>
                <div className='mr-[0.95rem]'>
                    <Label>Vol máx</Label>
                    <Input
                        width={81}
                        value={props.volume}
                        onChange={props.setVolume}
                        border='none'
                        background='#FCFCFC'
                    />
                </div>
                <div className='mr-[0.95rem]'>
                    <Label>Peso máx</Label>
                    <Input
                        width={81}
                        value={props.weight}
                        onChange={props.setWeight}
                        border='none'
                        background='#FCFCFC'
                    />
                </div>
                <div>
                    <Label>Tamanho</Label>
                    <Input
                        width={81}
                        value={props.size}
                        onChange={props.setSize}
                        border='none'
                        background='#FCFCFC'
                    />
                </div>
            </div>
        </div>
    )
}