# Free P2P Video Chat (Omegle-like)

This is a simple open-source demo of a one-to-one random peer video chat using Next.js (App Router), WebRTC and Socket.io for signaling.

Features
- Random one-to-one matching (in-memory queue)
- Peer-to-peer video (WebRTC via simple-peer)
- Start / Next / Stop buttons
- Auto cleanup on disconnect/tab close
 - Improved responsive UI with status indicator and controls (Mute / Camera toggle)

System requirements
- Node.js 18+ (for Next.js 16+)

Running locally

1. Install deps

   npm install

2. Start the signaling server and the Next dev server (either separately):

   npm run dev:signaling
   npm run dev

   Or in one terminal using the helper script:

   npm run dev:all

3. Open http://localhost:3000 in two different browsers or tabs, click Start in both and you should be randomly paired.

Notes
- This demo uses STUN servers only (no TURN). For NAT traversal in restrictive networks, TURN may be required.
- No authentication or database; pairing is ephemeral and stored in-memory on the signaling server.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# vchat
