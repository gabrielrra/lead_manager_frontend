export interface Lead {
  id: number;
  name: string;
  location: string;
  category: string;
  description: string;
  createdAt: string;
  jobId: string;
  price?: number;
}
// { "id": 1, "name": "John Doe", "location": "New York", "category": "Plumbing", "description": "Bathroom remodeling project", "createdAt": "2025-03-06T11:16:16.5646315", "jobId": "JOB-2023-001", "price": 2500; }
