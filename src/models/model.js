const db = require('../config/config')

const User = {}


User.selectAll = () =>{
    const sql = `SELECT codigo_id, name, fecha_nacimiento, documento, id_subjects
	FROM public.student;`
    return db.many(sql)
}

module.exports = User