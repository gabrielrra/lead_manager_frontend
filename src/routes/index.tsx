import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadCard } from "@/components/custom/leadCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { fetchInvitedLeads } from "@/lib/api/lead";
import { queryClient } from "./__root";

const postsQueryOptions = queryOptions({
  queryKey: ["leads"],
  queryFn: () => fetchInvitedLeads(),
});

export const Route = createFileRoute("/")({
  loader: () => queryClient.ensureQueryData(postsQueryOptions),
  component: HomeComponent,
});

function HomeComponent() {
  const { data: leads } = useSuspenseQuery(postsQueryOptions);

  console.log({ leads });

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden p-4">
      <Tabs defaultValue="invited" className="w-[600px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="invited">Invited</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
        </TabsList>
        <TabsContent value="invited" className="w-full">
          <ScrollArea className="h-[600px] space-y-4 rounded-md border bg-accent p-4">
            <div className="space-y-4">
              {leads.map((lead) => (
                <LeadCard key={lead.id} lead={lead} />
              ))}
            </div>
            <ScrollBar
              orientation="vertical"
              className="rounded-md bg-slate-300 dark:bg-slate-500"
            />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="accepted">
          <ScrollArea className="h-[600px] space-y-4 rounded-md border bg-accent p-4">
            <div className="space-y-4"></div>
            <ScrollBar
              orientation="vertical"
              className="rounded-md bg-slate-300 dark:bg-slate-500"
            />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
