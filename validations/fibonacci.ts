//#############################################################3
export const ValidatorNum = (numero: any): Boolean=> {
    if(!/^[0-9]*$/.test(String(numero))) return false
    return true
}
//#############################################################