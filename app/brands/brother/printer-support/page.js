import BrandCustomerServicePage from '@/app/components/BrandCustomerServicePage';
import { brandCustomerServiceMetadata } from '@/lib/brandSupport';

export const metadata = brandCustomerServiceMetadata('brother');
export const dynamic = 'force-static';
export const revalidate = 3600;

export default function BrotherPrinterSupport() {
  return <BrandCustomerServicePage brand="brother" />;
}
