export class Survey
{
    constructor(
        public _id?: number,
        public title?: string,
        public questions?: string[]

    ){}
    public toString(): string
    {
        return 'Survey --------------------- Name: ${this.name}';
    }
    /*
    clear(): void
    {
        this._id = null;
        this.title = null;
        this.questions = null;
    }*/
}