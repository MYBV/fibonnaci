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
function formatoNumero(num: number): any {
    let partesNumero = num.toString().split(".");

    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return partesNumero.join(".");
}
//################################################################################
const obtenerFibonacci = async (req: any, res: any): Promise<any> => {
    let valida_numero: Boolean = ValidatorNum(req.params.numero);
    if (!valida_numero)
        return res.status(400).json({
            message:
                "El indice a requerir debe ser numerico mayor o igual a cero",
        });

    let numero: number = parseInt(req.params.numero);
    let resultado: number = await fibonacci(numero);

    return res.status(200).json({
        indice: req.params.numero,
        valor: formatoNumero(resultado),
    });
};
//################################################################################

//################################################################################
app.get("/fibonacci/:numero([0-9]+)", obtenerFibonacci);
//################################################################################

//################################################################################

//################################################################################
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
//################################################################################
