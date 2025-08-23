import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'magento-user',
  password: 'bryant.UNAM8',
  database: 'weedingbyl',
});

app.get('/list', async (req, res) => {
  try {
    const { lastname } = req.body;
    const [rows] = await pool.query('SELECT * FROM lastname WHERE name = ?', [lastname]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users');
  }
});

app.listen(5000, () => console.log('Server started on port 5000'));