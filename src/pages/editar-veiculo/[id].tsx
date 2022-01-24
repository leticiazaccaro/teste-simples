import SideMenu from "src/components/SideMenu";
import Container from "src/components/Container";
import BreadcrumbEdit from "src/components/BreadcrumbEdit";
import VehicleDetails from "src/components/VehicleDetails";
import VehicleType from "src/components/VehicleType";
import WorkingTime from "src/components/WorkingTime";
import RegisterOptions from "src/components/RegisterOptions";
import Vehicle from "src/Entities/Vehicle";
import VehicleRepository from "src/Entities/VehicleRepository";
import VehicleCollection from "src/backend/db/VehicleCollection";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function UpdateVehicle(props) {

    const router = useRouter()
    const [vehicle, setVehicle] = useState('')
    const [brand, setBrand] = useState('')
    const [plate, setPlate] = useState('')
    const [consumption, setConsumption] = useState('')
    const [type, setType] = useState('')
    const [volume, setVolume] = useState('')
    const [weight, setWeight] = useState('')
    const [size, setSize] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(() => {
        listAll()
    }, [router])

    useEffect(() => {
        if (vehicles.length > 0) {
            setVehicle(vehicles[0]?.vehicle)
            setBrand(vehicles[0]?.brand)
            setPlate(vehicles[0]?.plate)
            setConsumption(vehicles[0]?.consumption)
            setType(vehicles[0]?.type)
            setVolume(vehicles[0]?.volume)
            setWeight(vehicles[0]?.weight)
            setSize(vehicles[0]?.size)
            setStart(vehicles[0]?.start)
            setEnd(vehicles[0]?.end)
        }
    }, [vehicles])

    const repository: VehicleRepository = new VehicleCollection()

    function listAll() {
        repository.listAll().then(vehicles => {
            const vehicle = vehicles.filter((item) => {
                return item.id === router.query.id
            })
            setVehicles(vehicle)
        })
    }

    async function registerVehicle() {
        const newVehicle = new Vehicle(
            vehicle,
            brand,
            plate,
            consumption,
            type,
            volume,
            weight,
            size,
            start,
            end,
            'Ativo',
            vehicles[0]?.id
        )
        await repository.save(newVehicle)
    }

    return (
        <div className={`
            h-screen flex
        `}>
            <SideMenu />
            <Container>
                <BreadcrumbEdit page={"Edição de veículos"} />
                <VehicleDetails
                    title='Edição de veículo'
                    vehicle={vehicle}
                    setVehicle={setVehicle}
                    brand={brand}
                    setBrand={setBrand}
                    plate={plate}
                    setPlate={setPlate}
                    consumption={consumption}
                    setConsumption={setConsumption}
                />
                <div className="flex items-center mt-4">
                    <VehicleType
                        type={type}
                        setType={setType}
                        volume={volume}
                        setVolume={setVolume}
                        weight={weight}
                        setWeight={setWeight}
                        size={size}
                        setSize={setSize}
                    />
                    <WorkingTime
                        start={start}
                        setStart={setStart}
                        end={end}
                        setEnd={setEnd}
                    />
                </div>
                <RegisterOptions confirm={() => registerVehicle()} label="Salvar" />
            </Container>
        </div>
    )
}
