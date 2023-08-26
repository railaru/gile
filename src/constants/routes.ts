export const PAGE_ROUTES = {
    HOME: '/',
    SIGN_UP: '/sign-up',
    SIGN_IN: '/sign-in',
    DASHBOARD: '/dashboard',
    DECISIONS: {
        CREATE: '/decisions/create',
        DEFINE_OPTIONS: (id: string) => `/decisions/${id}/define-options`,
        EVALUATE_OPTIONS: (id: string) => `/decisions/${id}/evaluate-options`,
        TRADEOFFS: {
            INDEX: (id: string) => `/decisions/${id}/tradeoffs`,
            RISK_WEIGHTED_RETURN: (id: string) => `/decisions/${id}/tradeoffs#risk-weighted-return`,
            HIGH_REWARD_HIGH_RISK: (id: string) => `/decisions/${id}/tradeoffs#high-reward-high-risk`,
            LOW_HANGING_FRUIT: (id: string) => `/decisions/${id}/tradeoffs#low-hanging-fruit`,
        }
    },
};
