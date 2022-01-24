import TableContent from "./TableContent";
import TableHeader from "./TableHeader";
import Vehicle from "src/Entities/Vehicle";
import VehicleRepository from "src/Entities/VehicleRepository";
import VehicleCollection from "src/backend/db/VehicleCollection";
import { useEffect, useState } from "react";

export default function CardTable(props) {

    const repository: VehicleRepository = new VehicleCollection()

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    useEffect(listAll, [])

    function listAll() {
        repository.listAll().then(vehicles => {
            setVehicles(vehicles)
        })
    }

    return (
        <div className={`
            bg-white rounded-t-xl w-full h-fit
            pt-[0.85rem] mt-[1.38rem] shadow-5xl pb-5
        `}>
            <TableHeader />
            <TableContent vehicles={vehicles} />
        </div>
    )
}