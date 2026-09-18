
export function DataBooks() {
    /* id: , title: , ISBN: , publishedAt: , genre: , numPages: , synopsis: , active: , recommended:  */
    const books = [
        {
            id: 1,
            title: '1984',
            ISBN: '9788535914849',
            publishedAt: '1949',
            genre: 'Ficção Distópica',
            numPages: 416,
            synopsis: 'Em um regime totalitário governado pelo Grande Irmão, o cidadão Winston Smith trabalha alterando dados históricos para o partido. À medida que questiona o sistema, ele inicia um romance proibido e tenta resistir à vigilância absoluta da Polícia do Pensamento.',
            active: true,
            recommended: false
        },
        {
            id: 2,
            title: 'O Hobbit',
            ISBN: '9788595084742',
            publishedAt: '1937',
            genre: 'Fantasia Alta',
            numPages: 336,
            synopsis: 'O pacato hobbit Bilbo Bolseiro é retirado de sua vida confortável pelo mago Gandalf e um grupo de treze anões. Juntos, eles embarcam em uma perigosa jornada até a Montanha Solitária para recuperar um tesouro protegido pelo temível dragão Smaug.',
            active: true,
            recommended: true
        },
        {
            id: 3,
            title: 'Dom Casmurro',
            ISBN: '9788535932591',
            publishedAt: '1899',
            genre: 'Literatura Brasileira',
            numPages: 256,
            synopsis: 'Bento Santiago, já idoso, relembra sua juventude e seu intenso amor por Capitu. Consumido pelo ciúme e pela desconfiança de ter sido traído por ela com seu melhor amigo, Escobar, o narrador constrói sua versão dos fatos sobre a polêmica cumplicidade dos "olhos de ressaca".',
            active: true,
            recommended: true
        },
        {
            id: 4,
            title: 'O Senhor dos Anéis: A Sociedade do Anel',
            ISBN: '9788595084759',
            publishedAt: '1954',
            genre: 'Fantasia Alta',
            numPages: 576,
            synopsis: 'Em uma Terra-média ameaçada pelas forças das trevas, o jovem hobbit Frodo Baggins recebe a missão de destruir o Um Anel no Monte da Perdição. Para isso, ele conta com a ajuda de uma comitiva formada por homens, anões, elfos e o mago Gandalf.',
            active: true,
            recommended: true
        },
        {
            id: 5,
            title: 'Admirável Mundo Novo',
            ISBN: '9788525056009',
            publishedAt: '1932',
            genre: 'Ficção Distópica',
            numPages: 312,
            synopsis: 'Uma sociedade futurista moldada pela tecnologia, condicionamento biológico e pela droga Soma erradicou o sofrimento, mas à custa da liberdade individual, da arte e da subjetividade humana.',
            active: true,
            recommended: false
        },
        {
            id: 6,
            title: 'O Alquimista',
            ISBN: '9788551002247',
            publishedAt: '1988',
            genre: 'Ficção Filosófica',
            numPages: 208,
            synopsis: 'O jovem pastor andaluz Santiago parte em uma jornada rumo às Pirâmides do Egito em busca de um tesouro escondido. Ao longo do caminho, ele aprende a ouvir seu coração e a reconhecer os sinais da sua Lenda Pessoal.',
            active: true,
            recommended: true
        },
        {
            id: 7,
            title: 'O Pequeno Príncipe',
            ISBN: '9788522031429',
            publishedAt: '1943',
            genre: 'Fábula Filosófica',
            numPages: 96,
            synopsis: 'Um piloto cai no deserto do Saara e encontra um jovem príncipe vindo de um asteroide distante. Através das histórias de suas viagens por outros planetas, o livro aborda temas como amizade, amor e a essência invisível aos olhos.',
            active: true,
            recommended: true
        },
        {
            id: 8,
            title: 'Fahrenheit 451',
            ISBN: '9788501099808',
            publishedAt: '1953',
            genre: 'Ficção Distópica',
            numPages: 216,
            synopsis: 'Guy Montag é um bombeiro cuja função não é apagar incêndios, mas queimar livros em um futuro onde a leitura é proibida e a sociedade vive anestesiada por telas e entretenimento fútil.',
            active: true,
            recommended: false
        },
        {
            id: 9,
            title: 'Orgulho e Preconceito',
            ISBN: '9788535918237',
            publishedAt: '1813',
            genre: 'Romance de Época',
            numPages: 424,
            synopsis: 'Na Inglaterra do século XIX, Elizabeth Bennet enfrenta as pressões sociais para se casar enquanto desenvolve uma relação turbulenta e repleta de mal-entendidos com o orgulhoso e reservado Sr. Darcy.',
            active: true,
            recommended: true
        },
        {
            id: 10,
            title: 'A Metamorfose',
            ISBN: '9788535914856',
            publishedAt: '1915',
            genre: 'Ficção Absurdistas',
            numPages: 112,
            synopsis: 'Gregor Samsa acorda certa manhã transformado em um inseto monstruoso. O conto acompanha as repercussões dessa bizarra transformação em sua rotina de trabalho e no relacionamento com sua família.',
            active: true,
            recommended: false
        }
    ]

    return books;
}