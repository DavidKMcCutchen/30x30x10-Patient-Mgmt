export interface Patient {
  id: string;
  name: string;
  dob: string;
  address: string;
  zip: string;
  insurance: boolean;
};

export const emptyPatient = {
  id: '',
  name: '',
  dob: '',
  address: '',
  zip: '',
  insurance: false
};