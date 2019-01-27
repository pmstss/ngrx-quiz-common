import { ItemId, QuizId } from './id';
import { QuizItemChoice, QuizItemChoiceAnswer, QuizItemChoiceAdmin } from './quiz-item-choice';

export interface QuizItemBasic {
    id: ItemId;
    quizId: QuizId;
    question: string;
    randomizeChoices: boolean;
    singleChoice: boolean;
}

export interface QuizItem extends QuizItemBasic {
    choices: QuizItemChoice[];
}

export interface QuizItemAdmin extends QuizItemBasic {
    choices: QuizItemChoiceAdmin[];
    order: number;
}

export interface QuizItemAnswer {
    choices: QuizItemChoiceAnswer[];
    correct: boolean;
}

export interface QuizItemAnswered extends QuizItemBasic {
    choices: (QuizItemChoiceAdmin & QuizItemChoiceAnswer)[];
}
