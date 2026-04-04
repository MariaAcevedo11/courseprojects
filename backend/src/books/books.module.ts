import { Book } from './entities/book.entity';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Module } from '@nestjs/common';
import { Review } from './entities/review.entity';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Review])],
  controllers: [BooksController, ReviewsController],
  providers: [BooksService, ReviewsService],
})
export class BooksModule {}
