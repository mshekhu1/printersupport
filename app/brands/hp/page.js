import BrandHubPage from '@/app/components/BrandHubPage';
import { brandHubMetadata } from '@/lib/brandSupport';

export const metadata = brandHubMetadata('hp');
export const dynamic = 'force-static';
export const revalidate = 3600;

export default function HPBrandPage() {
  return <BrandHubPage brand="hp" />;
}
