const reservationControllers = require('./reservations.controllers')

const postReservation = (req, res) => {
    const userId = req.user.id
    const data = req.body
    const accomodationId = req.params.id

    reservationControllers.createReservation(data, userId, accomodationId)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({ status: 400, message: err.message })
        })
}

const getAll = (req, res) => {
    reservationControllers.getAllReservations()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const getById = (req, res) => {
    const id = req.params.id;
    reservationControllers
        .getReservationById(id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            res.status(404).json({ message: `la reservation con el id ${id} no existe` });
        });
};


const editReservations = (req, res) => {
    const resrvationId = req.params.id;
    const data = req.body;
    if (!Object.keys(data).length) {
        return res.status(400).json({ message: "Missing Data" });
    } else if (
        !data.arrival ||
        !data.departure ||
        !data.adults1 ||
        !data.kids ||
        !data.babies ||
        !data.pets ||
        !data.score ||
        !data.isFinished ||
        !data.isCanceled
    ) {
        return res.status(400).json({
            message: "All fields must be completed",
            fields: {
                arrival: "date",
                departure: "date",
                adults: "num",
                kids: "num",
                baies: "num",
                pets: "num",
                score: "float",
                isFinished: "boolean",
                isCanceled: "boolean"
            },
        });
    } else {

        const response = reservationControllers.updateReservation(resrvationId, data)
            .then((response) => {
                res.status(200).json({
                    message: 'reservation edited succesfully',
                    reservations: response
                })
            })
            .catch(err => {
                res.status(400).json({ message: err.errors[0].message })
            })

    }
};

module.exports = {
    postReservation,
    getAll,
    getById,
    editReservations

}