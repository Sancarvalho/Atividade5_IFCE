const fetch = require ('node-fetch')

const conversor = async (req, res) => {
    let linkApi = "https://economia.awesomeapi.com.br/last/BRL-USD"
    let result = await fetch(linkApi)
    let dados = await result.json()
    let solucao = (dados["BRLUSD"].bid)
    let Conversao = (solucao * req.params.valor_real)
    return(res.json({Conversao}))
}

module.exports = {conversor}