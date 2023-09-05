"use client";

import TextareaGroup from "@/components/ui/Textarea/Textarea";
import React, { useState } from "react";
import { InputGroup } from "@/components/ui/Input/Input";
import { SearchIcon } from "lucide-react";

export default function PersonalInfoForm() {
	const [isAutosuggestOpen, setIsAutosuggestOpen] = useState(false);

	return (
		<form>
			<TextareaGroup
				textAreaProps={{
					name: 'decision',
					placeholder:
						'I’m a project manager with 7 years of experience.',
				}}
				currentCharacterCount={20}
				maxCharacterCount={120}
			/>

			<div className="mt-8">
				<label className="text-sm">
					My topics
				</label>

				<div className="relative">
					<InputGroup
						className="mt-1"
						inputProps={{
							placeholder: "Start typing to search",
							className: 'rounded-b-none focus:shadow-lg focus-visible:ring-0',
							onFocus: () => setIsAutosuggestOpen(true),
							onBlur: () => setIsAutosuggestOpen(false),
						}}
						icon={<SearchIcon size={20} className="text-neutral-3"/>}
					/>

					{
						isAutosuggestOpen && (
							<ul className="absolute mt-[-1px] bg-white w-full shadow-lg rounded-b-[4px] border-t-[1px] border-neutral-7 text-sm">
								<li className="p-1.5 px-3 m-1.5 font-medium">
									Suggestions based on your profile:
								</li>

								<li className="p-1.5 px-3 m-1.5 rounded-[4px] hover:bg-neutral-7">
									Agile
								</li>

								<li className="p-1.5 px-3 m-1.5 rounded-[4px] hover:bg-neutral-7">
									Team building
								</li>

								<li className="h-[1px] border-t-neutral-7"/>

								<li className="p-1.5 px-3 m-1.5 font-medium">
									General topics:
								</li>

								<li className="p-1.5 px-3 m-1.5 rounded-[4px] hover:bg-neutral-7">
									Business
								</li>
							</ul>
						)
					}
				</div>
			</div>
		</form>
	)
}