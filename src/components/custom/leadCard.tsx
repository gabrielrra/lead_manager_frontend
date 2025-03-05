import { MapPin, Briefcase } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Lead } from "@/types/lead";

export interface LeadProps {
  lead: Lead;
}

export function LeadCard(props: LeadProps) {
  const { name, location, category, description, createdAt, jobId } =
    props.lead;
  const avatarFallback = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toLocaleUpperCase();
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="/placeholder.svg?height=48&width=48"
              alt="User avatar"
            />
            <AvatarFallback className="bg-slate-300 dark:bg-slate-500">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{createdAt}</CardDescription>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span>{category}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Job ID: {jobId}</span>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-row space-x-2">
        <Button variant="default">Accept</Button>
        <Button variant="outline">Decline</Button>
      </CardFooter>
    </Card>
  );
}
