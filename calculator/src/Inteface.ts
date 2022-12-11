export interface IUserData {
    solved: string;
    maxSolved: string;
    day: string,
    solvedPercent: string
}

export interface IUserSettings  {
    difficult: number | string,
    duration: number | string,
    checkList: string[]
}
