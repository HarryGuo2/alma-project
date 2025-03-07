export interface Lead {
  id: number;
  name: string;
  email: string;
  country: string;
  state: "PENDING" | "REACHED_OUT";
  submittedAt: string;
} 