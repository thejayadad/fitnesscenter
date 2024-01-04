import getServerUser from '@/lib/getServerUser';
import React from 'react'

const Dashboard = async ({params}) => {
    const {email} = params;
    const decodedEmail = decodeURIComponent(email);
    const username = decodedEmail.split('@')[0];
    const sessionEmail = getServerUser()
    console.log("SessionEmail " + sessionEmail.avatar)

  return (
    <section className='px-4 py-8'>
        <div className='max-w-screen-xl mx-auto flex flex-col h-screen'>
        <div className='flex justify-between gap-4 mx-auto max-w-screen-md'>
            <h2>Hi {username}</h2>
            <span>New Workout</span>
        </div>
        </div>        
    </section>
  )
}

export default Dashboard