This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

This is the source code for [gile.to](https://gile.to) project.

## Getting Started

This app uses the following third party services:

1. Clerk for authentication and user management.
2. Convex managed backend for data storage and cloud functions.
3. Vercel for hosting and deployment.
4. OpenAI for GPT API.

If you want to self host this app, you will need to create accounts with the above services and configure the app to use
your own credentials.

#### Once you have created accounts with the above services:

Add your .env secrets to `.env.local` file:

Copy `.env.template` to `.env.local` and fill in the values.

```bash
cp .env.template .env.local
```

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!





