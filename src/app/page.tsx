import React from 'react';
import Header from '@/app/Header/Header';
import Hero from '@/app/Hero/Hero';
import InfoBlock from '@/app/InfoBlock/InfoBlock';
import Video from '@/app/Video/Video';
import Footer from '@/app/Footer/Footer';
import BlogSection from '@/app/BlogSection/BlogSection';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/constants/routes';

export default function Page() {
    return (
        <div className="px-4 max-w-[1142px] mx-auto">
            <Header/>

            <Hero className="mt-24 lg:mt-32"/>

            <InfoBlock/>

            <Video/>

            <div className="flex justify-center mt-24 lg:mt-32">
                <Link
                    href={PAGE_ROUTES.STEPS[1]}
                    className="inline-block h-[60px] px-8 bg-black text-white rounded-full text-lg leading-[59px] text-medium whitespace-nowrap hover:bg-neutral-1 focus:bg-neutral-1 transition-all border-2 border-transparent hover:scale-105 focus:scale-105"
                >
                    Get started
                </Link>
            </div>

            <BlogSection/>

            <Footer/>
        </div>
    );
}
