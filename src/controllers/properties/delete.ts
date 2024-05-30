import { Request, Response } from "express";
import pool from "../../db";

const deleteProperty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM properties WHERE property_id = $1", [id]);

    res
      .status(200)
      .json({ message: `Property with id ${id} deleted successfully` });
  } catch (error) {
    console.log(error);
  }
};

export default deleteProperty;
