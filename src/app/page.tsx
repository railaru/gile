import React from 'react';
import Header from '@/app/Header/Header';
import Hero from '@/app/Hero/Hero';
import InfoBlock from '@/app/InfoBlock/InfoBlock';
import Video from '@/app/Video/Video';

export default function Page() {
    return (
        <div className="px-4 max-w-[1142px] mx-auto pb-32">
            <Header/>

            <Hero/>

            <InfoBlock/>

            <Video/>
        </div>
    );
}
