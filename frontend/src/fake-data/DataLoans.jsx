import { DataProfile } from './DataProfile.jsx';
import { DataCopy } from './DataCopy.jsx';


export function DataLoans() {
    const copies = DataCopy();
    const reader = DataProfile();

    /* id, copy, reader, dtLoan, dtEta, dtReturn, isRenewd, status */
    const emprestimos = [
        {
            id: 1,
            idExemplar: copies[0],
            idPerfil: reader,
            dtEmprestimo: "2026-09-01",
            dtEta: "2026-09-08",
            dtDevolucao: "2026-09-08",
            renovado: false,
            status: "Devolvido"
        },
        {
            id: 2,
            idExemplar: copies[7],
            idPerfil: reader,
            dtEmprestimo: "2026-09-12",
            dtEta: "2026-09-19",
            dtDevolucao: null,
            renovado: false,
            status: "Atrasado"
        },
        {
            id: 3,
            idExemplar: copies[3],
            idPerfil: reader,
            dtEmprestimo: "2026-09-19",
            dtEta: "2026-09-29",
            dtDevolucao: "2026-09-29",
            renovado: true,
            status: "Devolvido"
        },
        {
            id: 4,
            idExemplar: copies[9],
            idPerfil: reader,
            dtEmprestimo: "2026-09-22",
            dtEta: "2026-09-29",
            dtDevolucao: null,
            renovado: false,
            status: "Ativo"
        }
    ]

    return emprestimos;
}