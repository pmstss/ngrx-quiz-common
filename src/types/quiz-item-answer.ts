import { ItemId } from './id';
import { ChoiceAnswers } from './quiz-item-choice-answer';

export type QuizAnswers = Map<ItemId, QuizItemAnswer>;

export interface QuizItemAnswer {
    choiceAnswers: ChoiceAnswers;
    submitted: boolean;
    correct?: boolean;
}
