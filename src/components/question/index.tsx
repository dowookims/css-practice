import { ProblemData } from '../../pages/question/[problemId]';
import styles from './question.module.css';


const Question = ({question: questionData}: {question: ProblemData}) => {
  const {id, type, title, description, question, answer } = questionData;
  return (
    <article className={styles.question}>
        <h2>{title}</h2>
        <p>
          <span>{id}</span>
          <span>{type}</span>
        </p>
        <p>{description}</p>
        <p>{question}</p>
    </article>
  )
}

export default Question;