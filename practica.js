// Función para calcular el salario neto de un empleado
function calcularNomina(salarioBase, horasExtra, tarifaHoraExtra, impuestos, seguridadSocial) {
    // Cálculo del pago por horas extra
    let pagoHorasExtra = horasExtra * tarifaHoraExtra;

    // Cálculo del salario bruto (salario base + pago por horas extra)
    let salarioBruto = salarioBase + pagoHorasExtra;

    // Cálculo de las deducciones (impuestos y seguridad social)
    let deducciones = (impuestos + seguridadSocial) / 100 * salarioBruto;

    // Cálculo del salario neto
    let salarioNeto = salarioBruto - deducciones;

    return {
        salarioBase: salarioBase,
        horasExtra: horasExtra,
        pagoHorasExtra: pagoHorasExtra,
        salarioBruto: salarioBruto,
        deducciones: deducciones,
        salarioNeto: salarioNeto
    };
}

// Ejemplo de uso
let salarioBase = 15000;  // Salario base del empleado
let horasExtra = 10;      // Número de horas extra trabajadas
let tarifaHoraExtra = 200; // Pago por hora extra
let impuestos = 12;       // Porcentaje de impuestos
let seguridadSocial = 5;  // Porcentaje de seguridad social

let nomina = calcularNomina(salarioBase, horasExtra, tarifaHoraExtra, impuestos, seguridadSocial);

console.log(`Salario Base: $${nomina.salarioBase}`);
console.log(`Horas Extra: ${nomina.horasExtra}`);
console.log(`Pago por Horas Extra: $${nomina.pagoHorasExtra}`);
console.log(`Salario Bruto: $${nomina.salarioBruto}`);
console.log(`Deducciones: $${nomina.deducciones}`);
console.log(`Salario Neto: $${nomina.salarioNeto}`);
