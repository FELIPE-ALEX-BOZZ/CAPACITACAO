//https://nodejs.org/dist/latest-v17.x/docs/api/os.html#os
const os = require('os');


setInterval(()=>{

    //para testar: console.log(os); e no terminal node pcRamUsage.js
    //console.log(os);

    const { arch, platform, totalmem, freemem} = os;

    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024/ 1024;
    const usage = (fRam / tRam) * 100;

    //agora vamos criar uma constante, contendo um objeto e enviar alguns valores para ele.
    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: parseInt(tRam) +' MB',// TotalRAM: totalmem(), precisaremos converter de bits para megabits, como?
        Freeman: parseInt(fRam) +' MB', // utilizamos o método parseInt() para converter os valores em inteiros
        Usage: usage.toFixed(2) + '%', //usage.toFixed() para limitar as casas decimais.
    }

    // bora testar!
    console.clear(); // para não lotar a tela com informações, antes de mandar imprimir, posso simplesmente mandar limpar.
    //console.log(stats); // para imprimir inline
    // também posso criar uma tabela:
    console.table(stats);
    exports.stats = stats; // para exportar a informação (objeto criado) para o servidor (importar no arquivo do server.js)

}, 3000);
