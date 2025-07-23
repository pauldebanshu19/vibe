"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { 
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
 } from "@/components/ui/resizable";

interface Props {
    projectId: string;
};

export const ProjectView = ({ projectId }:Props) => {
    const trpc = useTRPC();
    const { data: project } = useSuspenseQuery(trpc.projects.getOne.queryOptions({
        id: projectId,
    }))
    const { data: messages } = useSuspenseQuery(trpc.messages.getMany.queryOptions({
        projectId: projectId,
    }));
    

    return (
        <div className="h-screen">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    defaultSize={35}
                    minSize={20}
                    className="flex felx-col min-h-0"
                    >
                     {JSON.stringify(project)}
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel
                    defaultSize={65}
                    minSize={50}
                >
                    TODO: Preview
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};