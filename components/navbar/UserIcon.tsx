import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;
  console.log(user);
  return <div>Hello {user?.firstName}</div>;
}
