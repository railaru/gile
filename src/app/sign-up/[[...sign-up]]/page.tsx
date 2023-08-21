import { SignUp } from '@clerk/nextjs';
import Header from '@/app/Components/Header/Header';

export default function Page() {
    return (
        <div className="px-4 max-w-[1142px] mx-auto">
            <Header/>

            <div className="flex justify-center">
                <SignUp/>
            </div>
        </div>
    );
}