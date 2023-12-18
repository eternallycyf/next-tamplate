'use client';
import { Alert, Button, ConfigProvider, Typography, Input } from 'antd';
import ThemeConfig from '@/theme/themeConfig';
import locale from 'antd/locale/zh_CN';
import Demo from '@/components/demo/index';
import Link from 'next/link';
import HelloWorld from './hello-world/page.mdx';

export default function Home() {
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
          <Demo />
        </ConfigProvider>
      </div>
    </section>
  );
}
