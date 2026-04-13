import { Book } from './entities/book.entity';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book | null>;
    create(createBookDto: CreateBookDto): Promise<Book>;
}
