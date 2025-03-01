import express from "express";

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req: Express.Request, res: any) => {
    res.send('Hola, CI/CD!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
