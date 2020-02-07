var conexionbd = require('../lib/conexionbd');


competencia = (rep, res)=>{
    var sql = "SELECT * FROM competencia";

    console.log(sql);
    conexionbd.query(sql+";", (err, result)=>{
        if(err){
            console.log("Hubo un error en la consulta de competencia", err.message);
            return res.status(404).send("Error en la consulta de competencia" ,err.message);
        }
        else{ 
            //let response = { competencia: result}
            res.send(result);
            console.table(result);
        }
    });
}

module.exports={
    competencia : competencia
};