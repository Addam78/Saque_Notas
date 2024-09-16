const express =require('express')
const app = express ()
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())


app.use(cors('*'))


//Configurando handlebars
const handlebars = require('express-handlebars')
app.engine('handlebars', handlebars.engine({
//   helpers: {
//     // Função auxiliar para verificar se o parâmetro é verdadeiro
//     seVerdadeiro: function (parametro, options) {
//       return parametro ? options.fn(this) : options.inverse(this);
//     }
//   },
  defaultLayout: 'main',
  runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
  },
}))
app.set('view engine', 'handlebars')


//EXPORTANDO ARQUIVO ROTAS
const router = require('./src/routes/routes')
app.use(router)






app.listen(8083 , ()=> {console.log('Servidor rodando http://localhost:8083/ver')})