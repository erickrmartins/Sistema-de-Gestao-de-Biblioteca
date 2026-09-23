import { DataAuthor } from "./DataAuthor.jsx";
import BookIcon from "../assets/book.svg?react";
import { DataGenre } from "./DataGenre.jsx";

export function DataBooks() {
    const authors = DataAuthor();
    const genres = DataGenre();

    function getCover(ISBN) {
        return "https://books.google.com/books/content?vid=ISBN" + ISBN + "&printsec=frontcover&img=1&zoom=1";
    }
    /* id: , title: , Cover: , author: , ISBN: , publishedAt: , genre: , numPages: , synopsis: , active: , recommended: */
    const booksData = [
        {
            id: 1,
            title: '1984',
            author: authors[0], // George Orwell
            ISBN: '9788535914849',
            publishedAt: '1949',
            genre: genres[2],
            numPages: 312,
            synopsis: 'Em um regime totalitário governado pelo Grande Irmão, o cidadão Winston Smith trabalha alterando dados históricos para o Partido. À medida que questiona o sistema, ele inicia um romance proibido e tenta resistir à vigilância absoluta da Polícia do Pensamento.',
            active: true,
            recommended: true
        },
        {
            id: 2,
            title: 'O Hobbit',
            author: authors[1], // J.R.R. Tolkien
            ISBN: '9788578274085',
            publishedAt: '1937',
            genre: genres[1],
            numPages: 310,
            synopsis: 'O pacato hobbit Bilbo Bolseiro é retirado de sua vida confortável pelo mago Gandalf e um grupo de anões. Juntos, eles embarcam em uma perigosa jornada até a Montanha Solitária para recuperar um tesouro protegido pelo temível dragão Smaug.',
            active: true,
            recommended: false
        },
        {
            id: 3,
            title: 'Dom Casmurro',
            author: authors[2], // Machado de Assis
            ISBN: '9788506069783',
            publishedAt: '1899',
            genre: genres[0],
            numPages: 413,
            synopsis: 'Bento Santiago, já idoso, relembra sua juventude e seu intenso amor por Capitu. Consumido pelo ciúme e pela desconfiança de ter sido traído por ela com seu melhor amigo, Escobar, o narrador constrói sua versão dos fatos sobre a polêmica cumplicidade dos "olhos de ressaca".',
            active: true,
            recommended: false
        },
        {
            id: 4,
            title: 'O Senhor dos Anéis',
            author: authors[1], // J.R.R. Tolkien
            ISBN: '9786555114355',
            publishedAt: '1954',
            genre: genres[1],
            numPages: 423,
            synopsis: 'Em uma Terra-média ameaçada pelas forças das trevas, o jovem hobbit Frodo Baggins recebe a missão de destruir o Um Anel no Monte da Perdição. Para isso, ele conta com a ajuda de uma comitiva formada por homens, anões, elfos, hobbits e o mago Gandalf.',
            active: true,
            recommended: false
        },
        {
            id: 5,
            title: 'Admirável Mundo Novo',
            author: authors[3], // Aldous Huxley
            ISBN: '9786558301677',
            publishedAt: '1932',
            genre: genres[2],
            numPages: 311,
            synopsis: 'Uma sociedade futurista moldada pela tecnologia, condicionamento biológico e controle social eliminou grande parte do sofrimento humano, mas ao custo da liberdade individual, da arte, das relações humanas e da subjetividade.',
            active: true,
            recommended: false
        },
        {
            id: 6,
            title: 'O Alquimista',
            author: authors[4], // Paulo Coelho
            ISBN: '9788543810737',
            publishedAt: '1988',
            genre: genres[0],
            numPages: 159,
            synopsis: 'O jovem pastor andaluz Santiago parte em uma jornada rumo às Pirâmides do Egito em busca de um tesouro. Ao longo do caminho, encontra diferentes pessoas e aprende a reconhecer os sinais que o conduzem em direção à sua Lenda Pessoal.',
            active: true,
            recommended: false
        },
        {
            id: 7,
            title: 'O Pequeno Príncipe',
            author: authors[5], // Antoine de Saint-Exupéry
            ISBN: '9786550971205',
            publishedAt: '1943',
            genre: genres[0],
            numPages: 93,
            synopsis: 'Um piloto cai no deserto do Saara e encontra um jovem príncipe vindo de um asteroide distante. Através das histórias de suas viagens por outros planetas, o livro aborda temas como amizade, amor, responsabilidade e a essência invisível aos olhos.',
            active: true,
            recommended: false
        },
        {
            id: 8,
            title: 'Fahrenheit 451',
            author: authors[6], // Ray Bradbury
            ISBN: '9781451673319',
            publishedAt: '1953',
            genre: genres[2],
            numPages: 156,
            synopsis: 'Guy Montag é um bombeiro cuja função não é apagar incêndios, mas queimar livros em um futuro onde a leitura é proibida e a sociedade vive anestesiada por telas e entretenimento.',
            active: true,
            recommended: false
        },
        {
            id: 9,
            title: 'Orgulho e Preconceito',
            author: authors[7], // Jane Austen
            ISBN: '9788525404350',
            publishedAt: '1813',
            genre: genres[0],
            numPages: 869,
            synopsis: 'Na Inglaterra do século XIX, Elizabeth Bennet enfrenta as pressões sociais para se casar enquanto desenvolve uma relação turbulenta e repleta de mal-entendidos com o orgulhoso e reservado Sr. Darcy.',
            active: true,
            recommended: true
        },
        {
            id: 10,
            title: 'A Metamorfose',
            author: authors[8], // Franz Kafka
            ISBN: '9788582459188',
            publishedAt: '1915',
            genre: genres[0],
            numPages: 72,
            synopsis: 'Gregor Samsa acorda certa manhã transformado em uma criatura monstruosa. A narrativa acompanha as consequências dessa transformação sobre sua vida, seu trabalho e sua relação com sua família.',
            active: true,
            recommended: true
        },
        {
            id: 11,
            title: 'Grande Sertão: Veredas',
            author: authors[10],
            ISBN: '9788554513238',
            publishedAt: '1956',
            genre: genres[0],
            numPages: 560,
            synopsis: 'Riobaldo, um ex-jagunço, narra suas memórias, conflitos e amores ao percorrer o sertão brasileiro. Entre guerras, amizades, dúvidas e paixões, sua trajetória se transforma em uma profunda reflexão sobre o destino, a existência e as escolhas humanas.',
            active: true,
            recommended: false
        },

        {
            id: 12,
            title: 'Ensaio sobre a Cegueira',
            author: authors[11],
            ISBN: '9788543801216',
            publishedAt: '1995',
            genre: genres[0],
            numPages: 312,
            synopsis: 'Uma epidemia inexplicável de cegueira branca atinge uma cidade e provoca o colapso das estruturas sociais. Em meio ao caos, um pequeno grupo tenta sobreviver enquanto enfrenta a perda da ordem, da dignidade e das referências que sustentavam sua sociedade.',
            active: true,
            recommended: false
        },

        {
            id: 13,
            title: 'Crime e Castigo',
            author: authors[12],
            ISBN: '9786556402741',
            publishedAt: '1866',
            genre: genres[0],
            numPages: 624,
            synopsis: 'Raskólnikov, um jovem estudante vivendo na pobreza, acredita que determinadas pessoas extraordinárias estariam acima das leis morais. Após cometer um assassinato, passa a enfrentar a culpa, o medo e as consequências psicológicas de seu ato.',
            active: true,
            recommended: false
        },

        {
            id: 14,
            title: 'O Nome da Rosa',
            author: authors[13],
            ISBN: '9788501094193',
            publishedAt: '1980',
            genre: genres[6],
            numPages: 535,
            synopsis: 'Em um mosteiro italiano do século XIV, o frei Guilherme de Baskerville investiga uma sequência de mortes misteriosas. Enquanto procura o responsável pelos crimes, descobre conflitos envolvendo religião, conhecimento, poder e uma biblioteca repleta de segredos.',
            active: true,
            recommended: false
        },

        {
            id: 15,
            title: 'A Hora da Estrela',
            author: authors[14],
            ISBN: '9788581221908',
            publishedAt: '1977',
            genre: genres[0],
            numPages: 88,
            synopsis: 'Macabéa é uma jovem nordestina que vive de forma simples e quase invisível no Rio de Janeiro. Sua rotina muda quando procura uma cartomante, que lhe anuncia um futuro inesperadamente promissor.',
            active: true,
            recommended: false
        },

        {
            id: 16,
            title: 'Capitães da Areia',
            author: authors[15],
            ISBN: '9788535911695',
            publishedAt: '1937',
            genre: genres[0],
            numPages: 296,
            synopsis: 'Um grupo de meninos abandonados vive em um trapiche em Salvador e sobrevive praticando pequenos furtos. A narrativa acompanha suas relações, conflitos, sonhos e as condições sociais que moldam suas vidas.',
            active: true,
            recommended: false
        },

        {
            id: 17,
            title: 'Vidas Secas',
            author: authors[16],
            ISBN: '9788501119148',
            publishedAt: '1938',
            genre: genres[0],
            numPages: 143,
            synopsis: 'Fabiano, Sinhá Vitória, seus dois filhos e a cadela Baleia atravessam o sertão nordestino em busca de sobrevivência. A seca, a pobreza, a exploração e a dificuldade de comunicação marcam a trajetória da família.',
            active: true,
            recommended: false
        },

        {
            id: 18,
            title: 'O Cortiço',
            author: authors[17],
            ISBN: '9788577431809',
            publishedAt: '1890',
            genre: genres[0],
            numPages: 376,
            synopsis: 'Em uma habitação coletiva no Rio de Janeiro, diferentes personagens convivem em meio à pobreza, ambição, conflitos e relações sociais. O cotidiano do cortiço é utilizado para retratar as condições sociais e a influência do ambiente sobre os indivíduos.',
            active: true,
            recommended: false
        },

        {
            id: 19,
            title: 'Iracema',
            author: authors[18],
            ISBN: '9788532654755',
            publishedAt: '1865',
            genre: genres[0],
            numPages: 200,
            synopsis: 'Iracema, uma jovem indígena, apaixona-se por Martim, um colonizador português. O romance acompanha o conflito entre diferentes culturas e utiliza a história de amor para construir uma narrativa sobre as origens simbólicas do povo brasileiro.',
            active: true,
            recommended: false
        },

        {
            id: 20,
            title: 'Drácula',
            author: authors[19],
            ISBN: '9788582850053',
            publishedAt: '1897',
            genre: genres[3],
            numPages: 648,
            synopsis: 'Jonathan Harker viaja até a Transilvânia para auxiliar o conde Drácula em uma negociação imobiliária. Ao descobrir a verdadeira natureza de seu anfitrião, desencadeia uma série de acontecimentos envolvendo vampiros, perseguições e uma luta para impedir que o conde se estabeleça na Inglaterra.',
            active: true,
            recommended: false
        },

        {
            id: 21,
            title: 'O Grande Gatsby',
            author: authors[20],
            ISBN: '9788564406667',
            publishedAt: '1925',
            genre: genres[0],
            numPages: 180,
            synopsis: 'Nick Carraway muda-se para Long Island e acaba envolvido na vida do misterioso milionário Jay Gatsby. Gatsby organiza festas grandiosas enquanto tenta recuperar o amor de Daisy Buchanan, revelando as ilusões e contradições da sociedade americana dos anos 1920.',
            active: true,
            recommended: false
        },

        {
            id: 22,
            title: 'Frankenstein',
            author: authors[21],
            ISBN: '9780553212471',
            publishedAt: '1818',
            genre: genres[3],
            numPages: 280,
            synopsis: 'Victor Frankenstein cria artificialmente uma criatura a partir de partes humanas. Horrorizado com o resultado, abandona sua criação, desencadeando uma relação marcada por rejeição, vingança, solidão e questionamentos sobre os limites da ciência.',
            active: true,
            recommended: false
        },

        {
            id: 23,
            title: 'A Ilha do Tesouro',
            author: authors[22],
            ISBN: '9788506069790',
            publishedAt: '1883',
            genre: genres[4],
            numPages: 272,
            synopsis: 'O jovem Jim Hawkins encontra um mapa que indica a localização de um tesouro escondido. Ao embarcar em uma expedição marítima, envolve-se com piratas, traições e perigos liderados pelo carismático Long John Silver.',
            active: true,
            recommended: false
        },

        {
            id: 24,
            title: 'Os Miseráveis',
            author: authors[23],
            ISBN: '9788544000007',
            publishedAt: '1862',
            genre: genres[7],
            numPages: 1511,
            synopsis: 'Jean Valjean é condenado à prisão após roubar comida para sua família. Depois de recuperar a liberdade, tenta reconstruir sua vida enquanto é perseguido pelo inspetor Javert e atravessa acontecimentos sociais e políticos da França do século XIX.',
            active: true,
            recommended: false
        },

        {
            id: 25,
            title: 'A Peste',
            author: authors[24],
            ISBN: '9788501117441',
            publishedAt: '1947',
            genre: genres[0],
            numPages: 288,
            synopsis: 'Uma epidemia atinge a cidade de Orã, obrigando seus habitantes a enfrentar isolamento, medo e morte. O médico Bernard Rieux e outras personagens procuram lidar com a situação enquanto a narrativa explora solidariedade, sofrimento e responsabilidade.',
            active: true,
            recommended: false
        },

        {
            id: 26,
            title: 'Os Irmãos Karamázov',
            author: authors[25],
            ISBN: '9786556402758',
            publishedAt: '1880',
            genre: genres[0],
            numPages: 976,
            synopsis: 'Os irmãos Dmitri, Ivan e Aliócha Karamázov possuem personalidades e visões de mundo profundamente diferentes. O assassinato de seu pai desencadeia uma investigação que envolve conflitos familiares, questões morais, religiosas e existenciais.',
            active: true,
            recommended: false
        },

        {
            id: 27,
            title: 'O Processo',
            author: authors[26],
            ISBN: '9788571647169',
            publishedAt: '1925',
            genre: genres[0],
            numPages: 332,
            synopsis: 'Josef K. acorda certa manhã e descobre que está sendo processado por uma autoridade que nunca explica claramente sua acusação. Ao tentar compreender o sistema judicial que o envolve, mergulha em uma realidade burocrática, incompreensível e opressiva.',
            active: true,
            recommended: false
        },

        {
            id: 28,
            title: 'Guerra e Paz',
            author: authors[27],
            ISBN: '9788554510336',
            publishedAt: '1869',
            genre: genres[7],
            numPages: 1544,
            synopsis: 'A vida de diversas famílias aristocráticas russas é acompanhada durante as guerras napoleônicas. A narrativa combina batalhas, relações familiares, conflitos amorosos e reflexões sobre história, sociedade e comportamento humano.',
            active: true,
            recommended: false
        },

        {
            id: 29,
            title: 'Madame Bovary',
            author: authors[28],
            ISBN: '9788525409713',
            publishedAt: '1857',
            genre: genres[0],
            numPages: 384,
            synopsis: 'Emma Bovary sonha com uma vida romântica e luxuosa inspirada pelos livros que lê. Insatisfeita com seu casamento e sua vida provinciana, busca novas experiências que acabam levando sua vida pessoal e financeira a consequências trágicas.',
            active: true,
            recommended: true
        },

        {
            id: 30,
            title: 'Anna Kariênina',
            author: authors[29],
            ISBN: '9788540508842',
            publishedAt: '1878',
            genre: genres[0],
            numPages: 816,
            synopsis: 'Anna Kariênina vive um relacionamento extraconjugal que entra em conflito com as convenções da sociedade russa. Paralelamente, Konstantin Liévin enfrenta questões relacionadas ao amor, família, trabalho e sentido da vida.',
            active: true,
            recommended: true
        },

        {
            id: 31,
            title: 'As Aventuras de Sherlock Holmes',
            author: authors[30],
            ISBN: '9788595085350',
            publishedAt: '1892',
            genre: genres[6],
            numPages: 130,
            synopsis: 'Sherlock Holmes e seu companheiro Dr. Watson investigam uma série de casos aparentemente inexplicáveis. Utilizando observação, lógica e dedução, Holmes resolve mistérios envolvendo crimes, desaparecimentos e intrigas.',
            active: true,
            recommended: true
        },

        {
            id: 32,
            title: 'Por Quem os Sinos Dobram',
            author: authors[30],
            ISBN: '9788528617122',
            publishedAt: '1940',
            genre: genres[7],
            numPages: 438,
            synopsis: 'Durante a Guerra Civil Espanhola, o americano Robert Jordan recebe a missão de destruir uma ponte estratégica. Ao lado de um grupo de guerrilheiros, ele enfrenta os perigos da guerra enquanto desenvolve uma relação com Maria.',
            active: true,
            recommended: true
        }
   ];

    const books = booksData.map((book) => ({
        ...book,
        cover: getCover(book.ISBN)
    }));

    return books;
}