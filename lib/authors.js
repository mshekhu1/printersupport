/** Canonical public authors for E-E-A-T consistency */
export const SITE_AUTHORS = {
  team: {
    name: 'ZamZam Print Support',
    role: 'Independent remote printer support team',
    display: 'ZamZam Print Support',
  },
};

/** Always attribute posts to the company team — no invented brand specialists. */
export function authorForSlug() {
  return SITE_AUTHORS.team;
}

export const TEAM_BIOS = [
  {
    name: 'ZamZam Print Support',
    role: 'Independent remote printer support team',
    blurb:
      'US-based independent technicians helping with software, driver, and connectivity printer issues. Not affiliated with any manufacturer.',
  },
];
