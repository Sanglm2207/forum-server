import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Thread } from "./Thread";
import { Auditable } from "./Auditable";

@Entity({ name: "threadcategories" })
export class ThreadCategory extends Auditable {
  @PrimaryGeneratedColumn({ name: "id", type: "bigint" }) // for typeorm
  id: string;

  @Column("varchar", {
    name: "name",
    length: 100,
    unique: true,
    nullable: false,
  })
  name: string;

  @Column("varchar", {
    name: "description",
    length: 150,
    nullable: true,
  })
  description: string;

  @OneToMany(() => Thread, (thread) => thread.category)
  threads: Thread[];
}
