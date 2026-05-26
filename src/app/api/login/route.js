import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../../../models/User";
import { connectDB } from "../../../lib/db";

export async function POST(req) {
    try {
        await connectDB();

        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { message: "All fields required" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { message: "User not found" },
                { status: 400 }
            );
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json(
                { message: "Invalid password" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                message: "Login successful",
                user: {
                    name: user.name,
                    email: user.email
                }
            },
            { status: 200 }
        );

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}

