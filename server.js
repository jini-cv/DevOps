const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route loads UI
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
