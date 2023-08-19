import React from 'react';
import Header from '@/app/Header/Header';
import Hero from '@/app/Hero/Hero';

export default function Page() {
    return (
        <div className="px-4 max-w-[1142px] mx-auto">
            <Header/>

            <Hero/>
        </div>
    );
}
