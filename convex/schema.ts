import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    decisions: defineTable({ decision: v.string(), userTokenIdentifier: v.string(), }),
    users: defineTable({
        name: v.string(),
        tokenIdentifier: v.string(),
    }).index('by_token', ['tokenIdentifier']),
});