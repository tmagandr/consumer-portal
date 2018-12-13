export interface SelectOption {
  label: string;
  value: any;
}

export const locationOptions: SelectOption[] = [
  { label: "On-Shore", value: "onshore" },
  { label: "Offshore", value: "offshore" }
];

export const teamOptions: SelectOption[] = [
  { label: "Sam", value: "sam" },
  { label: "Thiru", value: "thiru" }
];

export const appOptions: SelectOption[] = [
  { label: "EP", value: "ep" },
  { label: "Enterprise", value: "enterprise" },
  { label: "RCP", value: "RCP" },
  { label: "PF", value: "PF" }
];

export const companyOptions: SelectOption[] = [
  { label: "Ameren", value: "ameren" },
  { label: "Ameren 2", value: "ameren2" }
];


export const managerOptions: SelectOption[] = [
  { label: "Sam", value: "sam" },
  { label: "Thiru", value: "thiru" }
];
