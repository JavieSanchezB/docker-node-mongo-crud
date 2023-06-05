import express from 'express'
import mongoose from 'mongoose'


const AnimalSchema = new mongoose.Schema({
  tipo: String,
  estado: String
});

const Animal = mongoose.model('animalmodel', AnimalSchema);

const app = express()

//mongoose.connect('mongodb://javier:password@localhost:27017/miapp?authSource=admin')
mongoose.connect('mongodb://javier:password@server_mongo:27017/miapp?authSource=admin')
app.get('/', async (_req, res) => {
  console.log('listando... Animales...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear/vaca', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Vaca', estado: 'Feliz' })
  return res.send('Creando una Vaca Felíz ....')
})
app.get('/crear/perro', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Perro', estado: 'Feliz' })
  return res.send('Creando una Perro Felíz ....')
})
app.get('/crear/gato', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Gato', estado: 'Feliz' })
  return res.send('Creando un Gato Felíz ....')
})

app.get('/crear/caballo', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Caballo', estado: 'Feliz' })
  return res.send('Creando un Caballo Felíz ....')
})

app.get('/borrar/caballo', async (_req, res) => {
  console.log('borrando...')
  await Animal.deleteOne({ tipo: 'Caballo', estado: 'Feliz' })
  return res.send('borrando un Caballo Felíz ....')
})

app.get('/actualizar/caballo', async (_req, res) => {
  console.log('actualizando...')
  await Animal.findOneAndUpdate({ tipo: 'Caballo', estado: 'Triste' })
  return res.send('Actualizando un Caballo Triste ....')
})

app.listen(3000, () => console.log('Servidor Online en el Pueto:3000'))