import React from 'react'
import DummyWindow from './sub-components/DummyWindow'

function Hero() {
    return (
        <div>


            <div className='hero-main lg:grid lg:grid-cols-2 space-y-8 lg:space-y-0 p-10 md:space-x-12'>
                {/* developer intro */}
                <div className="hero-left flex-row space-y-8">
                    <h1 className='text-white text-2xl lg:text-3xl lg:font-semibold'>Hi, I am <span className='hero-name text-3xl lg:text-4xl font-semibold lg:font-bold'>Kartik Khorwal,</span> a passionate developer who loves to build stuff.</h1>
                    {/* About */}
                    <div id='about'>
                        <p className='text-xs md:text-base opacity-60'>About Me</p>
                        <p className='opacity-80 md:text-lg'>I have been doing programming from past 3 years starting from building basic html websites to making fully functional web apps. </p>
                    </div>
                    {/* git command */}
                    <div className='hero-git-command px-4 py-3 rounded-xl inline-flex space-x-4 items-center text-xs md:text-xs border border-white border-opacity-40'>
                        {/* command */}
                        <p className='font-mono font-extralight md:text-lg'>~ git hire commit -m “will work on projects that brings impact”</p>

                        {/* copy icon */}
                        <div className="copy-icon cursor-pointer" onClick={() => navigator.clipboard.writeText("~ git hire commit -m “will work on projects that brings impact”")}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.125C0 8.67525 1.17525 7.5 2.625 7.5H4.875C5.49632 7.5 6 8.00368 6 8.625C6 9.24632 5.49632 9.75 4.875 9.75H2.625C2.41789 9.75 2.25 9.91789 2.25 10.125V21.375C2.25 21.5821 2.41789 21.75 2.625 21.75H13.875C14.0821 21.75 14.25 21.5821 14.25 21.375V19.125C14.25 18.5037 14.7537 18 15.375 18C15.9963 18 16.5 18.5037 16.5 19.125V21.375C16.5 22.8247 15.3247 24 13.875 24H2.625C1.17525 24 0 22.8247 0 21.375V10.125Z" fill="url(#paint0_linear_3_149)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2.625C7.5 1.17525 8.67525 0 10.125 0H21.375C22.8247 0 24 1.17525 24 2.625V13.875C24 15.3247 22.8247 16.5 21.375 16.5H10.125C8.67525 16.5 7.5 15.3247 7.5 13.875V2.625ZM10.125 2.25C9.91789 2.25 9.75 2.41789 9.75 2.625V13.875C9.75 14.0821 9.91789 14.25 10.125 14.25H21.375C21.5821 14.25 21.75 14.0821 21.75 13.875V2.625C21.75 2.41789 21.5821 2.25 21.375 2.25H10.125Z" fill="url(#paint1_linear_3_149)" />
                                <defs>
                                    <linearGradient id="paint0_linear_3_149" x1="-1.05705e-07" y1="12.1481" x2="24" y2="12.1481" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#92E627" />
                                        <stop offset="1" stop-color="#0AC8B1" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_3_149" x1="-1.05705e-07" y1="12.1481" x2="24" y2="12.1481" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#92E627" />
                                        <stop offset="1" stop-color="#0AC8B1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* two windows */}
                <div className="hero-right flex justify-center relative">
                    {/* window-1 */}
                    <div className="hero-win-1 h-[200px] w-[300px] md:h-[300px] md:w-[400px]">
                        {/* window action buttons */}
                        <div className="win-2-btns flex space-x-2 p-3">
                            <div className='h-3 w-3 bg-[#D9D9D9] opacity-20 rounded-full'></div>
                            <div className='h-3 w-3 bg-[#D9D9D9] opacity-20 rounded-full'></div>
                            <div className='h-3 w-3 bg-[#D9D9D9] opacity-20 rounded-full'></div>
                        </div>

                        {/* window dummy column */}
                        <DummyWindow />
                    </div>

                    {/* window-2 */}
                    <div className="hero-win-2 absolute h-[180px] w-[250px] md:h-[250px] md:w-[300px]">
                        {/* <p className='hero-win-run absolute right-1/2 bottom-[-10px]'>Run</p> */}
                        {/* window dummy 2 */}
                        <div className="win-2-btns flex space-x-2 p-3">
                            <div className='h-3 w-3 bg-[#D9D9D9] opacity-20 rounded-full'></div>
                            <div className='h-3 w-3 bg-[#D9D9D9] opacity-20 rounded-full'></div>
                            <div className='h-3 w-3 bg-[#D9D9D9] opacity-20 rounded-full'></div>
                        </div>

                        <div className='p-3 flex-row space-y-4'>
                            <div className='flex space-x-4'>
                                <div className="win-box h-6 w-6 bg-white rounded-md opacity-20"></div>
                                <div className="win-box h-6 w-6 bg-white rounded-md opacity-10"></div>
                                <div className="win-box h-6 w-6 bg-white rounded-md opacity-20"></div>
                                <div className="win-box h-6 w-6 bg-white rounded-md opacity-20"></div>
                            </div>
                            <div className='flex space-x-4'>
                                <div className="win-box h-6 w-6 bg-white rounded-md opacity-10"></div>
                                <div className="win-box h-6 w-6 bg-white rounded-md opacity-20"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='light-line-parent'>
                <div className='light-line bg-white'></div>
            </div>
        </div>
    )
}

export default Hero