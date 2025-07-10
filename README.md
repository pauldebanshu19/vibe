# Vibe Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

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

## Environment Variables

Create a `.env` file in the root directory and add the following:

```
DATABASE_URL=your_database_url
NEXT_PUBLIC_APP_URL=http://localhost:3000
GEMINI_API_KEY=your_openai_api_key
```

- Ensure your `OPENAI_API_KEY` is a single line with no quotes or line breaks.
- Restart your dev server after updating `.env`.

## E2B Sandbox Template

This project includes an E2B sandbox template for isolated Next.js environments.

- Dockerfile: `sandbox-templates/nextjs/e2b.Dockerfile`
- Config: `sandbox-templates/nextjs/e2b.toml`

To build the sandbox template:

```bash
e2b template build --alias your-unique-alias
```

- The alias must be unique. If you see an error about the alias already being used, change it in the command or in `e2b.toml`.
- If the build fails, check the logs for details or try building the Dockerfile locally with:
  ```
  docker build -f sandbox-templates/nextjs/e2b.Dockerfile .
  ```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
