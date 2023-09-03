import { SignIn } from '@clerk/nextjs';
import Header from '@/app/Components/Header/Header';

export default function Page() {
	return (
		<div className="px-4 max-w-[1142px] mx-auto space-y-6">
			<Header/>

			<div className="flex justify-center">
				<SignIn/>
			</div>
		</div>
	);
}