document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o recarregamento da página

        // Capturar os valores do formulário
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var data = document.getElementById("data").value;
        var horario = document.getElementById("horario").value;
        var tipoServico = document.getElementById("tipoServico").value;
        var numResidentes = document.getElementById("numResidentes").value;
        var embalagem = document.getElementById("embalagem").value;
        var maceneiro = document.getElementById("maceneiro").value;
        var origem = document.getElementById("origem").value;
        var tipoImovelAtual = document.getElementById("tipoImovelAtual").value;
        var destino = document.getElementById("destino").value;
        var tipoImovelDestino = document.getElementById("tipoImovelDestino").value;
        var infoAdicional = document.getElementById("infoAdicional").value;

        // Inicializa o EmailJS com a Public Key
        emailjs.init("zfKYgN-XsR6ihpjFF"); // Substitua pela sua Public Key do EmailJS

        // Enviar e-mail usando EmailJS
        emailjs.send("ourocarreto", "template_y8wcq2d", {
            nome: nome,
            email: email,
            telefone: telefone,
            data: data,
            horario: horario,
            tipoServico: tipoServico,
            numResidentes: numResidentes,
            embalagem: embalagem,
            maceneiro: maceneiro,
            origem: origem,
            tipoImovelAtual: tipoImovelAtual,
            destino: destino,
            tipoImovelDestino: tipoImovelDestino,
            infoAdicional: infoAdicional
        }).then(function (response) {
            alert("Orçamento enviado com sucesso!");
        }, function (error) {
            alert("Erro ao enviar e-mail. Tente novamente.");
            console.error("Erro:", error);
        });
    });
});
// JavaScript Document