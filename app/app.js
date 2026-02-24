const express = require('express')
const pool = require('./db')

const app = express()

app.get('/', async (req,res)=>{
    const result = await pool.query('SELECT NOW()')
    res.send("Node + PostgreSQL Running ✅ " + result.rows[0].now)
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})