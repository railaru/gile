import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

/**
 * Insert or update the user in a Convex table then return the document's ID.
 *
 * The `UserIdentity.tokenIdentifier` string is a stable and unique value we use
 * to look up identities.
 *
 * Keep in mind that `UserIdentity` has a number of optional fields, the
 * presence of which depends on the identity provider chosen. It's up to the
 * application developer to determine which ones are available and to decide
 * which of those need to be persisted. For Clerk the fields are determined
 * by the JWT token's Claims config.
 */
export const store = mutation({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if ( !identity) {
            throw new Error('Called storeUser without authentication present');
        }

        // Check if we've already stored this identity before.
        const user = await ctx.db
        .query('users')
        .withIndex('by_token', (q) =>
            q.eq('tokenIdentifier', identity.tokenIdentifier)
        )
        .unique();

        if (user !== null) {
            // If we've seen this identity before but the name has changed, patch the value.
            if (user.name !== identity.name) {
                await ctx.db.patch(user._id, { name: identity.name });
            }
            return user._id;
        }

        // If it's a create identity, create a create `User`.
        return await ctx.db.insert('users', {
            name: identity.name!,
            tokenIdentifier: identity.tokenIdentifier,
            description: '',
            interests: [],
        });
    },
});

export const update = mutation({
    args: {
        description: v.string(),
        interests: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if ( !identity) {
            throw new Error('Called updateUser without authentication present');
        }

        const user = await ctx.db
        .query('users')
        .withIndex('by_token', (q) =>
            q.eq('tokenIdentifier', identity.tokenIdentifier)
        )
        .first();

        if (user === null) {
            throw new Error('User not found');
        }

        console.log(args.interests);

        await ctx.db.patch(user._id, {
            description: args.description,
            interests: args.interests,
        });
    },
});


export const get = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (identity === null) {
            return null;
        }

        const users = await ctx.db.query('users').collect();

        const user = await ctx.db
        .query('users')
        .withIndex('by_token', (q) =>
            q.eq('tokenIdentifier', identity.tokenIdentifier)
        )
        .first();

        if (user === null) {
            return null;
        }

        return user;
    },
});