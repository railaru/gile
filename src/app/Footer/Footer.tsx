import IconLogo from '@/components/ui/Logo/IconLogo';

export default function Footer() {
    return (
        <footer className="border-t border-neutral-6 py-8 mt-16">
            <IconLogo className="fill-black w-8 h-8"/>

            <p className="mt-4">
                <span className="mr-1">Copyright gile.to. This project is</span>

                <a
                    className="underline hover:text-primary focus:text-primary transition-colors"
                    href={'https://github.com/railaru/gile'}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                >
                    open source
                </a>.
            </p>
        </footer>
    );
}