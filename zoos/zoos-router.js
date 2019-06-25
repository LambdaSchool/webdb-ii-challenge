const router = require('express').Router();

const Zoos = require('./zoos-model');

router.get('/', (req, res) => {
    Zoos.find()
        .then(zoos => {
            res.status(200).json(zoons);
        })
        .catch(error => {
            res.status(500).json(error)
        });
});


router.get('/:id', (req, res) => {
    Zooz.getById(req.params.id)
        .then(zoos => {
            if (zoos) {
                res.status(200).json(zoos);
            } else {
                res.status(404).json({ message: 'Zoos not found'})
            }
        })
        .catch(error => {
            res.status(500).json(error) 
        })
});

reouter.post('/', (req, res) => {
    Zoos.add(req.body)
        .then(zoos => {
            res.status(200).json(zoos);
        })
        .catch(error => {
            res.status(500).json(error)
        })
});


router.put('/:id', (req, res) => {
    Zoos.update(req.params.id, req.body)
        .then(zoos => {
            if (zoos) {
                res.status(200).json(zoos)
            } else {
                res.status(400).json({ message: 'Zoos not found'})
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.delete('/:id', (req, res) => {
    Zoos.remove(req.params.id)
        .then(zoos => {
            if (zoos) {
                res.status(204).end();
            } else {
                res.status(404).json({ message: 'Zoos not found'})
            }
        })
        .cath(error => {
            res.status(500).jason(error)
        })
});

module.export = router;