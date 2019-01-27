import { ChoiceId } from './id';

export interface QuizItemChoice {
    id: ChoiceId;
    text: string;
}

export interface QuizItemChoiceAdmin extends QuizItemChoice {
    correct: boolean;
    explanation: string;
    counter: number;
}

export interface QuizItemChoiceAnswer {
    id: ChoiceId;
    explanation: string;
    checked: boolean;
    correct: boolean;
    popularity: number;
}
