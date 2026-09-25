
export default function DataReservation() {

    const reservas = [
        {
            id: 1,
            dtReserva: "2026-09-25",
            primeiro: true,
            idLivro: 1,
            idPerfil: 1
        },
        {
            id: 2,
            dtReserva: "2026-09-26",
            primeiro: false,
            idLivro: 1,
            idPerfil: 2
        },
        {
            id: 3,
            dtReserva: "2026-09-20",
            primeiro: true,
            idLivro: 2,
            idPerfil: 1
        },
        {
            id: 4,
            dtReserva: "2026-09-21",
            primeiro: false,
            idLivro: 3,
            idPerfil: 1
        }

    ]

    return reservas;
}