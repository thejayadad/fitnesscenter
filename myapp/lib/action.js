import { revalidatePath } from "next/cache";
import db from "./db";
import Workout from "@/models/Workout";
import { redirect } from "next/navigation";


export const addWorkout = async (formData) => {
    const userId = await getServerUser(authOptions)
    console.log("Action UserID " + userId)
    console.log("UserId Email " + userId.email)
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