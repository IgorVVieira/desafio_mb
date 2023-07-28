import { EventPhoto } from "../../entities/event/event-photo";
import { IGenericCreateRepository } from "../generic-create.repository";

export interface IEventPhotoRepository
  extends IGenericCreateRepository<EventPhoto> {}