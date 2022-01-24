import Vehicle from "./Vehicle";

export default interface VehicleRepository {
    save(vehicle: Vehicle): Promise<Vehicle>
    listAll(): Promise<Vehicle[]>
}