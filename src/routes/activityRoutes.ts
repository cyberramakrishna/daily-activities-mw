import { Router } from "express";
import * as activityController from "../controllers/activityController";

const router = Router();

router.post("/", activityController.createActivity);
router.get("/:id", activityController.getActivityById);
router.put("/:id", activityController.updateActivity);
router.delete("/:id", activityController.deleteActivity);

export default router;
