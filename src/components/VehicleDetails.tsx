import Label from './Label';
import Input from './Input'
import Select from './Select'
import Title from './Title';

interface VehicleDetailsProps {
    vehicle: string
    setVehicle: any
    brand: string
    setBrand: any
    plate: string
    setPlate: any
    consumption: string
    setConsumption: any
    title: string
}

export default function VehicleDetails(props: VehicleDetailsProps) {

    const brands = [{
        label: 'Fiat',
        value: 'Fiat'
    }, {
        label: 'Ford',
        value: 'Ford'
    }, {
        label: 'Chevrolet',
        value: 'Chevrolet'
    }]

    return (
        <div className={`
            bg-white rounded-[1.3rem] w-full h-[11.5rem]
            py-8 pl-8 mt-8 shadow-3xl
        `}>
            <Title>{props.title}</Title>
            <div className='flex items-center justify-start mt-8'>
                <div className='mr-[0.95rem]'>
                    <Label>Veículo</Label>
                    <Input
                        width={179}
                        value={props.vehicle}
                        onChange={props.setVehicle}
                    />
                </div>
                <div className='mr-[0.95rem]'>
                    <Label>Marca</Label>
                    <Select
                        options={brands}
                        width={177}
                        value={props.brand}
                        onChange={props.setBrand}
                    />
                </div>
                <div className='mr-[0.95rem]'>
                    <Label>Placa</Label>
                    <Input
                        width={179}
                        value={props.plate}
                        onChange={props.setPlate}
                    />
                </div>
                <div>
                    <Label>Consumo médio (km/L)</Label>
                    <Input
                        width={179}
                        value={props.consumption}
                        onChange={props.setConsumption}
                    />
                </div>
            </div>
        </div>
    )
}