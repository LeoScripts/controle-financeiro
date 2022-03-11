export type Category = {
    // este tag e pra passarmos que cada nome de categoria vai ser string
    //  como esta no aquivo src/data/categories.ts
    
    [tag: string]: {
        title: string;
        color: string;
        expense:boolean;
    }
}