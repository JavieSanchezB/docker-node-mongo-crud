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
  return res.send('Creando una Vaca....')
})
app.get('/actualizar/vaca', async (_req, res) => {
  console.log('actualizando...')
  await Animal.findOneAndUpdate({ tipo: 'Vaca', estado: 'Triste' })
  return res.send('Actualizando una Vaca a estado Triste ....')
})

app.get('/borrar/vaca', async (_req, res) => {
  console.log('borrando...')
  await Animal.deleteOne({ tipo: 'vaca'})
  return res.send('borrando una Vaca....')
})


app.get('/crear/perro', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Perro', estado: 'Feliz' })
  return res.send('Creando un Perro....')
})
app.get('/actualizar/perro', async (_req, res) => {
  console.log('actualizando...')
  await Animal.deleteOne({ tipo: 'Perro', estado: 'Triste' })
  return res.send('Actualizando Perro....')
})
app.get('/borrar/perro', async (_req, res) => {
  console.log('borrando...')
  await Animal.deleteOne({ tipo: 'Perro' })
  return res.send('borrando Perro....')
})
app.get('/crear/gato', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Gato', estado: 'Feliz' })
  return res.send('Creando un Gato....')
})
app.get('/actualizar/gato', async (_req, res) => {
  console.log('actualizando...')
  await Animal.deleteOne({ tipo: 'Gato', estado: 'Triste' })
  return res.send('Actualizando Gato....')
})
app.get('/borrar/gato', async (_req, res) => {
  console.log('borrando...')
  await Animal.deleteOne({ tipo: 'Gato' })
  return res.send('borrando Gato....')
})

app.get('/crear/caballo', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Caballo', estado: 'Feliz' })
  return res.send('Creando un Caballo....')
})

app.get('/actualizar/caballo', async (_req, res) => {
  console.log('actualizando...')
  await Animal.findOneAndUpdate({ tipo: 'Caballo', estado: 'Triste' })
  return res.send('Actualizando un Caballo....')
})

app.get('/borrar/caballo', async (_req, res) => {
  console.log('borrando...')
  await Animal.deleteOne({ tipo: 'Caballo' })
  return res.send('borrando un Caballo....')
})

app.listen(3000, () => console.log('Servidor Escuchando en el Pueto:3000'))