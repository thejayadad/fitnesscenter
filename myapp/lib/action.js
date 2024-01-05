'use server'
import { revalidatePath } from "next/cache";
import db from "./db";
import Workout from "@/models/Workout";
import { redirect } from "next/navigation";
import getServerUser from "./getServerUser";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export const addWorkout = async (formData) => {
    const userId = await getServerUser(authOptions)
    console.log("Action UserID " + userId)
    const userEmail = userId.email
    console.log("UserId Email " + userEmail)
    const { title, location,duration, distance, intensity, notes } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newWorkout = new Workout({
            title,
            location,duration, distance, intensity, notes,
            creator:  userId.email 
        })
        await newWorkout.save()
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create workout! " + error);
    }
        revalidatePath("/");
        redirect("/");

}