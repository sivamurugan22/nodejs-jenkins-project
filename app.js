const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Jenkins CI/CD Pipeline Wo0rkiing!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
