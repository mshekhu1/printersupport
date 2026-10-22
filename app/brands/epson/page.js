import BrandHubPage from '@/app/components/BrandHubPage';
import { brandHubMetadata } from '@/lib/brandSupport';

export const metadata = brandHubMetadata('epson');
export const dynamic = 'force-static';
export const revalidate = 3600;

export default function EpsonBrandPage() {
  return <BrandHubPage brand="epson" />;
}
