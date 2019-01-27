import { ChoiceId } from './id';

export type ChoiceAnswers = Map<ChoiceId, QuizItemChoiceAnswer>;

export interface QuizItemChoiceAnswer {
    id: ChoiceId;
    checked: boolean;
    correct?: boolean;
    explanation?: string;
    popularity?: number;
}
