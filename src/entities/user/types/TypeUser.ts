export type TypeUser = {
  id?: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  preferCity: string;
  programming: string[];
  position: string;
  avatar: File | null;
};
