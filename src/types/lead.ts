// public enum LeadStatus
// {
//     Invited,
//     Accepted,
//     Rejected
// }

export enum LeadStatus {
  INVITED,
  ACCEPTED,
  REJECTED
}

export const LeadStatusLabels = {
  [LeadStatus.INVITED]: "Invited",
  [LeadStatus.ACCEPTED]: "Accepted",
  [LeadStatus.REJECTED]: "Rejected",
};

export interface Lead {
  id: number;
  name: string;
  location: string;
  category: string;
  description: string;
  createdAt: string;
  jobId: string;
  price?: number;
  status: number;
}
