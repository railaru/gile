import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	decisions: defineTable({
		decision: v.string(),
		userTokenIdentifier: v.string(),
	}),
	options: defineTable({
		decisionId: v.id('decisions'),
		userTokenIdentifier: v.string(),
		title: v.string(),
		ratings: v.object({
			financialCost: v.number(),
			levelOfEffort: v.number(),
			timeInvestment: v.number(),
			risk: v.number(),
			shortTermReturn: v.number(),
			longTermReturn: v.number(),
		})
	}).index('by_decision_id_and_user_token', ['decisionId', 'userTokenIdentifier']),
	users: defineTable({
		name: v.string(),
		tokenIdentifier: v.string(),
	}).index('by_token', ['tokenIdentifier']),
});