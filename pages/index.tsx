import type { NextPage } from 'next'
import Head from 'next/head'
import Intro from '../components/intro'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CSS Practice</title>
        <meta name="description" content="CSS에 대한 문제를 풀어보는 사이트 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
    </div>
  )
}

export default Home
