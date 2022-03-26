/* eslint-disable prettier/prettier */
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

//pegar essa informação do cookie / sessão mais para frente
let isLoggedIn = false

if (!isLoggedIn) {
  Route.on('/').redirect('/Login')
} else {
  Route.on('/').redirect('/Home')
}

Route.get('/Login', 'AccountController.login')
Route.get('/ForgotPassword', 'AccountController.forgotPassword')
Route.get('/SignUp', 'AccountController.signUp')
Route.get('/Home', 'EventosController.index')
Route.get('/EventPage', 'EventosController.abrirEvento')
Route.get('/CreateEvent', 'EventosController.criarEvento')
Route.get('/Events', 'MuralController.Murais')
Route.get('/EditProfile', 'AccountController.editProfile')
