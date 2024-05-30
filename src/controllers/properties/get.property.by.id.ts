import { Request, Response } from "express";
import pool from "../../db";

const propertyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM properties WHERE property_id = $1",
      [id]
    );

    res.status(200).json({ data: result.rows[0] });
  } catch (error) {
    console.log(error);
  }
};

export default propertyById;
