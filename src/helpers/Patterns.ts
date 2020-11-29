export const PatternText = /^[a-zA-Z\u00C0-\u00FF\s]*$/;
export const PatternNumber = /^[0-9]+$/;
export const PatternPersonaFisica = /^([A-ZÑ&]{4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
export const PatternPersonaMoral = /^([A-ZÑ&]{3}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;