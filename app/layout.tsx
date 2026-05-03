'use client'
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Layout } from 'antd'
import Navigation from '@/components/Navigation'
import FloatContact from '@/components/FloatContact'
import MyFoorter from '@/components/Foorter'
import 'antd/dist/reset.css'

const { Header, Content } = Layout

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      {/* <AntdRegistry>{children}</AntdRegistry> */}

      <AntdRegistry>
        <Layout style={{ minHeight: '100vh' }}>
          <Header>
            <Navigation />
          </Header>
          <Content >
            {children}
          </Content>
          <FloatContact />
          <MyFoorter />
        </Layout>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;