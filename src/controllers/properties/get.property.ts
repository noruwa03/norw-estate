import { Request, Response } from "express";
import pool from "../../db";

const getMyProperty = async (req: Request, res: Response) => {
  try {
    const { uid } = req.params;

    const result = await pool.query(
      "SELECT * FROM properties WHERE uid = $1 ORDER BY created_at DESC",
      [uid]
    );

    res.status(200).json({ data: result.rows });
  } catch (error) {
    console.log(error);
  }
};

export default getMyProperty;
