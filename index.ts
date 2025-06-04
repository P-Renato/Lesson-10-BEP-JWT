import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 4567;


app.post('/login', (req,res, next) => {
    const { username, password } = req.body;
    console.log(username,password)

    if (username === "john" && password === "john123"){

        const token = jwt.sign({username: 'john', id: '1'}, 'thisismysecretekey', {
            expiresIn: '1d'
        })
        res.json({token: token, message: 'success!' })
        res.send('Welcome!')
    } else {
        res.send('Please try again!')
    }
    
    
    res.send('hello')
})



app.listen(PORT, ()=> console.log('Server is running on PORT ', PORT))