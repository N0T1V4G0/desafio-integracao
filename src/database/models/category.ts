import { DataTypes, Model } from 'sequelize';
import db from '.';

type CategoryAttributes = {
  id?: number;
  codigo: string;
  titulo: string;
  status: number;
};

class Category extends Model<CategoryAttributes> {
  declare id: number;
  declare codigo: string;
  declare titulo: string;
  declare status: number;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: DataTypes.STRING,
    titulo: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize: db.sequelize,
    modelName: 'Category',
    timestamps: false,
    tableName: 'Categorias',
  },
);

export { Category };
