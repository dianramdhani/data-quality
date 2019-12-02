export class ObjectMaker {
    constructor(
        public objectStorage: Storage,
        public objectProperties: Property[],
    ) { }
}

interface Storage {
    id: number,
    userId: number,
    objectName: string,
    objectTable: string,
    creationDate: string
}

interface Property {
    id: number,
    objectId: number,
    property: string
}