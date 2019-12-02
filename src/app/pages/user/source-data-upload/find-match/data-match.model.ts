export class DataMatch {
    constructor(
        public id: string,
        public score: number,
        public fullName: string,
        public npwp: string,
        public nik: string
    ) { }
}