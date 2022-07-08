import { DataTypes, Model } from 'sequelize';
import db from '.';
import { Category } from './category';

type ProductAttributes = {
  id?: number;
  codigo: string;
  nome: string;
  status: number;
  valor: number;
  descricao?: string;
  idCategoria: number;
};

class Product extends Model<ProductAttributes> {
  declare id: number;
  declare codigo: string;
  declare nome: string;
  declare status: number;
  declare valor: number;
  declare descricao: string;
  declare idCategoria: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: DataTypes.STRING,
    nome: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    valor: DataTypes.DECIMAL,
    descricao: DataTypes.STRING,
    idCategoria: DataTypes.INTEGER,
  },
  {
    sequelize: db.sequelize,
    modelName: 'Product',
    timestamps: false,
    tableName: 'Produtos',
  },
);

export { Product };
