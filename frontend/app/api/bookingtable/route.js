import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function POST(request) {
    try {
        let data = await request.json();

        const selectedDate = new Date(data.date);
        const currentDate = new Date();

        if (selectedDate <= currentDate) {
            return NextResponse.json({
                success: false,
                error: "The selected date must be greater than the current date.",
            }, { status: 400 });
        }

        const phoneNumber = data.contact;

        if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
            return NextResponse.json({
                success: false,
                error: "Phone number must be exactly 10 digits and contain only numbers.",
            }, { status: 400 });
        }
        

        const name = data.name;
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            return NextResponse.json({
                success: false,
                error: "Name should not contain special characters or numbers.",
            }, { status: 400 });
        }

        const guests = data.guests;
        if (guests < 1) {
            return NextResponse.json({
                success: false,
                error: "Number of guests must be at least 1.",
            }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db();
        const collection = db.collection("reservations");

        const existingReservation = await collection.findOne({
            date: data.date,
            time: data.time
        });

        if (existingReservation) {
            return NextResponse.json({
                success: false,
                error: "This time slot is already booked.",
            }, { status: 409 }); // Conflict - time slot already booked
        }

        const result = await collection.insertOne(data);

        console.log("Data inserted:", result);

        return NextResponse.json({
            success: true,
            message: "Table booked successfully.",
            data: result,
        });

    } catch (error) {
        console.error("Error processing the request:", error);
        return NextResponse.json({
            success: false,
            message: "An error occurred during processing.",
            error: error.message,
        }, { status: 500 });
    }
}
