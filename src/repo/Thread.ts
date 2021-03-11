import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Length } from "class-validator";
import { User } from "./User";
import { ThreadItem } from "./ThreadItem";
import { ThreadPoint } from "./ThreadPoint";
import { ThreadCategory } from "./ThreadCategory";
import { Auditable } from "./Auditable";

@Entity({ name: "threads" })
export class Thread extends Auditable {
  @PrimaryGeneratedColumn({ name: "id", type: "int" })
  id: string;

  @Column("int", { name: "views", default: 0, nullable: false })
  views: number;

  @Column("int", { name: "points", default: 0, nullable: false })
  points: number;

  @Column("boolean", { name: "isdisabled", default: false, nullable: false })
  isDisabled: boolean;

  @Column("varchar", { name: "title", length: 150, nullable: false })
  @Length(5, 150)
  title: string;

  @Column("varchar", { name: "body", length: 2500, nullable: true })
  @Length(10, 2500)
  body: string;

  @ManyToOne(() => User, (user: User) => user.threads)
  user: User;

  @OneToMany(() => ThreadItem, (threadItems) => threadItems.thread)
  threadItems: ThreadItem[];

  @OneToMany(() => ThreadPoint, (threadPoint) => threadPoint.thread)
  threadPoints: ThreadPoint[];

  @ManyToOne(() => ThreadCategory, (threadCategory) => threadCategory.threads)
  category: ThreadCategory;
}
