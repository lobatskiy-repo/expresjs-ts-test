import { Router } from "express";
import { createUsers, getUsers, getUsersById } from "../handlers/users";

const router = Router();

// /api/users
router.get("/", getUsers);

// /api/users/123
router.get("/:id", getUsersById);

// /api/users
router.post("/", createUsers);

export default router;
