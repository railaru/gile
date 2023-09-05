import DashboardHeader from '@/app/Components/DashboardHeader/DashboardHeader';
import React from 'react';
import Pane from "@/components/ui/Pane/Pane";
import Divider from "@/components/ui/Divider/Divider";
import PersonalInfoForm from "@/app/(dashboard)/dashboard/feed-ai/PersonalInfoForm";

export const metadata = {
	title: 'Feed AI | Gilė',
};

export default function Page() {

	return (
		<div>
			<DashboardHeader/>

			<main className="max-w-[800px] mx-auto pt-12 pb-24 px-4 lg:px-0">
				<Pane>
					<h1 className="text-2xl">Tell about yourself</h1>

					<Divider className="my-8"/>

					<PersonalInfoForm/>
				</Pane>
			</main>
		</div>
	);
}