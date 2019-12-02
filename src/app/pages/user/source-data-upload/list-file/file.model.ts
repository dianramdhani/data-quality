export class File {
    constructor(
        public id: string,
        public location: string,
        public filename: string,
        public uploadDate: string,
        public filesize: number,
        public status: string
    ) { }
}