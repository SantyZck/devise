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
	req.flash('success', 'Link saved succesfully');
	res.redirect('/links');
});

router.get('/delete/:id', async (req, res) => {
	const { id } = req.params;
	await pool.query('DELETE FROM links WHERE ID = ?', [id]);
	req.flash('success', 'Link Removed succesfully');
	res.redirect('/links');
});

router.get('/edit/:id', async (req, res) => {
	const { id } = req.params;
	const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
	res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id', async (req, res) => {
	const { id } = req.params;
	const { title, url, description } = req.body;
	const newLink = {
		title,
		url,
		description
	};
	await pool.query('UPDATE links set ? where ID = ?', [newLink, id]);
	req.flash('success', 'Link Updated successfully');
	res.redirect('/links');
});

module.exports = router;