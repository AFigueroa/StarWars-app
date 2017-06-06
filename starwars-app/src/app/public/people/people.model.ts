// Data Model for People List response
export class People {
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: any
    ) { }
    
}