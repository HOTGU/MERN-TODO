import express from "express";

import pool from "../db.js";

const apiRouter = express.Router();

apiRouter.post("/create", async (req, res) => {
  try {
    const { content } = req.body;

    const conn = await pool.getConnection();
    let query = "INSERT INTO todoTable (content) VALUES (?)";
    let data = [content];

    const [result] = await pool.query(query, data);

    res.status(200).json({ id: result.insertId, content });

    conn.release();
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});

apiRouter.get("/fetch", async (req, res) => {
  try {
    const conn = await pool.getConnection();

    let query = "SELECT * FROM todoTable";

    const [rows] = await pool.query(query);

    res.status(200).json(rows);

    conn.release();
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});

apiRouter.post("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    const conn = await pool.getConnection();

    let query = "DELETE FROM todoTable WHERE id=(?)";

    await pool.query(query, id);

    res.status(200).json(id);

    conn.release();
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});

apiRouter.post("/update", async (req, res) => {
  try {
    const { id, content } = req.body;
    const conn = await pool.getConnection();

    let query = `UPDATE todoTable SET content=? WHERE id=?`;

    await pool.query(query, [content, id]);

    res.status(200).json({ id, content });

    conn.release();
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});

apiRouter.post("/filter", async (req, res) => {
  const { term } = req.body;

  console.log(req.body);

  try {
    const conn = await pool.getConnection();
    let query = "SELECT * FROM todoTable WHERE content REGEXP ? ";

    const [rows] = await pool.query(query, [term]);

    res.status(200).json(rows);

    conn.release();
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});

export default apiRouter;
