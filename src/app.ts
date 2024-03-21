import express from "express"
import morgan from "morgan"
import cors from 'cors'
import ProductsRoutes from "./routes/product.routes"
import UserRoutes from "./routes/user.routes"

export default function App() {
    const app = express();

    //Settings
    app.set('port', 3000)

    //Middlewares
    app.use(express.json())
    app.use(morgan('dev'))
    app.use(cors())

    //Routes
    app.use('/api/users', UserRoutes)
    app.use('/api/', ProductsRoutes)

    app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`))
}