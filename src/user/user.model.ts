import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string
  firstName: string
  surName: string
  password: string
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string

  @Column({ type: DataType.STRING, allowNull: false })
  surName: string

  @Column({ type: DataType.STRING, allowNull: false })
  password: string
}