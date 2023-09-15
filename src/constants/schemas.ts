import { z } from 'zod';

export const minRating = 1;
export const maxRating = 5;

export const ratingSchema = z
.number()
.min(minRating, { message: `Min. rating is ${minRating}` })
.max(maxRating, { message: `Max. rating is ${maxRating}` });

