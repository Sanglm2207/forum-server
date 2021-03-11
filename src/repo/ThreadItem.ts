import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Length } from "class-validator";
import { Thread } from "./Thread";
import { User } from "./User";
import { ThreadItemPoint } from "./ThreadItemPoint";
import { Auditable } from "./Auditable";

@Entity({ name: "threaditems" })
export class ThreadItem extends Auditable {
  @PrimaryGeneratedColumn({ name: "id", type: "int" })
  id: string;

  @Column("int", { name: "views", default: 0, nullable: false })
  views: number;

  @Column("int", { name: "points", default: 0, nullable: false })
  points: number;

  @Column("boolean", { name: "isdisabled", default: false, nullable: false })
  isDisabled: boolean;

  @Column("varchar", { name: "body", length: 2500, nullable: true })
  @Length(10, 2500)
  body: string;

  @ManyToOne(() => User, (user) => user.threadItems)
  user: User;

  @ManyToOne(() => Thread, (thread) => thread.threadItems)
  thread: Thread;

  @OneToMany(
    () => ThreadItemPoint,
    (threadItemPoint) => threadItemPoint.threadItem
  )
  threadItemPoints: ThreadItemPoint[];
}
