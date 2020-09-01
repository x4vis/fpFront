export function minLenght(min_number: number): Object {
    const minLenght_rule = {
        min: min_number,
        message: `Es necesario ingresar mínimo ${min_number} caracteres`
    };

    return minLenght_rule;
}

export function maxLenght(max_number: number): Object {
    const maxLenght_rule = {
        required: max_number,
        message: `Es necesario ingresar máximo ${max_number} caracteres`
    };

    return maxLenght_rule;
}

export function required(campo: string): Object {
    const required_rule = {
        required: true,
        message: `El campo ${campo} es requerido`
    };

    return required_rule;
}

export function type_email(): Object {
    const email_rule = {
        type: 'email',
        message: `El correo no es valido`
    }

    return email_rule;
}

export function Validate() {

}