import { MongoClient } from 'mongodb';


const clientPromise = global.mongoClient || MongoClient.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if (!global.mongoClient) {
  global.mongoClient = clientPromise;
}

export async function GET(req) {
  try {
   
    const selectedDate = req.nextUrl.searchParams.get('date');

  

    if (!process.env.MONGO_URL) {
        throw new Error('MONGODB_URL is not defined');
      }

    if (!selectedDate) {
      return new Response(JSON.stringify({ error: 'Date is required.' }), { status: 400 });
    }

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(selectedDate)) {
      return new Response(JSON.stringify({ error: 'Invalid date format. Please use YYYY-MM-DD.' }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('reservations');


    const reservations = await collection.find({ selectedDate }).toArray();

    const allTimes = [
      '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
      '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM',
    ];

   
    const bookedTimes = reservations.map((reservation) => reservation.time);
    const availableTimes = allTimes.filter((time) => !bookedTimes.includes(time));


    return new Response(JSON.stringify({ availableTimes }), { status: 200 });
  } catch (error) {
    console.error('Error fetching available times:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
