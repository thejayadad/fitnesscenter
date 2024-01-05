import Modals from '@/components/Modal';
import CreateWorkoutForm from '@/components/forms/CreateWorkoutForm';
import getServerUser from '@/lib/getServerUser';
import React from 'react'
import {FiPlusCircle} from "react-icons/fi"

const Dashboard = async ({params}) => {
    const {email} = params;
    const decodedEmail = decodeURIComponent(email);
    const username = decodedEmail.split('@')[0];
    const sessionEmail = getServerUser()
    console.log("SessionEmail " + sessionEmail.avatar)

  return (
    <section className='px-4 py-8 text-grey'>
        <div className='max-w-screen-xl mx-auto flex flex-col h-screen'>
        <div className='flex justify-between gap-8 mx-auto max-w-screen-md'>
            <h2 className='cursor-pointer'>Hi {username}</h2>
            <Modals
                opening={<div className='flex items-center'>
                <FiPlusCircle className='text-primary text-2xl' /> <span>Workout</span>
                </div>}
                title={'Title'}
                children={<CreateWorkoutForm />}
            />
        </div>
        </div>        
    </section>
  )
}

export default Dashboard