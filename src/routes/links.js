const express = require('express');
const router = express.Router();

const pool = require('../db');

router.get('/add', (req, res) => {
	res.render('links/add');
});

router.get('/', async (req, res) => {
	const links = await pool.query('SELECT * FROM links');
	console.log(links);
	res.render('links/list', {links});
});

router.post('/add', async (req,res) => {
	const { title, url, description } = req.body;
	const newLink = {
		title,
		url,
		description
	};
	await pool.query(`INSERT INTO links set ?`, [newLink]);
	res.redirect('/links');
});

module.exports = router;