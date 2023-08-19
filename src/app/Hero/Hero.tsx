import Link from 'next/link';
import { PAGE_ROUTES } from '@/constants/routes';
import React, { HTMLAttributes } from 'react';
import Chart from '@/app/Hero/Chart';

type Props = HTMLAttributes<HTMLElement>;
export default function Hero(props: Props) {

    return (
        <div {...props}>
            <div className="lg:flex space-y-12 lg:space-y-0 lg:space-x-10">
                <div>
                    <div>
                        <h1 className="text-4xl lg:text-[58px] font-medium lg:leading-[70px] lg:max-w-[450px]">
                            Helping people make better decisions
                        </h1>
                    </div>

                    <div className="mt-12">
                        <div>
                            <Link
                                href={PAGE_ROUTES.STEPS[1]}
                                className="inline-block h-[60px] px-8 bg-black text-white rounded-full text-lg leading-[59px] text-medium whitespace-nowrap hover:bg-neutral-1 focus:bg-neutral-1 transition-all border-2 border-transparent hover:scale-105 focus:scale-105"
                            >
                                Start now
                            </Link>
                        </div>

                        <div className="mt-6">
                            <a
                                href="https://buildbytes.substack.com"
                                className="inline-block h-[60px] px-8 rounded-full text-lg leading-[59px] text-medium whitespace-nowrap border-2 border-neutral-6 hover:scale-105 focus:scale-105 transition-all"
                                target="_blank"
                            >
                                Newsletter
                            </a>
                        </div>
                    </div>
                </div>

                <Chart/>
            </div>
        </div>
    );
}