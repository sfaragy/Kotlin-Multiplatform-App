const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
app.use(bodyParser.json());

app.use('/api', authRoutes);

const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

