import { DataProfile } from './DataProfile.jsx';
import { DataCopy } from './DataCopy.jsx';


export function DataLoans() {
    const copies = DataCopy();
    const reader = DataProfile();

    /* id, copy, reader, dtLoan, dtEta, dtReturn, isRenewd, status */
    const loans = [
        {
            id: 1,
            copy: copies[0], // 1984-COP-01
            reader: reader,
            dtLoan: '2026-09-18',
            dtEta: '2026-03-15',
            dtReturn: null,
            isRenewd: false,
            status: 'Ativo'
        },
        {
            id: 2,
            copy: copies[5], // HOB-COP-01
            reader: reader,
            dtLoan: '2026-03-05',
            dtEta: '2026-03-19',
            dtReturn: null,
            isRenewd: true,
            status: 'Ativo'
        },
        {
            id: 3,
            copy: copies[11], // DOM-COP-02
            reader: reader,
            dtLoan: '2026-03-10',
            dtEta: '2026-03-24',
            dtReturn: null,
            isRenewd: false,
            status: 'Ativo'
        },
        {
            id: 4,
            copy: copies[15], // HOB-COP-06
            reader: reader,
            dtLoan: '2026-02-10',
            dtEta: '2026-02-24',
            dtReturn: null,
            isRenewd: false,
            status: 'Atrasado'
        },
        {
            id: 5,
            copy: copies[1], // 1984-COP-02
            reader: reader,
            dtLoan: '2026-01-05',
            dtEta: '2026-01-19',
            dtReturn: '2026-01-18',
            isRenewd: false,
            status: 'Devolvido'
        },
        {
            id: 6,
            copy: copies[6], // HOB-COP-02
            reader: reader,
            dtLoan: '2026-01-15',
            dtEta: '2026-01-29',
            dtReturn: '2026-01-28',
            isRenewd: false,
            status: 'Devolvido'
        },
        {
            id: 7,
            copy: copies[10], // DOM-COP-01
            reader: reader,
            dtLoan: '2026-02-01',
            dtEta: '2026-02-15',
            dtReturn: '2026-02-14',
            isRenewd: true,
            status: 'Devolvido'
        },
        {
            id: 8,
            copy: copies[2], // 1984-COP-03
            reader: reader,
            dtLoan: '2025-12-01',
            dtEta: '2025-12-15',
            dtReturn: '2025-12-12',
            isRenewd: false,
            status: 'Devolvido'
        },
        {
            id: 9,
            copy: copies[8], // HOB-COP-04
            reader: reader,
            dtLoan: '2025-11-10',
            dtEta: '2025-11-24',
            dtReturn: '2025-11-20',
            isRenewd: false,
            status: 'Devolvido'
        },
        {
            id: 10,
            copy: copies[12], // DOM-COP-03
            reader: reader,
            dtLoan: '2025-10-05',
            dtEta: '2025-10-19',
            dtReturn: '2025-10-18',
            isRenewd: true,
            status: 'Devolvido'
        }
    ]

    return loans;
}