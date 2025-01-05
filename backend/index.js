import express from 'express'
const app = express();

// Use a different port (e.g., 4000)
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Servers is ready');
  }); 

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
