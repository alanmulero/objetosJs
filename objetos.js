const lista = {
    nome: 'alan',
    idade: 54,
    dependentes: [
        {
            nome: 'jujuba',
            idade: 14
        },
        {
            nome: 'pituca',
            idade: 12
        },
        {
            nome: 'diloca',
            categoria: 'esposa',
            idade: 48
        }

    ]
}

const teste = [...lista.dependentes];

function apresentaProposta(item) {
    const propsClientes = Object.keys(lista);

    if (propsClientes.includes('dependentes')) {
        console.table(teste);
    } else {
        console.log('Dependentes não encontrados.');
    }

}

apresentaProposta(lista);
