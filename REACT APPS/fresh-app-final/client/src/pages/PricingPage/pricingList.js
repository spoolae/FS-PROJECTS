const pricingList = [
  {
    name: 'Bronze',
    description: 'Branding on a budget',
    price: 'US$299',
    prize: 'Prize to Winner - $135 (Included)',
    validationValue: 'Validation Services & Upgrades ($39 value)',
    validationBenefits: ['Matching .com URL'],
    entries: 'Expected 300+ Entries',
    option: '',
    isManaged: false,
    color: 'bronze',
  },
  {
    name: 'Gold',
    description: 'Increase participation and basic brand validation',
    price: 'US$449',
    prize: 'Prize to Winner - $200 (Included)',
    validationValue: 'Validation Services & Upgrades ($305 value)',
    validationBenefits: [
      'Matching .com URL',
      'Instant Trademark Check (One Database)',
      'NDA and More Privacy',
      'Project Promotion (Basic)',
      'Comprehensive Trademark Research',
    ],
    entries: 'Expected 600+ Entries',
    option: 'Partial Refund Option',
    isManaged: false,
    color: 'gold',
  },
  {
    name: 'Platinum',
    description:
      'Work with top-level creatives, plus agency-style brand validation',
    price: 'US$749',
    prize: 'Prize to Winner - $300 (Included)',
    validationValue: 'Validation Services & Upgrades ($979 value)',
    validationBenefits: [
      'Audience Testing (Up to 6 Names)',
      'Comprehensive Trademark Research (3 Names)',
      'Linguistics Analysis (3 Names)',
      'Tier A Creatives',
      'Matching .com URL',
      'Instant Trademark Check (4 Databases)',
      'NDA and More Privacy',
      'Enhanced Project Promotion',
      'Team Collaboration Tools',
    ],
    entries: 'Expected 1000+ Entries',
    option: 'Partial Refund Option',
    isManaged: false,
    color: 'platinum',
  },
  {
    name: 'Managed',
    description: 'A full agency experience without the agency price tag',
    price: 'US$1499',
    prize: '',
    validationValue: '',
    validationBenefits: [],
    entries: '',
    option: '',
    isManaged: true,
    color: 'cyan',
  },
];

export default pricingList;