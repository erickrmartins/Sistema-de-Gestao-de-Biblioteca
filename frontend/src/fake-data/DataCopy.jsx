import { DataBooks } from './DataBooks'

export function DataCopy() {
    const livro = DataBooks();

    /* id, book, identification, status, active */
    const exemplares = [
        {
            id: 1,
            idLivro: livro[0],
            identificacao: "1984-COP-01",
            status: "Emprestado",
            ativo: true
        },
        {
            id: 2,
            idLivro: livro[0],
            identificacao: "1984-COP-02",
            status: "Disponível",
            ativo: true
        },
        {
            id: 3,
            idLivro: livro[0],
            identificacao: "1984-COP-03",
            status: "Disponível",
            ativo: true
        },
        {
            id: 4,
            idLivro: livro[1],
            identificacao: "HOB-COP-01",
            status: "Emprestado",
            ativo: false
        },
        {
            id: 5,
            idLivro: livro[1],
            identificacao: "HOB-COP-02",
            status: "Em Manutenção",
            ativo: true
        },
        {
            id: 6,
            idLivro: livro[2],
            identificacao: "DCA-COP-01",
            status: "Emprestado",
            ativo: true
        },
        {
            id: 7,
            idLivro: livro[3],
            identificacao: "SDA-COP-01",
            status: "Disponível",
            ativo: true
        },
        {
            id: 8,
            idLivro: livro[3],
            identificacao: "SDA-COP-02",
            status: "Em Manutenção",
            ativo: false
        },
        {
            id: 9,
            idLivro: livro[3],
            identificacao: "SDA-COP-03",
            status: "Disponível",
            ativo: true
        },
        {
            id: 10,
            idLivro: livro[3],
            identificacao: "SDA-COP-01",
            status: "Perdido",
            ativo: false
        }
    ];
    return exemplares;
}