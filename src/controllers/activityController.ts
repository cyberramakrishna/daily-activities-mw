import { Request, Response, NextFunction } from "express";
import * as activityService from "../services/activityService";

export async function createActivity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const activity = req.body;
    const createdActivity = await activityService.createActivity(activity);
    res
      .status(201)
      .json({
        message: "Activity created successfully",
        activity: createdActivity,
      });
  } catch (error) {
    next(error);
  }
}

export async function getActivityById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const activity = await activityService.getActivityById(id);
    res.status(200).json(activity);
  } catch (error) {
    next(error);
  }
}

export async function updateActivity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const activity = req.body;
    await activityService.updateActivity(id, activity);
    res.status(200).json({ message: "Activity updated successfully" });
  } catch (error) {
    next(error);
  }
}

export async function deleteActivity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    await activityService.deleteActivity(id);
    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    next(error);
  }
}

/*
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Activity } from "../entities/Activity";

export const createActivity = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const {
    cr_sd,
    activityDetails,
    startTime,
    endTime,
    spoc,
    status,
    outageType,
    activityType,
    addedBy,
  } = req.body;

  try {
    const activityRepository = getRepository(Activity);

    const newActivity = activityRepository.create({
      cr_sd,
      activityDetails,
      startTime,
      endTime,
      spoc,
      status,
      outageType,
      activityType,
      addedBy,
    });

    await activityRepository.save(newActivity);

    return res.status(201).json({ activityId: newActivity.cr_sd });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error creating activity", error: error.message });
  }
};

// Other CRUD operations can be added similarly
*/
