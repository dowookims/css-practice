import Question from "../../components/question";
import Example from "../../components/example";
import styles from './questions.module.css';
import fetch from 'isomorphic-unfetch';
import { SERVER_URL } from "../../constant";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

type ExampleData = {
  [key:string]: string;
};

interface QuestionData {
  title: string,
  data: string
}
export interface ProblemData {
      id: number
      type: string
      title: string
      description: string
      example: ExampleData
      question: QuestionData
      answer: string
}

type Params = {
	params: {
		problemId: string | undefined
	}
}

interface QuestionProp {
  data: ProblemData
}

const Questions = ({ data }: QuestionProp) => {

  return (
    <main className={styles.questions}>
      <Question question={data}/>
      <Example />
    </main>
  )
}

export async function getServerSideProps({ params }: Params) {
  const { problemId } = params;
  const url = `${SERVER_URL}/problem/${problemId}`;
  const res = await fetch(url);
  if (!res.ok) {
    return {
      notFound: true
    }
  }
  const data = await res.json();
  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: { data }
  }
}

export default Questions
