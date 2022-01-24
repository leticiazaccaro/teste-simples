import Vehicle from "src/Entities/Vehicle";
import VehicleRepository from "src/Entities/VehicleRepository";
import firebase from "../config";

export default class VehicleCollection implements VehicleRepository {

    #converter = {
        toFirestore(vehicle: Vehicle) {
            return {
                vehicle: vehicle.vehicle,
                brand: vehicle.brand,
                plate: vehicle.plate,
                consumption: vehicle.consumption,
                type: vehicle.type,
                volume: vehicle.volume,
                weight: vehicle.weight,
                size: vehicle.size,
                start: vehicle.start,
                end: vehicle.end,
                status: vehicle.status
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Vehicle {
            const data = snapshot.data(options)
            return new Vehicle(
                data.vehicle,
                data.brand,
                data.plate,
                data.consumption,
                data.type,
                data.volume,
                data.weight,
                data.size,
                data.start,
                data.end,
                data.status,
                snapshot.id
            )
        }
    }


    async save(vehicle: Vehicle): Promise<Vehicle> {
        if (vehicle?.id) {
            await this.collection().doc(vehicle.id).set(vehicle)
            return vehicle
        } else {
            const docRef = await this.collection().add(vehicle)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async listAll(): Promise<Vehicle[]> {
        const query = await this.collection().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private collection() {
        return firebase
            .firestore().collection('vehicles')
            .withConverter(this.#converter)
    }
}