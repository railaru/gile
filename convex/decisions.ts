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

export const deleteById = mutation({
    args: {
        _id: v.id('decisions'),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (identity === null) {
            throw new Error('Called deleteDecision without authentication present');
        }

        return await ctx.db.delete(args._id);
    }
});