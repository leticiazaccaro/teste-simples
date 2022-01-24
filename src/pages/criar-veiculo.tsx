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
import { useState } from "react";

export default function CreateVehicle(props) {

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

    const repository: VehicleRepository = new VehicleCollection()

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
            'Ativo'
        )
        await repository.save(newVehicle)
    }

    return (
        <div className={`
            h-screen flex
        `}>
            <SideMenu />
            <Container>
                <BreadcrumbEdit page={"Cadastro de veículos"} />
                <VehicleDetails
                    title='Cadastro de veículo'
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
                <RegisterOptions confirm={() => registerVehicle()} label="Cadastrar" />
            </Container>
        </div>
    )
}
