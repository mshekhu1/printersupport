# vchat (Omegle clone)

Local run instructions

1. Install dependencies

```bash
npm install
```

2. Start the signaling server (local dev)

```bash
npm run signaling
```

This starts the signaling server on port 4000 by default. You can override using `PORT`, e.g.

```bash
PORT=5000 npm run signaling
```

3. Start the Next.js app

```bash
NEXT_PUBLIC_SOCKET_SERVER=http://localhost:4000 npm run dev
```

Open two browser windows (or an incognito window) and navigate to `http://localhost:3000`. Click Start Chatting in both and verify webcam and connection.

Notes
- The client uses `NEXT_PUBLIC_SOCKET_SERVER` to determine where to connect for signaling (defaults to the deployed server if not set).
- If you run Next and the signaling server on the same machine, prefer the local server for faster feedback.
- If you want a production server, deploy the `app/server.ts` code to a server environment and set `NEXT_PUBLIC_SOCKET_SERVER` accordingly.
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
# chat
