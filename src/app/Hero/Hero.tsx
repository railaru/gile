import Link from 'next/link';
import { PAGE_ROUTES } from '@/constants/routes';
import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="lg:flex space-y-12 lg:space-y-0 lg:space-x-10 mt-24">
            <div>
                <div>
                    <h1 className="text-3xl lg:text-[58px] font-medium lg:leading-[70px] lg:max-w-[450px]">
                        Helping people make better decisions
                    </h1>
                </div>

                <div className="mt-12">
                    <div>
                        <Link
                            href={PAGE_ROUTES.STEPS[1]}
                            className="inline-block h-[60px] px-8 bg-black text-white rounded-full text-lg leading-[60px] text-medium whitespace-nowrap hover:bg-neutral-1 focus:bg-neutral-1 transition-colors border-2 border-transparent"
                        >
                            Start now
                        </Link>
                    </div>

                    <div className="mt-6">
                        <a
                            href="https://buildbytes.substack.com"
                            className="inline-block h-[60px] px-8 rounded-full text-lg leading-[60px] text-medium whitespace-nowrap border-2 border-neutral-6"
                            target="_blank"
                        >
                            Newsletter
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <Image
                    src={'/assets/images/homepage/hero-photo.png'}
                    alt={'Hero image'}
                    width={720}
                    height={496}
                    className={'rounded-[4px] w-full h-auto drop-shadow-md'}
                />
            </div>
        </div>
    );
}