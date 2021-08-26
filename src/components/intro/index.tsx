import Link from 'next/link';
import styles from './intro.module.css'

const Intro = () => {
  return (
    <main className={styles.intro}>
        <p>같이 문제를 풀어용 ㅎㅅㅎ</p>
        <Link href="/question">
          <a>다음 페이지로</a>
        </Link>
    </main>
  )
}

export default Intro;
