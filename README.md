## What is this project about?

By using Sequence SDK and Next Auth, we can create a special session within our DApp which is different from the traditional login method like email and password.

## What is Sequence?

Sequence is the all-in-one development platform for building web3 games. Easily incorporate web3 into your game to onboard, monetize, grow, and retain your players with our industry-leading technology.

From collectibles and ownable rewards to fully on-chain experiences, Sequence’s modular stack solves technical challenges, allowing developers to concentrate on creative execution using our solutions: 
+ Sequence Builder
+ seamless smart wallet solutions
+ Marketplaces,
+ Minter
+ Payments
+ Indexer
+ Gas Tank and Relayer 
+ Node Gateway,
SDKs for mobile, Unity, and Unreal Engine, and more. 

Check out [their Media Kit](https://40061393.fs1.hubspotusercontent-na1.net/hubfs/40061393/Sequence%20Media%20Kit%202024.pdf)

We can definitely use other service providers such as Firebase, Hex Trust, BitGo, etc to build our DApp, however, they are enterprise level service providers which do not provide any free trial or sandbox. As a DApp developer, I think Sequence can provide a lot of features we want, especially the basic functions like Wallet Generation, Marketplace APIs, Payments. Authentication and authorisation will be done on Sequence and the sessions will be returned to the client (our Dapp), this significantly reduces the time of work just to make our own account authentication and authorisation.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
