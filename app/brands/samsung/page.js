import BrandHubPage from '@/app/components/BrandHubPage';
import { brandHubMetadata } from '@/lib/brandSupport';

export const metadata = brandHubMetadata('samsung');
export const dynamic = 'force-static';
export const revalidate = 3600;

export default function SamsungBrandPage() {
  return <BrandHubPage brand="samsung" />;
}
