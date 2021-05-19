var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
// var Leitura = require('../models').Leitura;
var env = process.env.NODE_ENV || 'development';

const { ArduinoDataTemp } = require("../app-sensores/newserial");
const { ArduinoDataHumidity } = require("../app-sensores/serialHumidity");

const { ArduinoDataSwitch } = require("../app-sensores/serialSwitch");
const { ArduinoDataLuminosity } = require("../app-sensores/serialLuminosidity");

router.get("/sendData", (request, response) => {
	const temperature = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 1];
	const Humidity = ArduinoDataHumidity.List[ArduinoDataHumidity.List.length - 1];
	//luminosidade = ArduinoDataLuminosity.List[ArduinoDataLuminosity.List.length -1]

	var instrucaoSql = ""

	if (env == "dev") {

		// Na variável abaixo, coloque o Insert que será executado no Workbench
		// salvo exceções, é igual a SQL Server

		instrucaoSql = `INSERT into tbRegistros (temperatura, dtMedicao, fkSensor) values 
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3001),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3002),
		(${temperature}, '${agora()}', 3003),
		(${temperature}, '${agora()}', 3001),
		`;

	} else {

		// Na variável abaixo, coloque o Insert que será executado no SQL Server
		// salvo exceções, é igual a Workbench

		instrucaoSql = `INSERT into tbRegistros (temperatura, nvlAlerta, dtMedicao, fkSensor) values 
		(${temperature + 10}, 1, '${agora()}', 3001),
		(${temperature - 10}, 2, '${agora()}', 3002),
		(${temperature + 5}, 3, '${agora()}', 3003)`;
	}

	sequelize.query(instrucaoSql, {
		//model: Leitura,
		//mapToModel: true
	}).then(resultado => {
			console.log(`\n\nRegistro inserido com sucesso!\nO comando executado foi como abaixo:\n`);
			console.log(instrucaoSql)
			console.log(`\nFim do comando SQL executado.`);
			response.status(200).send("Dado inserido com sucesso.");
		}).catch(erro => {
			console.error(erro);
			response.status(500).send(erro.message);
		});
});

function agora() {
	const agora_d = new Date();
	return `${agora_d.getFullYear()}-${agora_d.getMonth() + 1}-${agora_d.getDate()} ${agora_d.getHours()}:${agora_d.getMinutes()}:${agora_d.getSeconds()}`;
}

module.exports = router;
