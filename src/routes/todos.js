const express = require('express');

const pool = require('../db');

const router = express.Router();

router.get('/add', (req, res) => {
	res.render('todos/add');
});

router.post('/add', async (req, res) => {
	const { content } = req.body;
	const newTodo = {
		content
	};
	await pool.query('INSERT INTO todos set ?', [newTodo]);
	console.log('Saved');
	res.redirect('/todos');
});

router.get('/', async (req, res) => {
	const todos = await pool.query('SELECT * FROM todos');
	console.log(todos);
	res.render('todos/list', {todos});
});

router.get('/delete/:id', async (req, res) => {
	const { id } = req.params;
	await pool.query('DELETE FROM todos WHERE ID = ?', [id]);
	res.redirect('/todos');
});

module.exports = router;