'use client'
import { Layout } from 'antd'
import type { CSSProperties } from 'react'
const { Header, Footer, Content } = Layout
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import MyFoorter from '../components/Foorter'

// const headerStyle: CSSProperties = {
//   textAlign: 'center',

//   height: 64,
//   lineHeight: '64px',
// }

// // const contentStyle: CSSProperties = {
// //   textAlign: 'center',
// //   minHeight: 'calc(100vh - 128px)', // 减去 header + footer
// // }

// const footerStyle: CSSProperties = {
//   textAlign: 'center',

// }

export default function Home() {
  return (
    // <Layout style={{ minHeight: '100vh' }}>
    //   <Header>
    //     <Navigation />
    //   </Header>
    //   <Content >
    //     <Banner />
    //   </Content>
    //   <MyFoorter />
    // </Layout>
    <div>
      <Banner />
    </div>
  )
}