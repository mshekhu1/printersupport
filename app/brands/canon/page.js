import BrandHubPage from '@/app/components/BrandHubPage';
import { brandHubMetadata } from '@/lib/brandSupport';

export const metadata = brandHubMetadata('canon');
export const dynamic = 'force-static';
export const revalidate = 3600;

export default function CanonBrandPage() {
  return <BrandHubPage brand="canon" />;
}
