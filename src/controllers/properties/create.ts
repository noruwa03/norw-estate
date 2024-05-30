import { Request, Response } from "express";
import pool from "../../db";

const create = async (req: Request, res: Response) => {
  try {
    const {
      property,
      property_title,
      price,
      longitude,
      latitude,
      property_HTML,
      property_photoname,
      photo_url,
      uid,
      contact,
      created_at,
      updated_at,
    } = req.body;

    const result = await pool.query(
      "INSERT INTO properties (property, property_title, price, longitude, latitude, property_HTML, property_photoname, photo_url, uid, contact, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        property,
        property_title,
        price,
        longitude,
        latitude,
        property_HTML,
        property_photoname,
        photo_url,
        uid,
        contact,
        created_at,
        updated_at,
      ]
    );

    res.status(201).json({ data: result.rows[0] });
  } catch (error) {
    console.log(error);
  }
};

export default create;
