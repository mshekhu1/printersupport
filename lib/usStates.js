// US States data for SEO pages
export const US_STATES = [
  { name: 'Alabama', code: 'al', abbreviation: 'AL' },
  { name: 'Alaska', code: 'ak', abbreviation: 'AK' },
  { name: 'Arizona', code: 'az', abbreviation: 'AZ' },
  { name: 'Arkansas', code: 'ar', abbreviation: 'AR' },
  { name: 'California', code: 'ca', abbreviation: 'CA' },
  { name: 'Colorado', code: 'co', abbreviation: 'CO' },
  { name: 'Connecticut', code: 'ct', abbreviation: 'CT' },
  { name: 'Delaware', code: 'de', abbreviation: 'DE' },
  { name: 'Florida', code: 'fl', abbreviation: 'FL' },
  { name: 'Georgia', code: 'ga', abbreviation: 'GA' },
  { name: 'Hawaii', code: 'hi', abbreviation: 'HI' },
  { name: 'Idaho', code: 'id', abbreviation: 'ID' },
  { name: 'Illinois', code: 'il', abbreviation: 'IL' },
  { name: 'Indiana', code: 'in', abbreviation: 'IN' },
  { name: 'Iowa', code: 'ia', abbreviation: 'IA' },
  { name: 'Kansas', code: 'ks', abbreviation: 'KS' },
  { name: 'Kentucky', code: 'ky', abbreviation: 'KY' },
  { name: 'Louisiana', code: 'la', abbreviation: 'LA' },
  { name: 'Maine', code: 'me', abbreviation: 'ME' },
  { name: 'Maryland', code: 'md', abbreviation: 'MD' },
  { name: 'Massachusetts', code: 'ma', abbreviation: 'MA' },
  { name: 'Michigan', code: 'mi', abbreviation: 'MI' },
  { name: 'Minnesota', code: 'mn', abbreviation: 'MN' },
  { name: 'Mississippi', code: 'ms', abbreviation: 'MS' },
  { name: 'Missouri', code: 'mo', abbreviation: 'MO' },
  { name: 'Montana', code: 'mt', abbreviation: 'MT' },
  { name: 'Nebraska', code: 'ne', abbreviation: 'NE' },
  { name: 'Nevada', code: 'nv', abbreviation: 'NV' },
  { name: 'New Hampshire', code: 'nh', abbreviation: 'NH' },
  { name: 'New Jersey', code: 'nj', abbreviation: 'NJ' },
  { name: 'New Mexico', code: 'nm', abbreviation: 'NM' },
  { name: 'New York', code: 'ny', abbreviation: 'NY' },
  { name: 'North Carolina', code: 'nc', abbreviation: 'NC' },
  { name: 'North Dakota', code: 'nd', abbreviation: 'ND' },
  { name: 'Ohio', code: 'oh', abbreviation: 'OH' },
  { name: 'Oklahoma', code: 'ok', abbreviation: 'OK' },
  { name: 'Oregon', code: 'or', abbreviation: 'OR' },
  { name: 'Pennsylvania', code: 'pa', abbreviation: 'PA' },
  { name: 'Rhode Island', code: 'ri', abbreviation: 'RI' },
  { name: 'South Carolina', code: 'sc', abbreviation: 'SC' },
  { name: 'South Dakota', code: 'sd', abbreviation: 'SD' },
  { name: 'Tennessee', code: 'tn', abbreviation: 'TN' },
  { name: 'Texas', code: 'tx', abbreviation: 'TX' },
  { name: 'Utah', code: 'ut', abbreviation: 'UT' },
  { name: 'Vermont', code: 'vt', abbreviation: 'VT' },
  { name: 'Virginia', code: 'va', abbreviation: 'VA' },
  { name: 'Washington', code: 'wa', abbreviation: 'WA' },
  { name: 'West Virginia', code: 'wv', abbreviation: 'WV' },
  { name: 'Wisconsin', code: 'wi', abbreviation: 'WI' },
  { name: 'Wyoming', code: 'wy', abbreviation: 'WY' },
];

export function getStateByCode(code) {
  return US_STATES.find(state => state.code === code.toLowerCase());
}

export function getStateByName(name) {
  return US_STATES.find(state => state.name.toLowerCase() === name.toLowerCase());
}

