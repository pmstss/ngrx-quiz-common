import { QuizId, ItemId } from './id';
import { QuizItem } from './quiz-item';

export interface QuizMeta {
    id: QuizId;
    name: string;
    shortName: string;
    description: string;
    descriptionFull: string;
    randomizeItems: boolean;
    itemIds: ItemId[];
}

/*
 * "items" instead of "itemIds" on quiz creation/editing
 */

export interface QuizMetaAdmin {
    id: QuizId;
    name: string;
    shortName: string;
    description: string;
    descriptionFull: string;
    randomizeItems: boolean;
    items: QuizItem[];
}

/*
 * "started" and "finished" are calculated on the base of answer when quiz is active in QuizState selector;
 * totalQuestions is calculated as itemIds length; but for list they are returned as pre-calculated from server
 */
export interface QuizMetaListItem {
    id: QuizId;
    name: string;
    shortName: string;
    description: string;
    descriptionFull: string;
    randomizeItems: boolean;
    totalQuestions: number; // insteadof itemIds
    started: boolean;
    finished: boolean;
}
