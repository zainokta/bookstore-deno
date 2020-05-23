import { client } from "../configs/database.ts";
import Book from "../model/bookModel.ts";

class BookRepository {
  async All() {
    return client.query("SELECT * FROM books");
  }

  async Find(id: Number) {
    return client.query(
      { text: "SELECT * FROM books WHERE id=$1", args: [id] },
    );
  }

  async Create(book: Book) {
    return client.query(
      {
        text: "INSERT INTO books (title, author, price) VALUES ($1, $2, $3)",
        args: [
          book.title,
          book.author,
          book.price,
        ],
      },
    );
  }

  async Update(id: Number, book: Book) {
    return client.query(
      {
        text: "UPDATE books SET title=$1, author=$2, price=$3 WHERE id=$4",
        args: [
          book.title,
          book.author,
          book.price,
          id,
        ],
      },
    );
  }

  async Delete(id: Number) {
    return client.query(
      {
        text: "DELETE FROM books WHERE id=$1",
        args: [id],
      },
    );
  }
}
export default new BookRepository();
