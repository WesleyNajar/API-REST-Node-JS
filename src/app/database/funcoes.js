function executeSP(namesp, paramsIN = null, conexao) {
    let tsql = `CALL ${namesp}`;
    let paramsValues = [];

    if (paramsIN !== null && paramsIN !== undefined) {
        tsql += `(${paramsIN.map(() => '?').join(', ')})`;
        paramsValues = paramsIN;
    }

    return new Promise((resolve, reject) => {
        conexao.query(tsql, paramsValues, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

const funcoes = executeSP; // Atribui a função executeSP a uma variável funcoes

export default funcoes; // Exporta a variável funcoes