import { Router } from "express";
import userRoutes from "./userRoutes";
import commentRoutes from "./commentRoutes";
const router = Router();

router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

export default router;
