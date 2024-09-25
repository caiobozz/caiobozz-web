import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  displayValue: string = '0';  // Inicializando com '0' para melhor UX
  operator: string | null = null;
  firstOperand: number | null = null;
  waitingForSecondOperand: boolean = false;

  // Método para inserir números
  inputNumber(number: number): void {
    if (this.waitingForSecondOperand) {
      this.displayValue = number.toString();
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? number.toString() : this.displayValue + number;
    }
  }

  // Método para inserir ponto decimal
  inputDecimal(): void {
    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  // Método para inserir operadores
  inputOperator(operator: string): void {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.displayValue);
    } else if (this.operator) {
      const result = this.performCalculation(this.operator, this.firstOperand, parseFloat(this.displayValue));
      this.displayValue = `${result}`;
      this.firstOperand = result;
    }

    this.operator = operator;
    this.waitingForSecondOperand = true;
  }

  // Método para realizar o cálculo baseado no operador
  performCalculation(operator: string, firstOperand: number, secondOperand: number): number {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return secondOperand !== 0 ? firstOperand / secondOperand : 0;
      default:
        return secondOperand;
    }
  }

  // Método para executar o cálculo final ao pressionar "="
  calculate(): void {
    if (this.operator && this.firstOperand !== null) {
      const result = this.performCalculation(this.operator, this.firstOperand, parseFloat(this.displayValue));
      this.displayValue = `${result}`;
      this.firstOperand = null;
      this.operator = null;
      this.waitingForSecondOperand = false;
    }
  }

  // Limpar a tela
  clear(): void {
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }

  // Apagar o último dígito
  deleteLast(): void {
    this.displayValue = this.displayValue.length > 1 ? this.displayValue.slice(0, -1) : '0';
  }
}
