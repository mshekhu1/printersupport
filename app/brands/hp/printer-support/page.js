import BrandCustomerServicePage from '@/app/components/BrandCustomerServicePage';
import { brandCustomerServiceMetadata } from '@/lib/brandSupport';

export const metadata = brandCustomerServiceMetadata('hp');
export const dynamic = 'force-static';
export const revalidate = 3600;

export default function HPPrinterSupport() {
  return <BrandCustomerServicePage brand="hp" />;
}
