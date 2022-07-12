import { DataTypes, Model } from 'sequelize';
import db from '.';
import { Product } from './product';

type InventoryAttributes = {
  id?: number;
  idProduto: number;
  quantidade: number;
  reserva: number;
  status: number;
};

class Inventory extends Model<InventoryAttributes> {
  declare id: number;
  declare idProduto: number;
  declare quantidade: number;
  declare reserva: number;
  declare status: number;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idProduto: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    reserva: DataTypes.INTEGER,
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize: db.sequelize,
    modelName: 'Inventory',
    timestamps: false,
    tableName: 'Estoque',
  },
);

Product.hasOne(Inventory, { foreignKey: 'idProduto', as: 'estoque' });
Inventory.belongsTo(Product, { foreignKey: 'idProduto', as: 'produto' });

export { Inventory };
