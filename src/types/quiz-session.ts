import { QuizItemAnswer } from './quiz-item';

export interface QuizSession {
    answers: { [itemId: string]: QuizItemAnswer };
}
