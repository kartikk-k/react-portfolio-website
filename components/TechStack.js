import React from 'react'

function TechStack() {
    return (
        <div className='techstack-main flex-row sm:flex mt-14 space-x-4 space-y-4 md:space-y-0 w-[60%] sm:w-[100%] md:w-[80%] '>
            {/* tech & lang column 1 */}
            <div className='inline-block mx-2 md:ml-32 relative'>
                <div className="tech-col-1 px-8 py-5 rounded-md flex-row space-y-8">
                    <h1 className='tech-col-1-heading text-xl text-black px-3 py-2 rounded-md'>Languages</h1>
                    {/* languages list */}
                    <div className='languages-list flex-row space-y-4'>
                        {/* language-1 */}
                        <div className='language-item flex justify-start items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-md'>
                            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9999 28.2751C26.3609 28.2751 28.2749 26.3611 28.2749 24.0001C28.2749 21.6391 26.3609 19.7251 23.9999 19.7251C21.6388 19.7251 19.7249 21.6391 19.7249 24.0001C19.7249 26.3611 21.6388 28.2751 23.9999 28.2751Z" fill="#61DAFB" />
                                <path d="M40.2374 16.9501C39.4124 16.6501 38.5499 16.3501 37.6499 16.0876C37.8749 15.1876 38.0624 14.2876 38.2124 13.4251C38.9999 8.4751 38.1374 4.9876 35.7374 3.6376C35.0249 3.2251 34.2374 3.0376 33.3374 3.0376C30.7124 3.0376 27.3749 4.9876 23.9999 8.2501C20.6249 4.9876 17.2874 3.0376 14.6624 3.0376C13.7624 3.0376 12.9749 3.2251 12.2624 3.6376C9.8624 5.0251 8.9999 8.5126 9.7874 13.4251C9.9374 14.2876 10.1249 15.1876 10.3499 16.0876C9.4499 16.3501 8.5874 16.6126 7.7624 16.9501C3.0749 18.7501 0.524902 21.2251 0.524902 24.0001C0.524902 26.7751 3.1124 29.2501 7.7624 31.0501C8.5874 31.3501 9.4499 31.6501 10.3499 31.9126C10.1249 32.8126 9.9374 33.7126 9.7874 34.5751C8.9999 39.5251 9.8624 43.0126 12.2624 44.3626C12.9749 44.7751 13.7624 44.9626 14.6624 44.9626C17.3249 44.9626 20.6624 43.0126 23.9999 39.7501C27.3749 43.0126 30.7124 44.9626 33.3374 44.9626C34.2374 44.9626 35.0249 44.7751 35.7374 44.3626C38.1374 42.9751 38.9999 39.4876 38.2124 34.5751C38.0624 33.7126 37.8749 32.8126 37.6499 31.9126C38.5499 31.6501 39.4124 31.3876 40.2374 31.0501C44.9249 29.2501 47.4749 26.7751 47.4749 24.0001C47.4749 21.2251 44.9249 18.7501 40.2374 16.9501ZM34.6874 5.5126C36.2249 6.4126 36.7499 9.1876 36.1124 13.1251C35.9999 13.9126 35.8124 14.7376 35.5874 15.6001C33.6374 15.1501 31.5749 14.8501 29.3999 14.6626C28.1249 12.8626 26.8124 11.2501 25.4999 9.7876C28.2749 7.0501 31.0874 5.1751 33.3749 5.1751C33.8624 5.1751 34.3124 5.2876 34.6874 5.5126ZM30.4874 27.7501C29.8124 28.9501 29.0249 30.1501 28.1999 31.3501C26.8124 31.4626 25.4249 31.5001 23.9999 31.5001C22.5374 31.5001 21.1499 31.4626 19.7999 31.3501C18.9749 30.1501 18.2249 28.9501 17.5499 27.7501C16.8374 26.5126 16.1624 25.2376 15.5624 24.0001C16.1624 22.7626 16.8374 21.4876 17.5499 20.2501C18.2249 19.0501 19.0124 17.8501 19.8374 16.6501C21.2249 16.5376 22.6124 16.5001 24.0374 16.5001C25.4999 16.5001 26.8874 16.5376 28.2374 16.6501C29.0624 17.8501 29.8124 19.0501 30.4874 20.2501C31.1999 21.4876 31.8749 22.7626 32.4749 24.0001C31.8374 25.2376 31.1999 26.4751 30.4874 27.7501ZM33.5999 26.5126C34.1624 27.8251 34.6124 29.1001 35.0249 30.3751C33.7499 30.6751 32.3999 30.9001 30.9749 31.0876C31.4249 30.3751 31.9124 29.6251 32.3249 28.8376C32.7749 28.0501 33.1874 27.2626 33.5999 26.5126ZM23.9999 36.6751C23.0999 35.7001 22.2374 34.6501 21.4124 33.5626C22.2749 33.6001 23.1374 33.6376 23.9999 33.6376C24.8624 33.6376 25.7249 33.6001 26.5874 33.5626C25.7624 34.6501 24.8999 35.7001 23.9999 36.6751ZM17.0249 31.0501C15.5999 30.8626 14.2499 30.6376 12.9749 30.3376C13.3874 29.1001 13.8374 27.7876 14.3999 26.4751C14.8124 27.2251 15.2249 28.0126 15.6749 28.7626C16.1249 29.5876 16.5749 30.3001 17.0249 31.0501ZM14.3999 21.4876C13.8374 20.1751 13.3874 18.9001 12.9749 17.6251C14.2499 17.3251 15.5999 17.1001 17.0249 16.9126C16.5749 17.6251 16.0874 18.3751 15.6749 19.1626C15.2249 19.9501 14.8124 20.7376 14.3999 21.4876ZM23.9999 11.3251C24.8999 12.3001 25.7624 13.3501 26.5874 14.4376C25.7249 14.4001 24.8624 14.3626 23.9999 14.3626C23.1374 14.3626 22.2749 14.4001 21.4124 14.4376C22.2374 13.3501 23.0999 12.3001 23.9999 11.3251ZM32.3249 19.2001L30.9749 16.9501C32.3999 17.1376 33.7499 17.3626 35.0249 17.6626C34.6124 18.9001 34.1624 20.2126 33.5999 21.5251C33.1874 20.7376 32.7749 19.9501 32.3249 19.2001ZM11.8874 13.1251C11.2499 9.1876 11.7749 6.4126 13.3124 5.5126C13.6874 5.2876 14.1374 5.1751 14.6249 5.1751C16.8749 5.1751 19.6874 7.0126 22.4999 9.7876C21.1874 11.2126 19.8749 12.8626 18.5999 14.6626C16.4249 14.8501 14.3624 15.1876 12.4124 15.6001C12.1874 14.7376 12.0374 13.9126 11.8874 13.1251ZM2.6249 24.0001C2.6249 22.2376 4.7624 20.3626 8.5124 18.9751C9.2624 18.6751 10.0874 18.4126 10.9124 18.1876C11.5124 20.0626 12.2624 22.0501 13.1624 24.0376C12.2624 26.0251 11.4749 27.9751 10.9124 29.8501C5.7374 28.3501 2.6249 26.1001 2.6249 24.0001ZM13.3124 42.4876C11.7749 41.5876 11.2499 38.8126 11.8874 34.8751C11.9999 34.0876 12.1874 33.2626 12.4124 32.4001C14.3624 32.8501 16.4249 33.1501 18.5999 33.3376C19.8749 35.1376 21.1874 36.7501 22.4999 38.2126C19.7249 40.9501 16.9124 42.8251 14.6249 42.8251C14.1374 42.8251 13.6874 42.7126 13.3124 42.4876ZM36.1124 34.8751C36.7499 38.8126 36.2249 41.5876 34.6874 42.4876C34.3124 42.7126 33.8624 42.8251 33.3749 42.8251C31.1249 42.8251 28.3124 40.9876 25.4999 38.2126C26.8124 36.7876 28.1249 35.1376 29.3999 33.3376C31.5749 33.1501 33.6374 32.8126 35.5874 32.4001C35.8124 33.2626 35.9624 34.0876 36.1124 34.8751ZM39.4874 29.0251C38.7374 29.3251 37.9124 29.5876 37.0874 29.8126C36.4874 27.9376 35.7374 25.9501 34.8374 23.9626C35.7374 21.9751 36.5249 20.0251 37.0874 18.1501C42.2624 19.6501 45.3749 21.9001 45.3749 24.0001C45.3749 25.7626 43.1999 27.6376 39.4874 29.0251Z" fill="#61DAFB" />
                            </svg>

                            <p className='text-lg font-light'>React</p>
                        </div>
                        {/* language-2 */}
                        <div className='language-item flex justify-start items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-md'>
                            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7717 4.59307C22.1884 4.60057 20.6772 4.7352 19.3467 4.9707C15.428 5.66295 14.717 7.11195 14.717 9.78457V13.3137H23.9768V14.4901H11.2415C8.55045 14.4901 6.19395 16.1074 5.4567 19.1854C4.6062 22.7123 4.5687 24.9136 5.4567 28.5964C6.11483 31.3381 7.68683 33.2911 10.3782 33.2911H13.5623V29.0603C13.5623 26.0037 16.2065 23.3078 19.3471 23.3078H28.5965C31.1712 23.3078 33.2262 21.1876 33.2262 18.6023V9.78495C33.2262 7.27507 31.109 5.38995 28.5965 4.97107C27.005 4.70632 25.3546 4.58595 23.7717 4.59307ZM18.764 7.43145C19.7202 7.43145 20.5017 8.22532 20.5017 9.20182C20.5017 10.1742 19.7206 10.9606 18.764 10.9606C17.804 10.9606 17.0266 10.1742 17.0266 9.20182C17.0262 8.22532 17.804 7.43145 18.764 7.43145Z" fill="url(#paint0_linear_3_212)" />
                                <path d="M34.3807 14.4901V18.6024C34.3807 21.7899 31.6777 24.473 28.5959 24.473H19.3465C16.813 24.473 14.7168 26.6416 14.7168 29.1789V37.997C14.7168 40.5061 16.8985 41.9825 19.3465 42.7021C22.2775 43.5635 25.0885 43.7195 28.5959 42.7021C30.9269 42.0267 33.2257 40.6685 33.2257 37.997V34.4675H23.9767V33.2907H37.8562C40.5472 33.2907 41.5507 31.4139 42.4867 28.5961C43.4534 25.6955 43.4118 22.9059 42.4867 19.1851C41.8214 16.5057 40.5513 14.4897 37.8562 14.4897H34.3807V14.4901ZM29.1783 36.8202C30.1387 36.8202 30.916 37.6066 30.916 38.5798C30.916 39.5555 30.1383 40.3494 29.1783 40.3494C28.222 40.3494 27.4409 39.5555 27.4409 38.5798C27.4409 37.6066 28.222 36.8202 29.1783 36.8202Z" fill="url(#paint1_linear_3_212)" />
                                <path opacity="0.444" d="M36.491 44.8488C36.491 46.1774 30.935 47.2548 24.0819 47.2548C17.2284 47.2548 11.6724 46.1774 11.6724 44.8488C11.6724 43.5198 17.228 42.4424 24.0819 42.4424C30.935 42.4424 36.491 43.5194 36.491 44.8488Z" fill="url(#paint2_radial_3_212)" />
                                <defs>
                                    <linearGradient id="paint0_linear_3_212" x1="3.8764" y1="5.69656" x2="25.2341" y2="23.9103" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#5A9FD4" />
                                        <stop offset="1" stop-color="#306998" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_3_212" x1="33.2695" y1="35.2323" x2="25.6103" y2="24.4915" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFD43B" />
                                        <stop offset="1" stop-color="#FFE873" />
                                    </linearGradient>
                                    <radialGradient id="paint2_radial_3_212" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.0317 44.7799) rotate(-90) scale(2.40687 10.5802)">
                                        <stop stop-color="#B8B8B8" stop-opacity="0.498" />
                                        <stop offset="1" stop-color="#7F7F7F" stop-opacity="0" />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <p className='text-lg font-light'>Python</p>
                        </div>
                        {/* language-3 */}
                        <div className='language-item flex justify-start items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-md'>
                            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_220)">
                                    <path d="M0.528076 0.528076H47.4721V47.4725H0.528076V0.528076Z" fill="#F0DB4F" />
                                    <path d="M43.6301 36.2761C43.2862 34.1344 41.8897 32.3356 37.7531 30.6582C36.3161 29.9978 34.7141 29.525 34.2367 28.436C34.0672 27.8022 34.0447 27.4452 34.152 27.0616C34.4598 25.8166 35.946 25.4285 37.1238 25.7855C37.8825 26.0397 38.6006 26.6243 39.0337 27.557C41.0595 26.2452 41.0553 26.2538 42.4698 25.3523C41.952 24.5495 41.6756 24.179 41.3366 23.8355C40.1182 22.4746 38.4581 21.7737 35.8031 21.8273L34.4201 22.0062C33.0948 22.3411 31.8318 23.0367 31.0912 23.9693C28.869 26.4908 29.5027 30.9038 32.2068 32.7199C34.8708 34.7194 38.7843 35.1743 39.2842 37.0441C39.7706 39.3331 37.602 40.0741 35.4465 39.8108C33.858 39.4805 32.9745 38.6731 32.0193 37.2049C30.2613 38.2223 30.2613 38.2223 28.4538 39.2618C28.8825 40.1989 29.3328 40.6231 30.0513 41.4349C33.4518 44.8842 41.9613 44.7147 43.4876 39.4939C43.5495 39.3147 43.9605 38.1192 43.6301 36.2761ZM26.0482 22.1037H21.6573L21.6393 33.4557C21.6393 35.8699 21.7642 38.0832 21.3716 38.7616C20.7292 40.0958 19.0646 39.9305 18.306 39.6717C17.5338 39.2922 17.1412 38.7526 16.6863 37.9898C16.5615 37.7708 16.4677 37.6013 16.4362 37.5882L12.8662 39.7745C13.4598 40.9928 14.3343 42.0503 15.4545 42.7373C17.1277 43.7416 19.3766 44.0494 21.7286 43.5095C23.2593 43.0636 24.5801 42.1399 25.2716 40.7341C26.2713 38.8909 26.0568 36.6601 26.0478 34.1926C26.0703 30.167 26.0482 26.1421 26.0482 22.1037Z" fill="#323330" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_220">
                                        <rect width="48" height="48" rx="6" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='text-lg font-light'>Javascript</p>
                        </div>
                    </div>
                </div>
                <div className='tech-lines'>
                    <div className="tech-line-1 absolute"></div>
                </div>
            </div>

            {/* tech & lang cloumn 2 */}
            <div className='inline-block'>
                <div className="tech-col-1 px-8 py-5 rounded-md flex-row space-y-8">
                    <h1 className='tech-col-1-heading text-xl text-black px-3 py-2 rounded-md inline-block'>Technologies</h1>
                    {/* languages list */}
                    <div className='flex space-x-4'>
                        <div>
                            <div className='languages-list flex-row space-y-4'>

                                {/* language-1 */}
                                <div className='language-item flex justify-start items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-md'>
                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.9999 28.2751C26.3609 28.2751 28.2749 26.3611 28.2749 24.0001C28.2749 21.6391 26.3609 19.7251 23.9999 19.7251C21.6388 19.7251 19.7249 21.6391 19.7249 24.0001C19.7249 26.3611 21.6388 28.2751 23.9999 28.2751Z" fill="#61DAFB" />
                                        <path d="M40.2374 16.9501C39.4124 16.6501 38.5499 16.3501 37.6499 16.0876C37.8749 15.1876 38.0624 14.2876 38.2124 13.4251C38.9999 8.4751 38.1374 4.9876 35.7374 3.6376C35.0249 3.2251 34.2374 3.0376 33.3374 3.0376C30.7124 3.0376 27.3749 4.9876 23.9999 8.2501C20.6249 4.9876 17.2874 3.0376 14.6624 3.0376C13.7624 3.0376 12.9749 3.2251 12.2624 3.6376C9.8624 5.0251 8.9999 8.5126 9.7874 13.4251C9.9374 14.2876 10.1249 15.1876 10.3499 16.0876C9.4499 16.3501 8.5874 16.6126 7.7624 16.9501C3.0749 18.7501 0.524902 21.2251 0.524902 24.0001C0.524902 26.7751 3.1124 29.2501 7.7624 31.0501C8.5874 31.3501 9.4499 31.6501 10.3499 31.9126C10.1249 32.8126 9.9374 33.7126 9.7874 34.5751C8.9999 39.5251 9.8624 43.0126 12.2624 44.3626C12.9749 44.7751 13.7624 44.9626 14.6624 44.9626C17.3249 44.9626 20.6624 43.0126 23.9999 39.7501C27.3749 43.0126 30.7124 44.9626 33.3374 44.9626C34.2374 44.9626 35.0249 44.7751 35.7374 44.3626C38.1374 42.9751 38.9999 39.4876 38.2124 34.5751C38.0624 33.7126 37.8749 32.8126 37.6499 31.9126C38.5499 31.6501 39.4124 31.3876 40.2374 31.0501C44.9249 29.2501 47.4749 26.7751 47.4749 24.0001C47.4749 21.2251 44.9249 18.7501 40.2374 16.9501ZM34.6874 5.5126C36.2249 6.4126 36.7499 9.1876 36.1124 13.1251C35.9999 13.9126 35.8124 14.7376 35.5874 15.6001C33.6374 15.1501 31.5749 14.8501 29.3999 14.6626C28.1249 12.8626 26.8124 11.2501 25.4999 9.7876C28.2749 7.0501 31.0874 5.1751 33.3749 5.1751C33.8624 5.1751 34.3124 5.2876 34.6874 5.5126ZM30.4874 27.7501C29.8124 28.9501 29.0249 30.1501 28.1999 31.3501C26.8124 31.4626 25.4249 31.5001 23.9999 31.5001C22.5374 31.5001 21.1499 31.4626 19.7999 31.3501C18.9749 30.1501 18.2249 28.9501 17.5499 27.7501C16.8374 26.5126 16.1624 25.2376 15.5624 24.0001C16.1624 22.7626 16.8374 21.4876 17.5499 20.2501C18.2249 19.0501 19.0124 17.8501 19.8374 16.6501C21.2249 16.5376 22.6124 16.5001 24.0374 16.5001C25.4999 16.5001 26.8874 16.5376 28.2374 16.6501C29.0624 17.8501 29.8124 19.0501 30.4874 20.2501C31.1999 21.4876 31.8749 22.7626 32.4749 24.0001C31.8374 25.2376 31.1999 26.4751 30.4874 27.7501ZM33.5999 26.5126C34.1624 27.8251 34.6124 29.1001 35.0249 30.3751C33.7499 30.6751 32.3999 30.9001 30.9749 31.0876C31.4249 30.3751 31.9124 29.6251 32.3249 28.8376C32.7749 28.0501 33.1874 27.2626 33.5999 26.5126ZM23.9999 36.6751C23.0999 35.7001 22.2374 34.6501 21.4124 33.5626C22.2749 33.6001 23.1374 33.6376 23.9999 33.6376C24.8624 33.6376 25.7249 33.6001 26.5874 33.5626C25.7624 34.6501 24.8999 35.7001 23.9999 36.6751ZM17.0249 31.0501C15.5999 30.8626 14.2499 30.6376 12.9749 30.3376C13.3874 29.1001 13.8374 27.7876 14.3999 26.4751C14.8124 27.2251 15.2249 28.0126 15.6749 28.7626C16.1249 29.5876 16.5749 30.3001 17.0249 31.0501ZM14.3999 21.4876C13.8374 20.1751 13.3874 18.9001 12.9749 17.6251C14.2499 17.3251 15.5999 17.1001 17.0249 16.9126C16.5749 17.6251 16.0874 18.3751 15.6749 19.1626C15.2249 19.9501 14.8124 20.7376 14.3999 21.4876ZM23.9999 11.3251C24.8999 12.3001 25.7624 13.3501 26.5874 14.4376C25.7249 14.4001 24.8624 14.3626 23.9999 14.3626C23.1374 14.3626 22.2749 14.4001 21.4124 14.4376C22.2374 13.3501 23.0999 12.3001 23.9999 11.3251ZM32.3249 19.2001L30.9749 16.9501C32.3999 17.1376 33.7499 17.3626 35.0249 17.6626C34.6124 18.9001 34.1624 20.2126 33.5999 21.5251C33.1874 20.7376 32.7749 19.9501 32.3249 19.2001ZM11.8874 13.1251C11.2499 9.1876 11.7749 6.4126 13.3124 5.5126C13.6874 5.2876 14.1374 5.1751 14.6249 5.1751C16.8749 5.1751 19.6874 7.0126 22.4999 9.7876C21.1874 11.2126 19.8749 12.8626 18.5999 14.6626C16.4249 14.8501 14.3624 15.1876 12.4124 15.6001C12.1874 14.7376 12.0374 13.9126 11.8874 13.1251ZM2.6249 24.0001C2.6249 22.2376 4.7624 20.3626 8.5124 18.9751C9.2624 18.6751 10.0874 18.4126 10.9124 18.1876C11.5124 20.0626 12.2624 22.0501 13.1624 24.0376C12.2624 26.0251 11.4749 27.9751 10.9124 29.8501C5.7374 28.3501 2.6249 26.1001 2.6249 24.0001ZM13.3124 42.4876C11.7749 41.5876 11.2499 38.8126 11.8874 34.8751C11.9999 34.0876 12.1874 33.2626 12.4124 32.4001C14.3624 32.8501 16.4249 33.1501 18.5999 33.3376C19.8749 35.1376 21.1874 36.7501 22.4999 38.2126C19.7249 40.9501 16.9124 42.8251 14.6249 42.8251C14.1374 42.8251 13.6874 42.7126 13.3124 42.4876ZM36.1124 34.8751C36.7499 38.8126 36.2249 41.5876 34.6874 42.4876C34.3124 42.7126 33.8624 42.8251 33.3749 42.8251C31.1249 42.8251 28.3124 40.9876 25.4999 38.2126C26.8124 36.7876 28.1249 35.1376 29.3999 33.3376C31.5749 33.1501 33.6374 32.8126 35.5874 32.4001C35.8124 33.2626 35.9624 34.0876 36.1124 34.8751ZM39.4874 29.0251C38.7374 29.3251 37.9124 29.5876 37.0874 29.8126C36.4874 27.9376 35.7374 25.9501 34.8374 23.9626C35.7374 21.9751 36.5249 20.0251 37.0874 18.1501C42.2624 19.6501 45.3749 21.9001 45.3749 24.0001C45.3749 25.7626 43.1999 27.6376 39.4874 29.0251Z" fill="#61DAFB" />
                                    </svg>

                                    <p className='text-lg font-light'>React</p>
                                </div>
                                {/* language-2 */}
                                <div className='language-item flex justify-start items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-md'>
                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.7717 4.59307C22.1884 4.60057 20.6772 4.7352 19.3467 4.9707C15.428 5.66295 14.717 7.11195 14.717 9.78457V13.3137H23.9768V14.4901H11.2415C8.55045 14.4901 6.19395 16.1074 5.4567 19.1854C4.6062 22.7123 4.5687 24.9136 5.4567 28.5964C6.11483 31.3381 7.68683 33.2911 10.3782 33.2911H13.5623V29.0603C13.5623 26.0037 16.2065 23.3078 19.3471 23.3078H28.5965C31.1712 23.3078 33.2262 21.1876 33.2262 18.6023V9.78495C33.2262 7.27507 31.109 5.38995 28.5965 4.97107C27.005 4.70632 25.3546 4.58595 23.7717 4.59307ZM18.764 7.43145C19.7202 7.43145 20.5017 8.22532 20.5017 9.20182C20.5017 10.1742 19.7206 10.9606 18.764 10.9606C17.804 10.9606 17.0266 10.1742 17.0266 9.20182C17.0262 8.22532 17.804 7.43145 18.764 7.43145Z" fill="url(#paint0_linear_3_212)" />
                                        <path d="M34.3807 14.4901V18.6024C34.3807 21.7899 31.6777 24.473 28.5959 24.473H19.3465C16.813 24.473 14.7168 26.6416 14.7168 29.1789V37.997C14.7168 40.5061 16.8985 41.9825 19.3465 42.7021C22.2775 43.5635 25.0885 43.7195 28.5959 42.7021C30.9269 42.0267 33.2257 40.6685 33.2257 37.997V34.4675H23.9767V33.2907H37.8562C40.5472 33.2907 41.5507 31.4139 42.4867 28.5961C43.4534 25.6955 43.4118 22.9059 42.4867 19.1851C41.8214 16.5057 40.5513 14.4897 37.8562 14.4897H34.3807V14.4901ZM29.1783 36.8202C30.1387 36.8202 30.916 37.6066 30.916 38.5798C30.916 39.5555 30.1383 40.3494 29.1783 40.3494C28.222 40.3494 27.4409 39.5555 27.4409 38.5798C27.4409 37.6066 28.222 36.8202 29.1783 36.8202Z" fill="url(#paint1_linear_3_212)" />
                                        <path opacity="0.444" d="M36.491 44.8488C36.491 46.1774 30.935 47.2548 24.0819 47.2548C17.2284 47.2548 11.6724 46.1774 11.6724 44.8488C11.6724 43.5198 17.228 42.4424 24.0819 42.4424C30.935 42.4424 36.491 43.5194 36.491 44.8488Z" fill="url(#paint2_radial_3_212)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_3_212" x1="3.8764" y1="5.69656" x2="25.2341" y2="23.9103" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#5A9FD4" />
                                                <stop offset="1" stop-color="#306998" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_3_212" x1="33.2695" y1="35.2323" x2="25.6103" y2="24.4915" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFD43B" />
                                                <stop offset="1" stop-color="#FFE873" />
                                            </linearGradient>
                                            <radialGradient id="paint2_radial_3_212" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.0317 44.7799) rotate(-90) scale(2.40687 10.5802)">
                                                <stop stop-color="#B8B8B8" stop-opacity="0.498" />
                                                <stop offset="1" stop-color="#7F7F7F" stop-opacity="0" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                    <p className='text-lg font-light'>Python</p>
                                </div>
                                {/* language-3 */}
                                <div className='language-item flex justify-start items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-md'>
                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3_220)">
                                            <path d="M0.528076 0.528076H47.4721V47.4725H0.528076V0.528076Z" fill="#F0DB4F" />
                                            <path d="M43.6301 36.2761C43.2862 34.1344 41.8897 32.3356 37.7531 30.6582C36.3161 29.9978 34.7141 29.525 34.2367 28.436C34.0672 27.8022 34.0447 27.4452 34.152 27.0616C34.4598 25.8166 35.946 25.4285 37.1238 25.7855C37.8825 26.0397 38.6006 26.6243 39.0337 27.557C41.0595 26.2452 41.0553 26.2538 42.4698 25.3523C41.952 24.5495 41.6756 24.179 41.3366 23.8355C40.1182 22.4746 38.4581 21.7737 35.8031 21.8273L34.4201 22.0062C33.0948 22.3411 31.8318 23.0367 31.0912 23.9693C28.869 26.4908 29.5027 30.9038 32.2068 32.7199C34.8708 34.7194 38.7843 35.1743 39.2842 37.0441C39.7706 39.3331 37.602 40.0741 35.4465 39.8108C33.858 39.4805 32.9745 38.6731 32.0193 37.2049C30.2613 38.2223 30.2613 38.2223 28.4538 39.2618C28.8825 40.1989 29.3328 40.6231 30.0513 41.4349C33.4518 44.8842 41.9613 44.7147 43.4876 39.4939C43.5495 39.3147 43.9605 38.1192 43.6301 36.2761ZM26.0482 22.1037H21.6573L21.6393 33.4557C21.6393 35.8699 21.7642 38.0832 21.3716 38.7616C20.7292 40.0958 19.0646 39.9305 18.306 39.6717C17.5338 39.2922 17.1412 38.7526 16.6863 37.9898C16.5615 37.7708 16.4677 37.6013 16.4362 37.5882L12.8662 39.7745C13.4598 40.9928 14.3343 42.0503 15.4545 42.7373C17.1277 43.7416 19.3766 44.0494 21.7286 43.5095C23.2593 43.0636 24.5801 42.1399 25.2716 40.7341C26.2713 38.8909 26.0568 36.6601 26.0478 34.1926C26.0703 30.167 26.0482 26.1421 26.0482 22.1037Z" fill="#323330" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3_220">
                                                <rect width="48" height="48" rx="6" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className='text-lg font-light'>Javascript</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='languages-list flex-row space-y-4'>
                                {/* language-1 */}
                                <div className='language-item flex justify-start items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-md'>
                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.9999 28.2751C26.3609 28.2751 28.2749 26.3611 28.2749 24.0001C28.2749 21.6391 26.3609 19.7251 23.9999 19.7251C21.6388 19.7251 19.7249 21.6391 19.7249 24.0001C19.7249 26.3611 21.6388 28.2751 23.9999 28.2751Z" fill="#61DAFB" />
                                        <path d="M40.2374 16.9501C39.4124 16.6501 38.5499 16.3501 37.6499 16.0876C37.8749 15.1876 38.0624 14.2876 38.2124 13.4251C38.9999 8.4751 38.1374 4.9876 35.7374 3.6376C35.0249 3.2251 34.2374 3.0376 33.3374 3.0376C30.7124 3.0376 27.3749 4.9876 23.9999 8.2501C20.6249 4.9876 17.2874 3.0376 14.6624 3.0376C13.7624 3.0376 12.9749 3.2251 12.2624 3.6376C9.8624 5.0251 8.9999 8.5126 9.7874 13.4251C9.9374 14.2876 10.1249 15.1876 10.3499 16.0876C9.4499 16.3501 8.5874 16.6126 7.7624 16.9501C3.0749 18.7501 0.524902 21.2251 0.524902 24.0001C0.524902 26.7751 3.1124 29.2501 7.7624 31.0501C8.5874 31.3501 9.4499 31.6501 10.3499 31.9126C10.1249 32.8126 9.9374 33.7126 9.7874 34.5751C8.9999 39.5251 9.8624 43.0126 12.2624 44.3626C12.9749 44.7751 13.7624 44.9626 14.6624 44.9626C17.3249 44.9626 20.6624 43.0126 23.9999 39.7501C27.3749 43.0126 30.7124 44.9626 33.3374 44.9626C34.2374 44.9626 35.0249 44.7751 35.7374 44.3626C38.1374 42.9751 38.9999 39.4876 38.2124 34.5751C38.0624 33.7126 37.8749 32.8126 37.6499 31.9126C38.5499 31.6501 39.4124 31.3876 40.2374 31.0501C44.9249 29.2501 47.4749 26.7751 47.4749 24.0001C47.4749 21.2251 44.9249 18.7501 40.2374 16.9501ZM34.6874 5.5126C36.2249 6.4126 36.7499 9.1876 36.1124 13.1251C35.9999 13.9126 35.8124 14.7376 35.5874 15.6001C33.6374 15.1501 31.5749 14.8501 29.3999 14.6626C28.1249 12.8626 26.8124 11.2501 25.4999 9.7876C28.2749 7.0501 31.0874 5.1751 33.3749 5.1751C33.8624 5.1751 34.3124 5.2876 34.6874 5.5126ZM30.4874 27.7501C29.8124 28.9501 29.0249 30.1501 28.1999 31.3501C26.8124 31.4626 25.4249 31.5001 23.9999 31.5001C22.5374 31.5001 21.1499 31.4626 19.7999 31.3501C18.9749 30.1501 18.2249 28.9501 17.5499 27.7501C16.8374 26.5126 16.1624 25.2376 15.5624 24.0001C16.1624 22.7626 16.8374 21.4876 17.5499 20.2501C18.2249 19.0501 19.0124 17.8501 19.8374 16.6501C21.2249 16.5376 22.6124 16.5001 24.0374 16.5001C25.4999 16.5001 26.8874 16.5376 28.2374 16.6501C29.0624 17.8501 29.8124 19.0501 30.4874 20.2501C31.1999 21.4876 31.8749 22.7626 32.4749 24.0001C31.8374 25.2376 31.1999 26.4751 30.4874 27.7501ZM33.5999 26.5126C34.1624 27.8251 34.6124 29.1001 35.0249 30.3751C33.7499 30.6751 32.3999 30.9001 30.9749 31.0876C31.4249 30.3751 31.9124 29.6251 32.3249 28.8376C32.7749 28.0501 33.1874 27.2626 33.5999 26.5126ZM23.9999 36.6751C23.0999 35.7001 22.2374 34.6501 21.4124 33.5626C22.2749 33.6001 23.1374 33.6376 23.9999 33.6376C24.8624 33.6376 25.7249 33.6001 26.5874 33.5626C25.7624 34.6501 24.8999 35.7001 23.9999 36.6751ZM17.0249 31.0501C15.5999 30.8626 14.2499 30.6376 12.9749 30.3376C13.3874 29.1001 13.8374 27.7876 14.3999 26.4751C14.8124 27.2251 15.2249 28.0126 15.6749 28.7626C16.1249 29.5876 16.5749 30.3001 17.0249 31.0501ZM14.3999 21.4876C13.8374 20.1751 13.3874 18.9001 12.9749 17.6251C14.2499 17.3251 15.5999 17.1001 17.0249 16.9126C16.5749 17.6251 16.0874 18.3751 15.6749 19.1626C15.2249 19.9501 14.8124 20.7376 14.3999 21.4876ZM23.9999 11.3251C24.8999 12.3001 25.7624 13.3501 26.5874 14.4376C25.7249 14.4001 24.8624 14.3626 23.9999 14.3626C23.1374 14.3626 22.2749 14.4001 21.4124 14.4376C22.2374 13.3501 23.0999 12.3001 23.9999 11.3251ZM32.3249 19.2001L30.9749 16.9501C32.3999 17.1376 33.7499 17.3626 35.0249 17.6626C34.6124 18.9001 34.1624 20.2126 33.5999 21.5251C33.1874 20.7376 32.7749 19.9501 32.3249 19.2001ZM11.8874 13.1251C11.2499 9.1876 11.7749 6.4126 13.3124 5.5126C13.6874 5.2876 14.1374 5.1751 14.6249 5.1751C16.8749 5.1751 19.6874 7.0126 22.4999 9.7876C21.1874 11.2126 19.8749 12.8626 18.5999 14.6626C16.4249 14.8501 14.3624 15.1876 12.4124 15.6001C12.1874 14.7376 12.0374 13.9126 11.8874 13.1251ZM2.6249 24.0001C2.6249 22.2376 4.7624 20.3626 8.5124 18.9751C9.2624 18.6751 10.0874 18.4126 10.9124 18.1876C11.5124 20.0626 12.2624 22.0501 13.1624 24.0376C12.2624 26.0251 11.4749 27.9751 10.9124 29.8501C5.7374 28.3501 2.6249 26.1001 2.6249 24.0001ZM13.3124 42.4876C11.7749 41.5876 11.2499 38.8126 11.8874 34.8751C11.9999 34.0876 12.1874 33.2626 12.4124 32.4001C14.3624 32.8501 16.4249 33.1501 18.5999 33.3376C19.8749 35.1376 21.1874 36.7501 22.4999 38.2126C19.7249 40.9501 16.9124 42.8251 14.6249 42.8251C14.1374 42.8251 13.6874 42.7126 13.3124 42.4876ZM36.1124 34.8751C36.7499 38.8126 36.2249 41.5876 34.6874 42.4876C34.3124 42.7126 33.8624 42.8251 33.3749 42.8251C31.1249 42.8251 28.3124 40.9876 25.4999 38.2126C26.8124 36.7876 28.1249 35.1376 29.3999 33.3376C31.5749 33.1501 33.6374 32.8126 35.5874 32.4001C35.8124 33.2626 35.9624 34.0876 36.1124 34.8751ZM39.4874 29.0251C38.7374 29.3251 37.9124 29.5876 37.0874 29.8126C36.4874 27.9376 35.7374 25.9501 34.8374 23.9626C35.7374 21.9751 36.5249 20.0251 37.0874 18.1501C42.2624 19.6501 45.3749 21.9001 45.3749 24.0001C45.3749 25.7626 43.1999 27.6376 39.4874 29.0251Z" fill="#61DAFB" />
                                    </svg>

                                    <p className='text-lg font-light'>React</p>
                                </div>
                                {/* language-2 */}
                                <div className='language-item flex justify-start items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-md'>
                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.7717 4.59307C22.1884 4.60057 20.6772 4.7352 19.3467 4.9707C15.428 5.66295 14.717 7.11195 14.717 9.78457V13.3137H23.9768V14.4901H11.2415C8.55045 14.4901 6.19395 16.1074 5.4567 19.1854C4.6062 22.7123 4.5687 24.9136 5.4567 28.5964C6.11483 31.3381 7.68683 33.2911 10.3782 33.2911H13.5623V29.0603C13.5623 26.0037 16.2065 23.3078 19.3471 23.3078H28.5965C31.1712 23.3078 33.2262 21.1876 33.2262 18.6023V9.78495C33.2262 7.27507 31.109 5.38995 28.5965 4.97107C27.005 4.70632 25.3546 4.58595 23.7717 4.59307ZM18.764 7.43145C19.7202 7.43145 20.5017 8.22532 20.5017 9.20182C20.5017 10.1742 19.7206 10.9606 18.764 10.9606C17.804 10.9606 17.0266 10.1742 17.0266 9.20182C17.0262 8.22532 17.804 7.43145 18.764 7.43145Z" fill="url(#paint0_linear_3_212)" />
                                        <path d="M34.3807 14.4901V18.6024C34.3807 21.7899 31.6777 24.473 28.5959 24.473H19.3465C16.813 24.473 14.7168 26.6416 14.7168 29.1789V37.997C14.7168 40.5061 16.8985 41.9825 19.3465 42.7021C22.2775 43.5635 25.0885 43.7195 28.5959 42.7021C30.9269 42.0267 33.2257 40.6685 33.2257 37.997V34.4675H23.9767V33.2907H37.8562C40.5472 33.2907 41.5507 31.4139 42.4867 28.5961C43.4534 25.6955 43.4118 22.9059 42.4867 19.1851C41.8214 16.5057 40.5513 14.4897 37.8562 14.4897H34.3807V14.4901ZM29.1783 36.8202C30.1387 36.8202 30.916 37.6066 30.916 38.5798C30.916 39.5555 30.1383 40.3494 29.1783 40.3494C28.222 40.3494 27.4409 39.5555 27.4409 38.5798C27.4409 37.6066 28.222 36.8202 29.1783 36.8202Z" fill="url(#paint1_linear_3_212)" />
                                        <path opacity="0.444" d="M36.491 44.8488C36.491 46.1774 30.935 47.2548 24.0819 47.2548C17.2284 47.2548 11.6724 46.1774 11.6724 44.8488C11.6724 43.5198 17.228 42.4424 24.0819 42.4424C30.935 42.4424 36.491 43.5194 36.491 44.8488Z" fill="url(#paint2_radial_3_212)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_3_212" x1="3.8764" y1="5.69656" x2="25.2341" y2="23.9103" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#5A9FD4" />
                                                <stop offset="1" stop-color="#306998" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_3_212" x1="33.2695" y1="35.2323" x2="25.6103" y2="24.4915" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFD43B" />
                                                <stop offset="1" stop-color="#FFE873" />
                                            </linearGradient>
                                            <radialGradient id="paint2_radial_3_212" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.0317 44.7799) rotate(-90) scale(2.40687 10.5802)">
                                                <stop stop-color="#B8B8B8" stop-opacity="0.498" />
                                                <stop offset="1" stop-color="#7F7F7F" stop-opacity="0" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                    <p className='text-lg font-light'>Python</p>
                                </div>
                                {/* language-3 */}
                                <div className='language-item flex justify-start items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-md'>
                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3_220)">
                                            <path d="M0.528076 0.528076H47.4721V47.4725H0.528076V0.528076Z" fill="#F0DB4F" />
                                            <path d="M43.6301 36.2761C43.2862 34.1344 41.8897 32.3356 37.7531 30.6582C36.3161 29.9978 34.7141 29.525 34.2367 28.436C34.0672 27.8022 34.0447 27.4452 34.152 27.0616C34.4598 25.8166 35.946 25.4285 37.1238 25.7855C37.8825 26.0397 38.6006 26.6243 39.0337 27.557C41.0595 26.2452 41.0553 26.2538 42.4698 25.3523C41.952 24.5495 41.6756 24.179 41.3366 23.8355C40.1182 22.4746 38.4581 21.7737 35.8031 21.8273L34.4201 22.0062C33.0948 22.3411 31.8318 23.0367 31.0912 23.9693C28.869 26.4908 29.5027 30.9038 32.2068 32.7199C34.8708 34.7194 38.7843 35.1743 39.2842 37.0441C39.7706 39.3331 37.602 40.0741 35.4465 39.8108C33.858 39.4805 32.9745 38.6731 32.0193 37.2049C30.2613 38.2223 30.2613 38.2223 28.4538 39.2618C28.8825 40.1989 29.3328 40.6231 30.0513 41.4349C33.4518 44.8842 41.9613 44.7147 43.4876 39.4939C43.5495 39.3147 43.9605 38.1192 43.6301 36.2761ZM26.0482 22.1037H21.6573L21.6393 33.4557C21.6393 35.8699 21.7642 38.0832 21.3716 38.7616C20.7292 40.0958 19.0646 39.9305 18.306 39.6717C17.5338 39.2922 17.1412 38.7526 16.6863 37.9898C16.5615 37.7708 16.4677 37.6013 16.4362 37.5882L12.8662 39.7745C13.4598 40.9928 14.3343 42.0503 15.4545 42.7373C17.1277 43.7416 19.3766 44.0494 21.7286 43.5095C23.2593 43.0636 24.5801 42.1399 25.2716 40.7341C26.2713 38.8909 26.0568 36.6601 26.0478 34.1926C26.0703 30.167 26.0482 26.1421 26.0482 22.1037Z" fill="#323330" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3_220">
                                                <rect width="48" height="48" rx="6" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className='text-lg font-light'>Javascript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack