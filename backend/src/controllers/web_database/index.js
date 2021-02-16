const Database = require('../../service/database/mysql');

const connections = {
    "Open-Base": {
        user: "root",
        pass: "23800#Malibu",
        conn: {
            host: "34.68.90.239",
            database: "public_database"
        }
    }
}

async function DatabaseController(req, res) {
    let { user, pass, conn, sql } = req.body;
    let credentials = {}

    if (sql === undefined || sql === '')
        return res.json({ code: 'SQL_UNDEFINED_OR_EMPTY', message: 'Para realizar uma consulta o script SQL deve ser informado.' })

    if (user === undefined && pass === undefined) {
        credentials = connections[conn]
    } else {
        credentials = { user, pass, conn }
    }

    let response = await Database(sql, credentials)
    console.log(response)
    res.json(response);
}

module.exports = DatabaseController;