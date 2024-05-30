import express from "express";
import signUp from "../controllers/auth/signup";
import signIn from "../controllers/auth/signin";
import create from "../controllers/properties/create";
import getMyProperty from "../controllers/properties/get.property";
import deleteProperty from "../controllers/properties/delete";
import propertyById from "../controllers/properties/get.property.by.id";
import update from "../controllers/properties/update";
import getAllProperty from "../controllers/properties/get.all.property";

const router = express.Router();

// Auth
router.post("/signup", signUp);
router.post("/signin", signIn);

// Property
router.post("/property", create);
router.get("/property", getAllProperty);
router.get("/property/:uid", getMyProperty);
router.delete("/property/:id", deleteProperty);
router.get("/property-detail/:id", propertyById);
router.put("/property/:id", update);

export default router;
