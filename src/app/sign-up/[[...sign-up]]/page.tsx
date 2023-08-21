import { SignUp } from '@clerk/nextjs';
import Header from '@/app/Header/Header';

export default function Page() {
    return (
        <div className="container">
            <Header/>

            <div className="flex justify-center">
                <SignUp/>
            </div>
        </div>
    );
}