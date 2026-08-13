/** Canonical public authors for E-E-A-T consistency */
export const SITE_AUTHORS = {
  team: {
    name: 'ZamZam Print Support',
    role: 'US Remote Printer Technicians',
    display: 'ZamZam Print Support, US Remote Printer Technicians',
  },
  hp: {
    name: 'James Parker',
    role: 'HP Printer Specialist',
    display: 'James Parker, HP Printer Specialist',
  },
  canon: {
    name: 'Victoria Lee',
    role: 'Canon Printer Specialist',
    display: 'Victoria Lee, Canon Printer Specialist',
  },
  brother: {
    name: 'Michael Roberts',
    role: 'Brother Printer Specialist',
    display: 'Michael Roberts, Brother Printer Specialist',
  },
  epson: {
    name: 'Rachel Kim',
    role: 'Epson Printer Specialist',
    display: 'Rachel Kim, Epson Printer Specialist',
  },
};

export function authorForSlug(slug = '') {
  const s = slug.toLowerCase();
  if (s.includes('hp')) return SITE_AUTHORS.hp;
  if (s.includes('canon')) return SITE_AUTHORS.canon;
  if (s.includes('brother')) return SITE_AUTHORS.brother;
  if (s.includes('epson')) return SITE_AUTHORS.epson;
  return SITE_AUTHORS.team;
}

export const TEAM_BIOS = [
  {
    name: 'James Parker',
    role: 'HP Printer Specialist',
    blurb: 'Handles HP Smart, DeskJet/OfficeJet offline, and driver installs daily.',
  },
  {
    name: 'Victoria Lee',
    role: 'Canon Printer Specialist',
    blurb: 'Pixma setup, B200 diagnosis, and wireless Canon installs.',
  },
  {
    name: 'Michael Roberts',
    role: 'Brother Printer Specialist',
    blurb: 'Brother iPrint&Scan conflicts, offline ports, and small-office fleets.',
  },
];
