import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("activities")
export class Activity {
  @PrimaryColumn()
  cr_sd: string;

  @Column({ length: 255 })
  activityDetails: string;

  @Column("timestamp")
  startTime: Date;

  @Column("timestamp")
  endTime: Date;

  @Column({ length: 100 })
  spoc: string;

  @Column({ length: 50 })
  status: string;

  @Column({ length: 50 })
  outageType: string;

  @Column({ length: 50 })
  activityType: string;

  @Column({ length: 100 })
  addedBy: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
