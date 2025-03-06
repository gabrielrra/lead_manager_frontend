import { Lead } from '@/types/lead';

const apiRoute = `${import.meta.env.VITE_API_URL}/lead`;

export async function fetchInvitedLeads(): Promise<Lead[]> {
  const res = await fetch(apiRoute, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json() as unknown as Lead[];
}
