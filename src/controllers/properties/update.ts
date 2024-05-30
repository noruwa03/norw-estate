import { Request, Response } from "express";
import pool from "../../db";

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      property_title,
      price,
      longitude,
      latitude,
      property_HTML,
      property_photoname,
      photo_url,
      contact,
      updated_at,
    } = req.body;

    if (property_photoname) {
      const result = await pool.query(
        "UPDATE properties SET property_title = $1, price = $2, longitude = $3, latitude = $4, property_HTML = $5, property_photoname = $6, photo_url = $7, contact = $8, updated_at = $9 WHERE property_id = $10 RETURNING *",
        [
          property_title,
          price,
          longitude,
          latitude,
          property_HTML,
          property_photoname,
          photo_url,
          contact,
          updated_at,
          id,
        ]
      );

      res.status(201).json({ data: result.rows[0] });
    } else {
      const result = await pool.query(
        "UPDATE properties SET property_title = $1, price = $2, longitude = $3, latitude = $4, property_HTML = $5, contact = $6, updated_at = $7 WHERE property_id = $8 RETURNING *",
        [
          property_title,
          price,
          longitude,
          latitude,
          property_HTML,
          contact,
          updated_at,
          id,
        ]
      );

      res.status(201).json({ data: result.rows[0] });
    }
  } catch (error) {
    console.log(error);
  }
};

export default update;
