export const minLenght = (min_number: number): object => {
    const minLenght_rule = {
        min: min_number,
        message: `Es necesario ingresar mínimo ${min_number} caracteres`
    };

    return minLenght_rule;
}

export const maxLenght = (max_number: number): object => {
    const maxLenght_rule = {
        max: max_number,
        message: `Es necesario ingresar máximo ${max_number} caracteres`
    };

    return maxLenght_rule;
}

export const required = (campo: string): object => {
    const required_rule = {
        required: true,
        message: `El campo ${campo} es requerido`
    };

    return required_rule;
}

export const typeEmail = (): object => {
    const email_rule = {
        type: 'email',
        message: 'El correo no es valido'
    }

    return email_rule;
}

export const pattern = (pattern: any): object => {
    const pattern_rule = {
        pattern,
        message: "Formato incorrecto"
    }

    return pattern_rule;
}