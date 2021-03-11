import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "./User";
import { Thread } from "./Thread";
import { Auditable } from "./Auditable";

@Entity({ name: "threadpoints" })
export class ThreadPoint extends Auditable {
  @PrimaryGeneratedColumn({ name: "id", type: "bigint" }) // for typeorm
  id: string;

  @Column("boolean", { name: "isdecrement", default: false, nullable: false })
  isDecrement: boolean;

  @ManyToOne(() => User, (user) => user.threadPoints)
  user: User;

  @ManyToOne(() => Thread, (thread) => thread.threadPoints)
  thread: Thread;
}
