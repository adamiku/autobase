import prisma from "@/lib/database";

export default async function Page() {
  const users = await prisma.user.findMany();

  return (
    <div className="text-red-500 min-h-screen flex items-center justify-center">
      {JSON.stringify(users, null, 2)}
    </div>
  );
}
