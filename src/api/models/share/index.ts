import {
  DataType,
  Table,
  Column,
  Model,
  AllowNull,
} from "sequelize-typescript";

@Table
export default class share extends Model<share> {
  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  friendName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  friendEmail: string;
}
