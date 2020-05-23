import BookRepository from "../repositories/bookRepository.ts";

class BookService {
  getAllBooks = async () => {
    const result = await BookRepository.All();
    const books = new Array();

    result.rows.map((book) => {
      var temp: any = {};
      result.rowDescription.columns.map((item, index) => {
        temp[item.name] = book[index];
      });
      books.push(temp);
    });

    return books;
  };

  getBookById = async (id: Number) => {
    const result = await BookRepository.Find(id);

    var book: any = {};
    result.rows.map((items) => {
      result.rowDescription.columns.map((item, index) => {
        book[item.name] = items[index];
      });
    });

    return book;
  };

  createBook = async (book: any) => {
    return await BookRepository.Create(book);
  };

  updateBook = async (id: Number, book: any) => {
    return await BookRepository.Update(id, book);
  };

  deleteBook = async (id: Number) => {
    return await BookRepository.Delete(id);
  };
}

export default new BookService();
