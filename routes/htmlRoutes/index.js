const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFild(path.join(__dirname, './public/zookeepers.html'));
});

router.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

