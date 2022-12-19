const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config();
app.use(express.json())
const port = process.env.port || 4000

const UserRouters = require("./Routers/UserRoutes")
const CateGoryRouters = require('./Routers/CategoryRoute')
const productRouters = require('./Routers/ProductRouter')
app.use('/api/user', UserRouters)
app.use('/api/Cg', CateGoryRouters)
app.use('/api/pro', productRouters)



app.listen(port, () => console.log(`Server Is Running On port ${port}`))