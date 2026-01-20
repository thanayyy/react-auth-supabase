import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <form className='max-w-md m-auto pt-24'>
            <h2 className='font-bold pb-2'>Sign Up</h2>
            <p>
                Already have an account? <Link to="/signin">Sign In</Link>
            </p>
            <div className='flex flex-col py-4'>
                <input type="email" className='p-3 mt-4 bg-neutral-950'/>
                <input type="email" className='p-3 mt-4 bg-neutral-950'/>
                <button className='border bg-neutral-500 text-white mt-4 p-3'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default Signup