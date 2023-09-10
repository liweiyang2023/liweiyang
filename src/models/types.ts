export type SiderMenuInfo = {
    uid: string;
    label: string;
    type: SiderMenuEnum;
    childrens: SiderMenuInfo[];
};

export enum SiderMenuEnum {
    Group = "group",
    Leaf = "leaf",
}

export enum RoleEnum {
    User = "user",
    AI = "assistant",
}

export type AessionInfo = {
    uid: string;
    role: RoleEnum;
    timestamp: number;
    richtext: string;
    /** 回答对问题的引用 （该回答针对于那条问题） */
    quote?: string;
};
