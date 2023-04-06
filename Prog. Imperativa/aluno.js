class aluno {
    constructor(nome, quantidadeFaltas, notas){
        this.nome = nome;
        this.quantidadeFaltas = quantidadeFaltas;
        this.notas = notas;
    }
    
    calcularMedia() {
        return this.notas.reduce((nota,notaSeguinte) => nota + notaSeguinte) / this.notas.length;
    }

    faltas() {
        this.quantidadeFaltas++;
    }
};

module.exports = aluno;