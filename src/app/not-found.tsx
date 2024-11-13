import BaseLayout from '@/components/base-layout';
import NotFoundBlock from '@/components/layouts/base/not-found-block';
import { routing } from '@/i18n/routing';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default async function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundBlock />
    </BaseLayout>
  );
}