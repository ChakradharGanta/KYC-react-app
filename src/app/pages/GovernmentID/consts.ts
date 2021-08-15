export interface IdType {
  id: string;
  type: string;
  front: string;
  back: string;
}

export const GOVT_IDS: IdType[] = [
  { id: 'aadhar', type: 'Aadhar', front: 'aadhaar-front.png', back: 'aadhaar-back.png' },
  { id: 'pan', type: 'PAN', front: 'panFront.png', back: 'panBack.png' },
  {
    id: 'license',
    type: 'Driving License',
    front: 'driverLicense1.png',
    back: 'driverLicense2.png',
  },
  { id: 'passport', type: 'Passport', front: 'passportFront.png', back: 'passportFront.png' },
  { id: 'voterid', type: 'Voter ID', front: 'voterIdFront.png', back: 'voterIdBack.png' },
];
