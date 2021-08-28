import { ProblemData } from '../../pages/question/[problemId]';
import styles from './question.module.css';

type ExampleLine = string[];
type ExampleLines = ExampleLine [];

const Question = ({question: questionData}: {question: ProblemData}) => {
  const {id, type, title, description, question, answer, example } = questionData;

  const exampleLines: ExampleLines  = [];
  const exampleDataArray = example.data.split('{');
  exampleDataArray.forEach((exampleToken, index) => {
    const trimToken = exampleToken.trim();
    if (index === 0) {
      exampleLines.push([trimToken, '{']);
    } else {
      trimToken.split(';').forEach(trimLine => {
        exampleLines.push(trimLine.split(':'));
      })
    }
  });

  const qData = question.data.split(';').filter(v => v);
  const inputLength = answer.length * 16 + 'px';
  const lBracket = `{`;
  const rBracket = `}`;
  return (
    <article className={styles.question}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.main}>
        <p className={styles.description}>{description}</p>
        <div className={styles.codeExample}>
          { exampleLines.map((exampleLine, index) => {
              return (
                <p className={styles.exampleLine} key={index}>
                  <span  className={styles.codeIndex}>{index}</span>
                  {
                      exampleLine.map((exampleToken, idx) => {
                        const isStart = idx === 0;
                        const tirmToken = exampleToken.trim();
                        const isBracket = tirmToken === '{' || tirmToken === '}';
                        let classText;
                        if (index === 0 && idx === 0) {
                          classText = styles.selector;
                        } else if  (isBracket) {
                          classText = styles.bracket;
                        } else {
                          classText = isStart ? styles.keys : styles.values
                        }
                        return (
                          <span className={classText} key={exampleToken}>
                            {exampleToken}
                          </span>
                        )
                      })
                  }
                </p>
              )
          })}
        </div>
        <p className={styles.questionText}>{question.title}</p>
        <div className={styles.codeExample}>
          <span  className={styles.codeIndex}>0</span>
          <input type="text" style={{width: inputLength}} />
          { lBracket }
          { qData.map((v, idx) => {
            return <p key={v}>
              <span  className={styles.codeIndex}>{idx+1}</span>
              {
                 v.split(':').map((token, index) => {
                  return (
                    <span className={index === 0 ? styles.keys : styles.values} key={token}>
                      {token}
                    </span>
                  )
                })
              }
            </p>
            })}
            <p>
              <span  className={styles.codeIndex}>{qData.length + 1}</span>
              <span>{rBracket}</span>
            </p>
        </div>
      </div>
    </article>
  )
}

export default Question;