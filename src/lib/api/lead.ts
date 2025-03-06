import { Lead, LeadStatus } from '@/types/lead';

const apiRoute = `${import.meta.env.VITE_API_URL}/lead`;

export async function fetchInvitedLeads(status: LeadStatus): Promise<Lead[]> {
  const res = await fetch(`${apiRoute}?status=${status}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json() as unknown as Lead[];
}

export async function updateLead(id: number, data: Partial<Lead>): Promise<Lead> {
  const res = await fetch(`${apiRoute}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status: data.status }),
  });
  return res.json() as unknown as Lead;
}

export async function generateFakeLeads() {
  const res = await fetch(`${apiRoute}/fake`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quantity: 10,
    }),
  });
  return res;
}
