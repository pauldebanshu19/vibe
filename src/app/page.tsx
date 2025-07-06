import { useTRPC } from "@/trpc/client";

const Page = async () => {
  const trpc = useTRPC();
  trpc.createAI.queryOptions({ text: "Hello!" });

  // localhost:3000/api/create-ai?body={"text":"Hello!"}

  return (
    <div>
      Hello World
    </div>
  );
}

export default Page;