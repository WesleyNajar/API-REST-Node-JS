//import executeSP from '../database/funcoes.js'
import { consulta } from '../database/conexao.js'

class SelecaoRepository {
    //CRUD
    create(selecao) {
        const sql = `INSERT INTO selecoes SET ?;`
        return consulta(sql,selecao,'Não foi possivel cadastrar!')
    }

    findAll() {
        //usando storage procedure
        //const sql = executeSP('listarSelecoes', null, conexao)
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql,'Não foi possivel localizar!')
    }

    findById(id) {
        const sql = `SELECT * FROM bdcopa.selecoes WHERE id=${id}`
        return consulta(sql, id, 'Não foi possivel localizar!')
    }

    update(selecao, id) {
        const sql = `UPDATE selecoes SET ? WHERE id = ${id};`
        return consulta(sql, [selecao,id], 'Não foi possivel atualizar!')
    }
    
    delete(id) {
        const sql = `DELETE FROM selecoes WHERE id=${id}`
        return consulta(sql, id, 'Não foi possivel apagar!')
    }

}

export default new SelecaoRepository
