import ParkingSpot from "../models/ParkingSpot";

async function UpdateOrCreateParkingSpotsSeeder() {
  const parkingSpots = [
    { name: "Parking Spot 1" },
    { name: "Parking Spot 2" },
    { name: "Parking Spot 3" },
    { name: "Parking Spot 4" },
    { name: "Parking Spot 5" },
    { name: "Parking Spot 6" },
    { name: "Parking Spot 7" },
    { name: "Parking Spot 8" },
    { name: "Parking Spot 9" },
    { name: "Parking Spot 10" },
  ];

  for (const parkingSpot of parkingSpots) {
    await ParkingSpot.upsert(parkingSpot);
  }
}

export default UpdateOrCreateParkingSpotsSeeder;
