import BrandCustomerServicePage from '@/app/components/BrandCustomerServicePage';
import { brandCustomerServiceMetadata } from '@/lib/brandSupport';

export const metadata = brandCustomerServiceMetadata('canon');
export const dynamic = 'force-static';
export const revalidate = 3600;

export default function CanonCustomerService() {
  return <BrandCustomerServicePage brand="canon" />;
}
