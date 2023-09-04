import { mutation, query } from './_generated/server';
import { v } from 'convex/values';
import { validateOptions } from "../src/lib/validators";

export const getByDecisionId = query({
	args: {
		decisionId: v.id('decisions'),
	},
	handler: async (ctx, args) => {
		if (!args.decisionId) {
			return null;
		}

		const identity = await ctx.auth.getUserIdentity();

		if (identity === null) {
			return null;
		}

		const options = await ctx.db
			.query('options')
			.withIndex('by_decision_id_and_user_token', (q) =>
				q.eq('decisionId', args.decisionId).eq('userTokenIdentifier', identity.tokenIdentifier)
			)
			.collect();

		const areOptionsValid = validateOptions(options);

		return {
			options,
			areOptionsValid,
		};
	},
});

export const add = mutation({
	args: {
		decisionId: v.id('decisions'),
		title: v.string(),
		ratings: v.object({
			financialCost: v.number(),
			levelOfEffort: v.number(),
			timeInvestment: v.number(),
			risk: v.number(),
			shortTermReturn: v.number(),
			longTermReturn: v.number(),
		}),
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();

		if (identity === null) {
			throw new Error('Called addOption without authentication present');
		}

		return await ctx.db.insert('options', {
			decisionId: args.decisionId,
			userTokenIdentifier: identity.tokenIdentifier,
			title: args.title,
			ratings: args.ratings,
		});
	}
});

export const deleteById = mutation({
	args: {
		_id: v.id('options'),
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();

		if (identity === null) {
			throw new Error('Called deleteByIdOption without authentication present');
		}

		return await ctx.db.delete(args._id);
	}
});

export const updateMultiple = mutation({
	args: {
		options: v.array(v.object({
			_id: v.id('options'),
			decisionId: v.id('decisions'),
			title: v.string(),
			ratings: v.object({
				financialCost: v.number(),
				levelOfEffort: v.number(),
				timeInvestment: v.number(),
				risk: v.number(),
				shortTermReturn: v.number(),
				longTermReturn: v.number(),
			})
		}))
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();

		if (identity === null) {
			throw new Error('Called updateMultipleOptions without authentication present');
		}

		args.options.forEach((option) => {
			ctx.db.patch(option._id, {
				decisionId: option.decisionId,
				userTokenIdentifier: identity.tokenIdentifier,
				title: option.title,
				ratings: option.ratings,
			});
		});
	}
});