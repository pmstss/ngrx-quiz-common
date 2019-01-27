import { QuizItemChoice } from './quiz-item-choice';
import { ItemId } from './id';

export interface QuizItem {
    id: string;
    question: string;
    randomizeChoices: boolean;
    singleChoice: boolean;
    choices: QuizItemChoice[];
}

export type QuizItems = Map<ItemId, QuizItem>;
