import { Sandbox } from "@e2b/code-interpreter";
import { gemini, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";
import { getSandbox } from "./util";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandox-id", async () => {
      const sandbox = await Sandbox.create("vibe-nextjs-development-2");
      return sandbox.sandboxId;
    });  

    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert nextjs developer. You write readable, maintainable code. You write simple Next.js & React snippets.",
      model: gemini({ model: "gemini-1.5-flash-8b" }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`,
    );

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `https://${host}`;
    })  

    return { output };
  },
);
