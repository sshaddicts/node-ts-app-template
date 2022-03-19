import {Column, DataType, IsUUID, Model, PrimaryKey, Table} from 'sequelize-typescript'

export interface User {
  id: String
}

export interface UserCreationAttributes extends User {
}

@Table({
  timestamps: true,
  underscored: true
})
export class UserModel extends Model<User, UserCreationAttributes> implements User {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id: String
}
