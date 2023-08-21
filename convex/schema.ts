import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    decisions: defineTable({ decision: v.string() }),
});