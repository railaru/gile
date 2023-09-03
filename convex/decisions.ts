import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const get = query({
	handler: async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();

		if (identity === null) {
			return null;
		}

		return await ctx.db.query('decisions')
			.filter((q) => q.eq(q.field('userTokenIdentifier'), identity.tokenIdentifier))
			.collect();
	},
});

export const getById = query({
	args: {
		_id: v.string(),
	},
	handler: async (ctx, args) => {
		if (!args._id) {
			return null;
		}

		const identity = await ctx.auth.getUserIdentity();

		if (identity === null) {
			return null;
		}

		return await
			ctx.db
				.query('decisions')
				.filter((q) => q.eq(q.field('_id'), args._id))
				.filter((q) => q.eq(q.field('userTokenIdentifier'), identity.tokenIdentifier))
				.first();
	}
});

export const add = mutation({
	args: {
		decision: v.string(),
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();

		if (identity === null) {
			throw new Error('Called addDecision without authentication present');
		}

		return await ctx.db.insert('decisions', {
			decision: args.decision,
			userTokenIdentifier: identity.tokenIdentifier,
		});
	}
});

export const edit = mutation({
	args: {
		_id: v.id('decisions'),
		decision: v.string(),
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();

		if (identity === null) {
			throw new Error('Called editDecision without authentication present');
		}

		return await ctx.db.patch(args._id, {
			decision: args.decision,
		});
	}
});

export const deleteById = mutation({
	args: {
		_id: v.id('decisions'),
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();

		if (identity === null) {
			throw new Error('Called deleteDecision without authentication present');
		}

		const optionsWithDecisionId = await ctx.db
			.query('options')
			.withIndex('by_decision_id_and_user_token', (q) =>
				q.eq('decisionId', args._id).eq('userTokenIdentifier', identity.tokenIdentifier)
			)
			.collect();

		optionsWithDecisionId.forEach(async (option) => {
			ctx.db.delete(option._id).catch((err) => {
				throw new Error('Error deleting option');
			});
		});

		await ctx.db.delete(args._id);
	}
});