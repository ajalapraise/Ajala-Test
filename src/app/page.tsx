'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

import React from 'react'

const Page = () => {
    return (
        <div className='w-full h-full flex flex-col justify-start  bg-[#e8ebef] overflow-y-scroll'>
            <div className='w-full h-20 bg-white px-8 py-5 flex justify-center items-center shadow-md fixed top-0 z-10 '>
                <h1 className='w-full text-[20px] text-[#101828] font-normal'>Get Started</h1>
            </div>
            <div className='px-8 py-5 tracking-wider space-y-2 mt-24 '>
                <h1 className='font-normal text-[20px] text-[#13131A] '>Welcome to Verisync</h1>
                <h2 className='font-[400] text-[14px] text-[#73729B]'>Going through the following guide will help you better understand how Verisync works</h2>
            </div>

            <div className='w-[100%] flex flex-col  px-8 py-5 space-y-10 '>
                <div className='w-[100%] flex flex-wrap  justify-start gap-4 '>
                    <div className='flex rounded-2xl flex-col-reverse  bg-gradient-to-r from-[#B8FFD4] to-[#BBFFD680] w-[360px] min-h-[368px]    '>
                        <div className='bg-white rounded-b-2xl h-[188px] wfull p-5 flex flex-col space-y-3 tracking-wide '>
                            <h1 className='text-[#13131A] font-normal text-[16px]'>Create a flow</h1>
                            <h3 className='  h-[65px] font-[400] text-[12px] text-[#73729B] '>Choose from our unique tools and build your verification flows using an intuitive drag-and-drop builder.</h3>
                            <button className='rounded-xl text-[14px] font-normal text-white py-2 px-4 bg-[#5A50FE] w-[129px] h-[38px] hover:bg-[#8582bc]'>Create a flow</button>
                        </div>
                    </div>
                    <div className='flex rounded-2xl flex-col-reverse  bg-gradient-to-r from-[#B8FFD4] to-[#BBFFD680] w-[360px] h-[348px]'>
                        <div className='bg-white rounded-b-2xl h-[168px] wfull p-5 flex flex-col space-y-3 tracking-wide '>
                            <h1 className='text-[#13131A] font-normal text-[16px]'>Integrate our app</h1>
                            <h3 className='  h-[65px] font-[400] text-[12px] text-[#73729B] '>Easily integrate Verisync into your website or app via SDK or API (no coding required!).</h3>
                            <button className='rounded-xl text-[14px] font-normal text-white py-2 px-4 bg-[#5A50FE] min-w-[71px] max-w-[148px] h-[38px] hover:bg-[#8582bc]'>View webhooks</button>
                        </div>
                    </div>
                    <div className='flex rounded-2xl flex-col-reverse  bg-gradient-to-r from-[#B8FFD4] to-[#BBFFD680] w-[360px] h-[348px]'>
                        <div className='bg-white rounded-b-2xl h-[168px] wfull p-5 flex flex-col space-y-3 tracking-wide '>
                            <h1 className='text-[#13131A] font-normal text-[16px]'>Add co-workers</h1>
                            <h3 className='  h-[65px] font-[400] text-[12px] text-[#73729B] '>Going through the following guide will help you better understand how Verisync works</h3>
                            <button className='rounded-xl text-[14px] font-normal text-white py-2 px-4 bg-[#5A50FE] w-[129px] h-[38px] hover:bg-[#8582bc]'>Invite</button>
                        </div>
                    </div>
                    <div className='flex rounded-2xl flex-col-reverse  bg-gradient-to-r from-[#B8FFD4] to-[#BBFFD680] w-[360px] min-h-[368px]    '>
                        <div className='bg-white rounded-b-2xl h-[188px] wfull p-5 flex flex-col space-y-3 tracking-wide '>
                            <h1 className='text-[#13131A] font-normal text-[16px]'>Create a flow</h1>
                            <h3 className='  h-[65px] font-[400] text-[12px] text-[#73729B] '>Choose from our unique tools and build your verification flows using an intuitive drag-and-drop builder.</h3>
                            <button className='rounded-xl text-[14px] font-normal text-white py-2 px-4 bg-[#5A50FE] w-[129px] h-[38px] hover:bg-[#8582bc]'>Create a flow</button>
                        </div>
                    </div>
                    <div className='flex rounded-2xl flex-col-reverse  bg-gradient-to-r from-[#B8FFD4] to-[#BBFFD680] w-[360px] h-[348px]'>
                        <div className='bg-white rounded-b-2xl h-[168px] wfull p-5 flex flex-col space-y-3 tracking-wide '>
                            <h1 className='text-[#13131A] font-normal text-[16px]'>Integrate our app</h1>
                            <h3 className='  h-[65px] font-[400] text-[12px] text-[#73729B] '>Easily integrate Verisync into your website or app via SDK or API (no coding required!).</h3>
                            <button className='rounded-xl text-[14px] font-normal text-white py-2 px-4 bg-[#5A50FE] min-w-[71px] max-w-[148px] h-[38px] hover:bg-[#8582bc]'>View webhooks</button>
                        </div>
                    </div>
                    <div className='flex rounded-2xl flex-col-reverse  bg-gradient-to-r from-[#B8FFD4] to-[#BBFFD680] w-[360px] h-[348px]'>
                        <div className='bg-white rounded-b-2xl h-[168px] wfull p-5 flex flex-col space-y-3 tracking-wide '>
                            <h1 className='text-[#13131A] font-normal text-[16px]'>Add co-workers</h1>
                            <h3 className='  h-[65px] font-[400] text-[12px] text-[#73729B] '>Going through the following guide will help you better understand how Verisync works</h3>
                            <button className='rounded-xl text-[14px] font-normal text-white py-2 px-4 bg-[#5A50FE] w-[129px] h-[38px] hover:bg-[#8582bc]'>Invite</button>
                        </div>
                    </div>
                    <div className='flex rounded-2xl flex-col-reverse  bg-gradient-to-r from-[#B8FFD4] to-[#BBFFD680] w-[360px] min-h-[368px]    '>
                        <div className='bg-white rounded-b-2xl h-[188px] wfull p-5 flex flex-col space-y-3 tracking-wide '>
                            <h1 className='text-[#13131A] font-normal text-[16px]'>Create a flow</h1>
                            <h3 className='  h-[65px] font-[400] text-[12px] text-[#73729B] '>Choose from our unique tools and build your verification flows using an intuitive drag-and-drop builder.</h3>
                            <button className='rounded-xl text-[14px] font-normal text-white py-2 px-4 bg-[#5A50FE] w-[129px] h-[38px] hover:bg-[#8582bc]'>Create a flow</button>
                        </div>
                    </div>
                    <div className='flex rounded-2xl flex-col-reverse  bg-gradient-to-r from-[#B8FFD4] to-[#BBFFD680] w-[360px] h-[348px]'>
                        <div className='bg-white rounded-b-2xl h-[168px] wfull p-5 flex flex-col space-y-3 tracking-wide '>
                            <h1 className='text-[#13131A] font-normal text-[16px]'>Integrate our app</h1>
                            <h3 className='  h-[65px] font-[400] text-[12px] text-[#73729B] '>Easily integrate Verisync into your website or app via SDK or API (no coding required!).</h3>
                            <button className='rounded-xl text-[14px] font-normal text-white py-2 px-4 bg-[#5A50FE] min-w-[71px] max-w-[148px] h-[38px] hover:bg-[#8582bc]'>View webhooks</button>
                        </div>
                    </div>
                    <div className='flex rounded-2xl flex-col-reverse  bg-gradient-to-r from-[#B8FFD4] to-[#BBFFD680] w-[360px] h-[348px]'>
                        <div className='bg-white rounded-b-2xl h-[168px] wfull p-5 flex flex-col space-y-3 tracking-wide '>
                            <h1 className='text-[#13131A] font-normal text-[16px]'>Add co-workers</h1>
                            <h3 className='  h-[65px] font-[400] text-[12px] text-[#73729B] '>Going through the following guide will help you better understand how Verisync works</h3>
                            <button className='rounded-xl text-[14px] font-normal text-white py-2 px-4 bg-[#5A50FE] w-[129px] h-[38px] hover:bg-[#8582bc]'>Invite</button>
                        </div>
                    </div>

                </div>
                <div className='w-[182px] h-[42px] border-[1px] border-[#DCDBE6]  rounded-xl'>
                    <button className='bg-white hover:bg-gray-200 text-[16px] font-normal px-4 w-full h-full rounded-xl text-[#73729B]'>Dismiss checklist</button>
                </div>

            </div>

        </div>
    )
}

export default Page