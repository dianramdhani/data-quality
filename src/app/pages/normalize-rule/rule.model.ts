export class Rule {
    constructor(
        public id: string,
        public fieldName: string,
        public oldContent: string,
        public newContent: string,
        public word: boolean
    ) { }
}