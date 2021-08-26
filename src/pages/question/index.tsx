import Question from "../../components/question";
import Example from "../../components/example";
import styles from './questions.module.css';

const Questions = () => {
  return (
    <main className={styles.questions}>
      <Question />
      <Example />
    </main>
  )
}

export default Questions
