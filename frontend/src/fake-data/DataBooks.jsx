import { DataAuthor } from "./DataAuthor.jsx";
import { DataGenre } from "./DataGenre.jsx";
import { DataPublisher } from "./DataPublisher.jsx";

export function DataBooks() {
    const authors = DataAuthor();
    const genres = DataGenre();
    const publisher = DataPublisher();

    const livros = [
        {
            id: 1,
            titulo: "1984",
            ISBN: "9788535914849",
            dtPublicacao: "1949",
            numPaginas: 312,
            sinopsis: "Em um regime totalitário governado pelo Grande Irmão, o cidadão Winston Smith trabalha alterando dados históricos para o Partido. À medida que questiona o sistema, ele inicia um romance proibido e tenta resistir à vigilância absoluta da Polícia do Pensamento.",
            idAutor: authors[0],
            idGenero: genres[2],
            idEditora: publisher[1],
            ativo: true,
            recomendado: true
        },
        {
            id: 2,
            titulo: "O Hobbit",
            ISBN: "9788578274085",
            dtPublicacao: "1937",
            numPaginas: 310,
            sinopsis: "O pacato hobbit Bilbo Bolseiro é retirado de sua vida confortável pelo mago Gandalf e um grupo de anões. Juntos, eles embarcam em uma perigosa jornada até a Montanha Solitária para recuperar um tesouro protegido pelo temível dragão Smaug.",
            idAutor: authors[1],
            idGenero: genres[1],
            idEditora: publisher[1],
            ativo: true,
            recomendado: false
        },
        {
            id: 3,
            titulo: "Dom Casmurro",
            ISBN: "9788506069783",
            dtPublicacao: "1899",
            numPaginas: 413,
            sinopsis: "Bento Santiago, já idoso, relembra sua juventude e seu intenso amor por Capitu. Consumido pelo ciúme e pela desconfiança de ter sido traído por ela com seu melhor amigo, Escobar, o narrador constrói sua versão dos fatos sobre a polêmica cumplicidade dos olhos de ressaca.",
            idAutor: authors[2],
            idGenero: genres[0],
            idEditora: publisher[0],
            ativo: true,
            recomendado: true
        },
        {
            id: 4,
            titulo: "O Senhor dos Anéis",
            ISBN: "9786555114355",
            dtPublicacao: "1954",
            numPaginas: 423,
            sinopsis: "Em uma Terra-média ameaçada pelas forças das trevas, o jovem hobbit Frodo Baggins recebe a missão de destruir o Um Anel no Monte da Perdição. Para isso, ele conta com a ajuda de uma comitiva formada por homens, anões, elfos, hobbits e o mago Gandalf.",
            idAutor: authors[3],
            idGenero: genres[1],
            idEditora: publisher[1],
            ativo: true,
            recomendado: false
        }
    ];

    return livros;
}