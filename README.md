<div align='center'>
    <h1 align='center'>AI Journal</h1>
    <h3>Your Personal Journal with the boost of AI to analyze your mood along a day, week, month and year</h3>
</div>

<div align='center'>
    <a href="">AI Journal</a>
</div>

<div align='center'>
    <a href="https://twitter.com/Yashcsp22"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/Yashcsp22"></a>
</div>

<br/>

## Tech Stack

- [React](https://react.dev/) - Library for Frontend
- [Typescript](https://www.typescriptlang.org/) – Language
- [Tailwind](https://tailwindcss.com/) – CSS
- [Next.js](https://nextjs.org/) - Full Stack Framework
- [PostgreSQL](https://neon.tech/) - Database
- [Prisma](https://www.prisma.io/) - ORM
- [Clerk](https://clerk.com/) - authentication

## Additional Info

Best way to instantiate Prisma with Next.js

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

- [Langchain](https://js.langchain.com/docs/get_started/introduction) is the number one framework for using AI or LLMs. It is like an SDK for LLMs.
- Temperature = 0 more factual, = 1 more creative
