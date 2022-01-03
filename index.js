require("dotenv").config();
// configuración del API RESTful
const express = require("express");
const app = express();
const port = 3000;
// configuración a la base de datos
const MongoClient = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectID;
const uri = process.env.URI_CONNECTION;
// Inicia la conexión a la base de datos
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Conectado a la base de datos");
    const database = client.db("tutorial10");
    // Utiliza el parser para objetos JSON
    app.use(express.json());

    // Retorna todos los sensores almacenados
    app.get("/sensores", (req, res) => {
      database
        .collection("sensores")
        .find()
        .toArray()
        .then((sensors) => {
          res.status(200).send(sensors);
        })
        .catch((error) => console.error(error));
    });
    // Almacena un nuevo sensor
    app.post("/sensores", (req, res) => {
      let sensor = req.body;
      const sensorsCollection = database.collection("sensores");
      sensorsCollection
        .insertOne(sensor)
        .then((result) => {
          console.log(sensor);
          res.status(201).send(sensor);
        })
        .catch((error) => console.error(error));
    });
    // Retorna el sensor con el id pasado en el parámetro sensorId
    app.get("/sensores/:sensorId", (req, res) => {
      let sensorId = req.params.sensorId;
      let query = { _id: new require("mongodb").ObjectID(sensorId) };
      database
        .collection("sensores")
        .findOne(query)
        .then((sensor) => {
          if (null !== sensor) {
            res.status(200).send(sensor);
          } else {
            res.status(404).send(`El sensor con id: ${sensorId} no existe`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
    // Almacena una nueva medición
    app.post("/sensores/:sensorId/mediciones", (req, res) => {
      let sensorId = req.params.sensorId;
      let measurement = req.body;
      const updateSensor = {
        $addToSet: { mediciones: measurement },
      };
      database
        .collection("sensores")
        .updateOne({ _id: new ObjectId(sensorId) }, updateSensor)
        .then((sensor) => {
          if (null !== sensor) {
            console.log(sensor);
            res.status(201).send(measurement);
          } else {
            res.status(404).send(`El sensor con id: ${sensorId} no existe`);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
    // Inicializa el servidor para que escuche en el puerto determinado
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto: ${port}`);
    });
  })
  .catch((error) => console.error("Error al conectar a la base de datos"));
