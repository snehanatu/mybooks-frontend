class Book {
    _id:string;
    name: string;
    author: string;
    publisher: string;
    cost: string;
    pages: string;
    booktype: string;
    status: string;

    constructor(){
        this.name = ""
        this.author = ""
        this.publisher = ""
        this.cost = ""
        this.pages = ""
        this.booktype = ""
        this.status = ""
    }
}

export default Book;