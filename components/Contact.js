import Link from 'next/link'
import React from 'react'

function Contact() {
    return (
        <div id='contact' className='contact-main mb-[100px]'>
            <div className="flex justify-center">
                <h1 className='text-5xl title-effect md:text-8xl font-extrabold'>Stats & Socials</h1>
            </div>

            <div className='md:flex justify-center mb-10'>
                <div className="contact-content relative sm:gap-9 grid sm:grid-cols-2 sm:justify-center p-2 mx-5 mt-10 md:w-[80%] divide-y sm:divide-y-0 sm:divide-x divide-white divide-opacity-10">
                    <div className="github-stats relative flex-row p-4 space-y-4 z-10">
                        <h1 className='text-xl font-medium'>Kartik Khorwal's Github Stats</h1>
                        <div className="github-details grid grid-cols-2">
                            <p>Total starts earned</p>
                            <p>53.4k</p>

                            <p>Total commits</p>
                            <p>164</p>

                            <p>Total PR's</p>
                            <p>581</p>

                            <p>Total issues</p>
                            <p>134</p>

                            <p>Contributions</p>
                            <p>7</p>

                        </div>
                        <div className='github-rating flex justify-center'>
                            <Link href='' className='py-3 z-10 cursor-pointer'>A++</Link>
                        </div>
                    </div>
                    <div className="social-media flex-row p-4 space-y-4 justify-between z-10">
                        <h1 className='text-xl font-medium'>Social Media</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            <Link className='social-link border border-white rounded-md px-3 py-2 cursor-pointer' href="/">Github</Link>
                            <Link className='social-link border border-white rounded-md px-3 py-2 cursor-pointer' href="/">Instagram</Link>
                            <Link className='social-link border border-white rounded-md px-3 py-2 cursor-pointer' href="/">Twitter</Link>
                            <Link className='social-link border border-white rounded-md px-3 py-2 cursor-pointer' href="/">LinkedIn</Link>
                        </div>
                        <div className='github-rating flex justify-center'>
                            <Link href='' className='py-3 z-10 cursor-pointer'>Send Mail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact