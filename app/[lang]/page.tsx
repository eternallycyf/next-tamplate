import { Alert, Button, ConfigProvider, Typography, Input } from 'antd';
import ThemeConfig from '@/theme/themeConfig';
import locale from 'antd/locale/zh_CN';
import Link from 'next/link';
import HelloWorld from './hello-world/page.mdx';
import { getLocale } from '@/locale/utils';
import { Locale } from '@/i18n-config';
import LocaleSwitcher from './components/locale-switcher';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const localLocale = await getLocale(lang);
  return (
    <section>
      <div id="root">
        <ConfigProvider
          locale={locale}
          componentSize="small"
          theme={ThemeConfig}
        >
          <HelloWorld />
          <Link href="/proxy">proxy</Link>
          <LocaleSwitcher />
          {localLocale['server-component'].welcome}
        </ConfigProvider>
      </div>
    </section>
  );
}
