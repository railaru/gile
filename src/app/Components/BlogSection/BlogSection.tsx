import Image from 'next/image';

const data = [
    {
        label: 'July 23rd, 2023 - 7min read ',
        title: 'Coding an MVP for a side project',
        href: 'https://buildbytes.substack.com/p/coding-a-mvp-for-a-side-project',
        imgSrc: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe6f02c28-cc8c-469e-9fee-2daa3724f931_886x570.jpeg'
    },
    {
        label: 'July 9th, 2023 - 10min read ',
        title: 'Designing and prototyping a web app project',
        href: 'https://buildbytes.substack.com/p/designing-and-prototyping-a-web-app',
        imgSrc: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F71f0dacc-f7e7-4758-9521-9f57bda7b985_859x661.png'
    },
    {
        label: 'June 25th, 2023 - 10min read ',
        title: 'How to prepare for a side project',
        href: 'https://buildbytes.substack.com/p/how-to-prepare-for-a-side-project',
        imgSrc: 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0cf38ce6-cfd2-4684-bba6-e3fe877bcaa4_1952x1714.png'
    }
];

export default function BlogSection() {
    return (
        <div className="mt-24 lg:mt-32">
            <h3 className="text-3xl lg:text-4xl">
                Blog section
            </h3>

            <h4 className="text-neutral-2 text-2xl lg:text-3xl mt-4 font-light">Read about how this app was made.</h4>

            <ul className="sm:grid sm:grid-cols-2 mt-16 gap-8 lg:grid-cols-3">
                {data.map((item, index) => (
                    <li key={index}>
                        <Card {...item}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

type Props = {
    label: string;
    title: string;
    href: string;
    imgSrc: string;
}

function Card({ label, title, href, imgSrc }: Props) {
    return (
        <a
            href={href}
            target={'_blank'} rel={'noreferrer'}
            className="block bg-neutral-7/50 p-2 rounded-[4px] pb-4"
        >
            <Image
                src={imgSrc}
                alt={title}
                width={400}
                height={600}
                className="object-contain object-center"
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />

            <div className="p-2">
                <h4 className="text-neutral-2 text-lg font-light mt-6">{label}</h4>

                <h3 className="text-2xl lg:text-3xl mt-4">{title}</h3>
            </div>
        </a>
    );
}