export default function Footer() {
    return (
        <footer className="border-t border-neutral-6 py-8 mt-16">
            <span className="mr-1">Copyright gile.to. This project is</span>

            <a
                className="underline hover:text-primary focus:text-primary transition-colors"
                href={'https://github.com/railaru/gile'}
                target={'_blank'}
                rel={'noopener noreferrer'}
            >
                open source
            </a>.
        </footer>
    );
}