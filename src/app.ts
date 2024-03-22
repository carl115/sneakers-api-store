import express from "express"
import morgan from "morgan"
import cors from 'cors'
import ProductsRoutes from "./routes/product.routes"
import UserRoutes from "./routes/user.routes"
import { generateTestData } from './controllers/TestController'

export default function App() {
    const app = express();

    //Settings
    //Variables de entorno nativas sin necesidad de DOTENV pero no funciona
    app.set('port', process.env.SERVER_HOST || 3000)

    //Middlewares
    app.use(express.json())
    app.use(morgan('dev'))
    app.use(cors())

    //Routes
    app.use('/api/users', UserRoutes)
    app.use('/api/', ProductsRoutes)
    //Route to generate test data
    app.use('/api/test', generateTestData)

    app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`))
}