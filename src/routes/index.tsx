import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadCard } from "@/components/custom/leadCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { fetchInvitedLeads, updateLead } from "@/lib/api/lead";
import { queryClient } from "./__root";
import { LeadStatus } from "@/types/lead";

const invitedLeadsQuery = queryOptions({
  queryKey: ["leads", "invited"],
  queryFn: () => fetchInvitedLeads(LeadStatus.INVITED),
});

const acceptedLeadsQuery = queryOptions({
  queryKey: ["leads", "accepted"],
  queryFn: () => fetchInvitedLeads(LeadStatus.ACCEPTED),
});

export const Route = createFileRoute("/")({
  loader: () =>
    Promise.all([
      queryClient.ensureQueryData(invitedLeadsQuery),
      queryClient.ensureQueryData(acceptedLeadsQuery),
    ]),
  component: HomeComponent,
});

function HomeComponent() {
  const { data: invitedLeads } = useSuspenseQuery(invitedLeadsQuery);
  const { data: acceptedLeads } = useSuspenseQuery(acceptedLeadsQuery);

  async function onAcceptLead(leadId: number) {
    await updateLead(leadId, { status: LeadStatus.ACCEPTED });
    queryClient.invalidateQueries({ queryKey: ["leads"] });
  }
  async function onRejectLead(leadId: number) {
    await updateLead(leadId, { status: LeadStatus.REJECTED });
    queryClient.invalidateQueries({ queryKey: ["leads"] });
  }

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
              {invitedLeads.map((lead) => (
                <LeadCard key={lead.id} lead={lead} onAccept={onAcceptLead} onReject={onRejectLead} />
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
            <div className="space-y-4">
              {acceptedLeads.map((lead) => (
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  onAccept={onAcceptLead}
                  isInvited={false}
                />
              ))}
            </div>
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
