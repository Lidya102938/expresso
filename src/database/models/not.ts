import SequelizeAttributes from '@expresso/utils/SequelizeAttributes'
import { Model, Optional } from 'sequelize'
import db from './_instance'


export interface NotAttributes{
  id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}

interface NotCreationAttributes extends Optional<NotAttributes, 'id'> {}

// instance
export interface NotInstance
  extends Model<NotAttributes, NotCreationAttributes>,
    NotAttributes {}

// class entity
class Not
  extends Model<NotAttributes, NotCreationAttributes>
  implements NotAttributes
{
  declare id: string
  declare name: string

  declare readonly createdAt: Date
  declare readonly updatedAt: Date
  declare readonly deletedAt: Date
}

// init model
Not.init(
  {
    ...SequelizeAttributes.Not,
  },
  // @ts-expect-error
  { sequelize: db.sequelize, tableName: 'not', paranoid: true }
)

export default Not

