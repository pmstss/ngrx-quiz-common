import { QuizId, ItemId } from './id';
import { QuizItem } from './quiz-item';

export interface QuizMetaBasic {
    id: QuizId;
    name: string;
    shortName: string;
    description: string;
    descriptionFull: string;
    randomizeItems: boolean;
}

export interface QuizMeta extends QuizMetaBasic {
    itemIds: ItemId[];
}

/*
 * "items" instead of "itemIds" on quiz creation/editing
 */

export interface QuizMetaAdmin extends QuizMetaBasic {
    items: QuizItem[];
}

/*
 * "started" and "finished" are calculated on the base of answer when quiz is active in QuizState selector;
 * totalQuestions is calculated as itemIds length; but for list they are returned as pre-calculated from server
 */
export interface QuizMetaListItem extends QuizMetaBasic {
    totalQuestions: number; // insteadof itemIds
    started: boolean;
    finished: boolean;
}
