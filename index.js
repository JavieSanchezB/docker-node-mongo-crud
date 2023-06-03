import express from 'express'
import mongoose from 'mongoose'


const AnimalSchema = new mongoose.Schema({
  tipo: String,
  estado: String
});

const Animal = mongoose.model('animalmodel', AnimalSchema);

const app = express()

//mongoose.connect('mongodb://javier:password@localhost:27017/miapp?authSource=admin')
mongoose.connect('mongodb://javier:password@monguito:27017/miapp?authSource=admin')
app.get('/db', async (_req, res) => {
  console.log('Conectado')
})

app.get('/', async (_req, res) => {
  console.log('listando... Animales...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear/vaca', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Vaca', estado: 'Feliz' })
  return res.send('ok')
})
app.get('/crear/perro', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Perro', estado: 'Feliz' })
  return res.send('ok')
})
app.get('/crear/caballo', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Caballo', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))