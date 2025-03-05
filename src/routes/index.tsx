import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LeadCard } from "@/components/custom/leadCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Lead } from "@/types/lead";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const testLead: Lead = {
    name: "John Doe",
    location: "New York, NY",
    category: "Software Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel.",
    createdAt: "2021-09-01",
    jobId: "123456",
  };
  const testLead2: Lead = {
    name: "Gabriel Amorim",
    location: "New York, NY",
    category: "Another Category",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel.",
    createdAt: "2021-09-01",
    jobId: "123456",
  };
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
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
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
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
              <LeadCard lead={testLead} />
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
