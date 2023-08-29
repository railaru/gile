import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const getByDecisionId = query({
    args: {
        decisionId: v.id('decisions'),
    },
    handler: async (ctx, args) => {
        if ( !args.decisionId) {
            return null;
        }

        const identity = await ctx.auth.getUserIdentity();

        if (identity === null) {
            return null;
        }

        return await ctx.db.query('options')
        .filter((q) => q.eq(q.field('decisionId'), args.decisionId))
        .collect();
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

        return await ctx.db.insert('options', args);
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