import { Column, BaseEntity } from "typeorm";

export class Auditable extends BaseEntity {
  @Column("varchar", {
    name: "created_by",
    length: 60,
    // TODO: need update?
    default: "changqing",
    nullable: false,
  })
  createdBy: string;

  @Column("timestamp", {
    name: "created_on",
    default: () => `now()`,
    nullable: false,
  })
  createdOn: Date;

  @Column("varchar", {
    name: "lastmodified_by",
    length: 60,
    default: "changqing",
    nullable: false,
  })
  lastModifiedBy: string;

  @Column("timestamp", {
    name: "lastmodified_on",
    default: () => `now()`,
    nullable: false,
  })
  lastModifiedOn: Date;
}
