import Booking from "../models/Booking";

async function UpdateOrCreateBookingsSeeder() {
  const bookings = [
    {
      userId: 1,
      parkingSpotId: 1,
      startedAt: "2024-07-01 09:00:00.000+03",
      endedAt: "2024-07-01 15:30:00.000+03",
    },
    {
      userId: 1,
      parkingSpotId: 2,
      startedAt: "2024-07-02 09:00:00.000+03",
      endedAt: "2024-07-02 15:30:00.000+03",
    },
    {
      userId: 2,
      parkingSpotId: 5,
      startedAt: "2024-07-02 09:00:00.000+03",
      endedAt: "2024-07-02 15:30:00.000+03",
    },
    {
      userId: 2,
      parkingSpotId: 6,
      startedAt: "2024-07-02 09:00:00.000+03",
      endedAt: "2024-07-02 15:30:00.000+03",
    },
    {
      userId: 2,
      parkingSpotId: 8,
      startedAt: "2024-07-03 09:00:00.000+03",
      endedAt: "2024-07-03 15:30:00.000+03",
    },
  ];

  for (const booking of bookings) {
    await Booking.upsert(booking, {
      fields: ["userId", "parkingSpotId"],
    });
  }
}

export default UpdateOrCreateBookingsSeeder;
