//################################################################################
import express from "express";
import { ValidatorNum } from "./validations/fibonacci";
//################################################################################

//################################################################################
const app = express();
//################################################################################

//################################################################################
function fibonacci(num: number): number {
    let raiz_5 = Math.sqrt(5);
    let raiz01 = (1 + raiz_5) / 2;
    let raiz02 = (1 - raiz_5) / 2;

    return Math.round((Math.pow(raiz01, num) - Math.pow(raiz02, num)) / raiz_5);
}
//################################################################################

//################################################################################
app.get("/fibonacci/:numero([0-9]+)", (req, res) => {
    let valida_numero = ValidatorNum(req.params.numero);
    if (!valida_numero)
        return res
            .status(400)
            .json({
                message:
                    "El indice a requerir debe ser numerico mayor o igual a cero",
            });

    let numero = parseInt(req.params.numero, 10);
    let resultado = fibonacci(numero);

    res.status(200).json({ indice: req.params.numero, valor: resultado });
});
//################################################################################

//################################################################################
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
//################################################################################
