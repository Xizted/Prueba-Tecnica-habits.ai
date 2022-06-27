import { calculate } from '../src';

describe('La fúncion calculate retorna el resultado de las operaciones infija', () => {
    test('8+9=17', () => {
        const result = calculate('8+9');
        expect(result).toBe(17);
    });

    test('7-5=2', () => {
        const result = calculate('7-5');
        expect(result).toBe(2);
    });

    test('4*5=1', () => {
        const result = calculate('4*5');
        expect(result).toBe(20);
    });

    test('8/4=2', () => {
        const result = calculate('8/4');
        expect(result).toBe(2);
    });

    test('1+1*5=6', () => {
        const result = calculate('1+1*5');
        expect(result).toBe(6);
    });

    test('200+52*60=6', () => {
        const result = calculate('200+52*60');
        expect(result).toBe(3320);
    });

    test('4-7+8+9/2*3=18.5', () => {
        const result = calculate('4-7+8+9/2*3');
        expect(result).toBe(18.5);
    });

    test('23-14+123/3*49=2018', () => {
        const result = calculate('23-14+123/3*49');
        expect(result).toBe(2018);
    });

    test('23-14+123/3*49^2=98450', () => {
        const result = calculate('23-14+123/3*49^2');
        expect(result).toBe(98450);
    });

    test('23-14+123/3*49^2=98450', () => {
        const result = calculate('23-14+123/3*49^2');
        expect(result).toBe(98450);
    });

    test('4-7+8+9/2*3=18.5', () => {
        const result = calculate('4-7+8+9/2*3');
        expect(result).toBe(18.5);
    });

    test('(23-14+123/3*49)=2018', () => {
        const result = calculate('(23-14+123/3*49)');
        expect(result).toBe(2018);
    });

    test('(23-14+123)/3*49=2156', () => {
        const result = calculate('(23-14+123)/3*49');
        expect(result).toBe(2156);
    });
})

describe('Mostrar mensaje de error y retornar undefined cuando', () => {

    test('la operación tiene más de 30 caracteres', () => {
        const result = calculate('(23-14+123/3*49*4542-120-65262)');
        expect(result).toBe(undefined);
    });

})
