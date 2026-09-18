import { DataBooks } from './DataBooks'

export function DataCopy() {
    const books = DataBooks();

    /* id, book, identification, status, active */
    const copies = [
        { id: 1, book: books[0], identification: '1984-COP-01', status: 'Emprestado', active: true },
        { id: 2, book: books[0], identification: '1984-COP-02', status: 'Disponível', active: true },
        { id: 3, book: books[0], identification: '1984-COP-03', status: 'Disponível', active: true },
        
        { id: 4, book: books[0], identification: '1984-COP-04', status: 'Em Manutenção', active: false },
        { id: 5, book: books[0], identification: '1984-COP-05', status: 'Reservado', active: true },
        { id: 6, book: books[1], identification: 'HOB-COP-01', status: 'Emprestado', active: true },
        
        { id: 7, book: books[1], identification: 'HOB-COP-02', status: 'Disponível', active: true },
        { id: 8, book: books[1], identification: 'HOB-COP-03', status: 'Em Manutenção', active: false },
        { id: 9, book: books[1], identification: 'HOB-COP-04', status: 'Disponível', active: true },
        
        { id: 10, book: books[1], identification: 'HOB-COP-05', status: 'Perdido', active: false },
        { id: 11, book: books[2], identification: 'DOM-COP-01', status: 'Disponível', active: true },
        { id: 12, book: books[2], identification: 'DOM-COP-02', status: 'Emprestado', active: true },
        
        { id: 13, book: books[2], identification: 'DOM-COP-03', status: 'Disponível', active: true },
        { id: 14, book: books[2], identification: 'DOM-COP-04', status: 'Reservado', active: true },
        { id: 15, book: books[0], identification: '1984-COP-06', status: 'Disponível', active: true },
        
        { id: 16, book: books[1], identification: 'HOB-COP-06', status: 'Emprestado', active: true },
        { id: 17, book: books[2], identification: 'DOM-COP-05', status: 'Disponível', active: true },
        { id: 18, book: books[0], identification: '1984-COP-07', status: 'Disponível', active: true },
        
        { id: 19, book: books[1], identification: 'HOB-COP-07', status: 'Reservado', active: true },
        { id: 20, book: books[2], identification: 'DOM-COP-06', status: 'Em Manutenção', active: false }
    ]

    return copies;
}