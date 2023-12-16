'use client';
import { Alert, Button, ConfigProvider, Typography, Input } from 'antd';
import ThemeConfig from '@/theme/themeConfig';
import locale from 'antd/locale/zh_CN';
import Demo from '@/components/demo/index';

export default function Home() {
  return (
    <section>
      <div id="root">
        <ConfigProvider
          locale={locale}
          componentSize="small"
          theme={ThemeConfig}
        >
          <Demo />
        </ConfigProvider>
      </div>
    </section>
  );
}
