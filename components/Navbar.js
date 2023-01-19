import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='navbar-main p-3 md:p-5'>
            <div className='navbar sm:h-10 flex-row space-y-4 sm:space-y-0 sm:flex justify-between px-5  py-2 rounded-md items-center border border-white hover:border-0 border-opacity-25'>
                <div className="logo z-10 flex justify-between">
                    <Link href='/' className='text-lg font-semibold z-10'>Kartik</Link>
                    <svg onClick={handleClick} className='sm:hidden z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19L5 19C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17L19 17C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18ZM20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7L5 7C4.73478 7 4.48043 6.89465 4.29289 6.70711C4.10535 6.51957 4 6.26522 4 6C4 5.73478 4.10535 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5L19 5C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6ZM19 13C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11L11 11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13L19 13Z" fill="white" />
                    </svg>
                </div>
                <div className="nav-links sm:flex space-x-6 z-10 hidden">
                    <Link className='link' href="/">Home</Link>
                    <Link className='link' href="#about">About</Link>
                    <Link className='link' href="#project">Projects</Link>
                    <Link className='link' href="#contact">Contact</Link>
                </div>

                {/* mobile navbar */}
                {isOpen && (
                    <div className='flex-row space-y-2 sm:hidden'>
                        <div>
                            <Link className='link' href="/">Home</Link>
                        </div>
                        <div>
                            <Link className='link' href="#about">About</Link>
                        </div>
                        <div>
                            <Link className='link' href="#project">Projects</Link>
                        </div>
                        <div>
                            <Link className='link' href="#contact">Contact</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar