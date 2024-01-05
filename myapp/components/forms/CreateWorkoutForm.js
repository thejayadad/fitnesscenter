import { addWorkout } from '@/lib/action'
import React from 'react'

const CreateWorkoutForm = () => {
  return (
    <div>
        <form
        action={addWorkout}
        className='flex flex-col'
        >
            <input
                name='name'
                placeholder='Name...'
            />
            <input
                name='location'
                placeholder='Location...'
            />
            <input
                name='duration'
                placeholder='Duration...'
            />
            <input
                name='distance'
                placeholder='Distance...'
            />
            <input
                name='intensity'
                placeholder='Intensity...'
            />
            <input
                name='notes'
                placeholder='Notes...'
            />
            <button type='submit'>Create Workout</button>
        </form>
    </div>
  )
}

export default CreateWorkoutForm