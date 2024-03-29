import Sequelize from "sequelize"
import Connection from "../database.js"
import User from "./User.js";
import Empresa from "./Empresa.js";

const Compra = Connection.define(
    'compra',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        data: {
            type: Sequelize.DATE,
            allowNull: false
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        idEmpresa: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'empresas',
                key: 'id'
            }
        }
    }
)

Compra.belongsTo(User, {
    foreignKey: 'idUser'
})
Compra.belongsTo(Empresa, {
    foreignKey: 'idEmpresa'
})

export default Compra;