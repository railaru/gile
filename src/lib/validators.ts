import { Doc } from "../../convex/_generated/dataModel";
import { ratingSchema } from "./../constants/schemas";

export function validateOptions(options: Doc<'options'>[]) {
	let areOptionsValid = true;

	options.forEach((option) => {
		Object.values(option.ratings).forEach((rating) => {
			const parsedRatings = ratingSchema.safeParse(rating);

			if (parsedRatings.success) {
				return;
			}

			areOptionsValid = false;
		});
	});

	return areOptionsValid;
}