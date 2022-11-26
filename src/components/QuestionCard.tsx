import React, { FC, MouseEvent } from 'react';
import { AnswerObject } from '../App'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e:MouseEvent<HTMLButtonElement>)=>void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard:FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => (
    <Wrapper>
    <p className='number'>Question: {questionNumber} / {totalQuestions}</p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div >{answers.map(answer => (
      <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}>
        <button disabled={!!userAnswer} onClick={callback} value={answer}>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
        </button>
    </ButtonWrapper>
    ))}
    </div>
    </Wrapper>
  )


export default QuestionCard