import { getRepository } from "typeorm";
import { Activity } from "../entities/Activity";

export async function createActivity(activityData: Partial<Activity>) {
  const activityRepository = getRepository(Activity);
  const activity = activityRepository.create(activityData);
  return await activityRepository.save(activity);
}

export async function getActivityById(id: number) {
  const activityRepository = getRepository(Activity);
  return await activityRepository.findOne(id);
}

export async function updateActivity(
  id: number,
  activityData: Partial<Activity>
) {
  const activityRepository = getRepository(Activity);
  await activityRepository.update(id, activityData);
}

export async function deleteActivity(id: number) {
  const activityRepository = getRepository(Activity);
  await activityRepository.delete(id);
}
