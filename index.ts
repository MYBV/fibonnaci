//################################################################################
import express from "express";
import { ValidatorNum } from "./validations/fibonacci";
//################################################################################

//################################################################################
const app = express();
//################################################################################

//################################################################################
function fibonacci(num: number): number {
    let raiz_5: number = Math.sqrt(5);
    let raiz01: number = (1 + raiz_5) / 2;
    let raiz02: number = (1 - raiz_5) / 2;

    return Math.round((Math.pow(raiz01, num) - Math.pow(raiz02, num)) / raiz_5);
}
//################################################################################

//################################################################################
app.get("/fibonacci/:numero([0-9]+)", async(req, res) => {
    let valida_numero: Boolean = ValidatorNum(req.params.numero);
    if (!valida_numero)
        return res
            .status(400)
            .json({
                message:
                    "El indice a requerir debe ser numerico mayor o igual a cero",
            });

    let numero: number = parseInt(req.params.numero);
    let resultado: number = await fibonacci(numero);

    res.status(200).json({ indice: req.params.numero, valor: resultado });
});
//################################################################################

//################################################################################
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
//################################################################################
