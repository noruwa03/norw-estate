import { Request, Response } from "express";
import pool from "../../db";

const getAllProperty = async (_: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT * FROM properties ORDER BY created_at DESC"
    );

    res.status(200).json({ data: result.rows });
  } catch (error) {
    console.log(error);
  }
};

export default getAllProperty;
