export interface TopScore {
    name: string;
    score: number;
    date: Date;
}

export interface QuizPosition {
    better: number;
    worse: number;
}

export interface QuizScore extends QuizPosition {
    score: number;
}
