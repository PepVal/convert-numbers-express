import app from './app'

async function main() {
    await app.listen(3000)
    console.log("Servidor levantado en el puerto 3000");
}

main()