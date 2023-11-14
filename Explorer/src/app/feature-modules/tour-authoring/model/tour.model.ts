export interface Tour {
    id?: number,
    name: string,
    description: string,
    difficulty: number,
    tags: string,
    checkPoints: Number[],
    equipments: Number[],
    status: Number,
    totalLength: Number,
    footTime: Number,
    bicycleTime: Number,
    carTime: Number,
    //publishTime: string,
}