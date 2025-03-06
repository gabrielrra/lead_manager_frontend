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
  isInvited?: boolean;
  onAccept?: (leadId: number) => void;
  onReject?: (leadId: number) => void;
}

export function LeadCard(props: LeadProps) {
  const { id, name, location, category, description, createdAt, jobId } =
    props.lead;
  let { onAccept, onReject, isInvited = true } = props;

  if (isInvited && !onAccept) {
    throw new Error("onAccept is required when isInvited is true");
  }

  const currentYear = new Date().getFullYear();
  const leadDate = new Date(createdAt);
  const createdAtStr = leadDate
    .toLocaleDateString(["pt-BR", "en-US"], {
      year: leadDate.getFullYear() === currentYear ? undefined : "numeric",
      month: "long",
      day: "numeric",
    })
    .concat(
      " @ ",
      leadDate.toLocaleTimeString(["pt-BR", "en-US"], {
        hour: "numeric",
        minute: "numeric",
      }),
    );
  const avatarFallback = name?.split(" ")[0][0].toLocaleUpperCase() || "?";
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            {/* <AvatarImage
              src="/placeholder.svg?height=48&width=48"
              alt="User avatar"
            /> */}
            <AvatarFallback className="bg-slate-300 dark:bg-slate-500">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{createdAtStr}</CardDescription>
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
      {isInvited && (
        <>
          <Separator />
          <CardFooter className="flex flex-row space-x-2">
            <Button variant="default" onClick={() => onAccept!(id)}>
              Accept
            </Button>
            <Button variant="outline" onClick={() => onReject!(id)}>
              Decline
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
