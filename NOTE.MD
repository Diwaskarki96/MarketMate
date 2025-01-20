# Prisma

npm install prisma --save-dev
npm install @prisma/client

- create utils/db.ts

````ts
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

### Connect Supabase with Prisma

[Useful Info](https://supabase.com/partners/integrations/prisma)

- add to .env

```bash
DATABASE_URL=""
DIRECT_URL=""
````

- DATABASE_URL : Transaction + Password + "?pgbouncer=true&connection_limit=1"
- DIRECT_URL : Session + Password

```prisma
datasource db {
  provider          = "postgresql"
  url               = env("DATABASE_URL")
  directUrl         = env("DIRECT_URL")
}

generator client {
  provider = "prisma-client-js"
}

model TestProfile {
id  String @id @default(uuid())
name String

```

- npx prisma migrate dev --name init
- npx prisma db push
  (NOTE:- for not production or not just for this project, we can use this npx prisma db push )

npx prisma migrate dev --name init creates a new migration for your database schema
changes and applies it, while npx prisma db push directly updates the database schema without creating a migration. In the context of databases, a migration is set of operations, that modify the database schema, helping it evolve over time while preserving existing data.

if no error, is shows Generated Prisma Client,

npx prisma studio

(opens a new tab localhost:5555)

# CRUD in prisma

- Create Single Record

```js
const task = await prisma.task.create({
  data: {
    content: "some task",
  },
});
```

- Get All Records

```js
const tasks = await prisma.task.findMany();
```

- Get record by ID or unique identifier

```js
// By unique identifier
const user = await prisma.user.findUnique({
  where: {
    email: "elsa@prisma.io",
  },
});

// By ID
const task = await prisma.task.findUnique({
  where: {
    id: id,
  },
});
```

- Update Record

```js
const updateTask = await prisma.task.update({
  where: {
    id: id,
  },
  data: {
    content: "updated task",
  },
});
```

- Update or create records

```js
const upsertTask = await prisma.task.upsert({
  where: {
    id: id,
  },
  update: {
    content: "some value",
  },
  create: {
    content: "some value",
  },
});
```

- Delete a single record

```js
const deleteTask = await prisma.task.delete({
  where: {
    id: id,
  },
});
```

# Group (while using hover)

The group class is added to a parent element to enable hover or focus effects on its child elements.
Use group-hover or group-focus in the child element to apply styles when the parent is hovered or focused.
Example:

<div className="group hover:bg-gray-200">
  <p className="group-hover:text-gray-800">Hover me!</p>
</div>

# Loader

just create a file loading.tsx inside app folder

test github push
another test

# OR in Querying(database):

export const fetchAllProducts = ({ search = "" }: { search: string }) => {
return db.product.findMany({
where: {
OR: [{ name: { contains: search, mode: "insensitive" } }],
},
orderBy: {
createdAt: "desc",
},
});
};

1. OR is used to combine multiple conditions.
2. OR becomes useful when you want to check for multiple conditions, for example, searching by both name and description.
3. if only one condition like name, OR is not required.
4. mode: "insensitive": This makes the search case-insensitive. So, if search is "apple", it would match names like "Apple", "APPLE", "aPpLe", etc., regardless of letter case.
