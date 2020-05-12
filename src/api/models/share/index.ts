import { DataType, Table, Column, Model, NotNull } from "sequelize-typescript";

@Table
export default class share extends Model<share> {
  @NotNull
  @Column(DataType.STRING)
  name: string;

  @NotNull
  @Column(DataType.STRING)
  friendName: string;

  @NotNull
  @Column(DataType.STRING)
  friendEmail: string;
}
