function enviarParaWhatsApp(event) {
  event.preventDefault(); // Prevenir o envio padrão do formulário

  // Capturar os dados do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const dataInput = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;
  const tipoServico = document.getElementById("tipoServico").value;
  const numResidentes = document.getElementById("numResidentes").value;
  const embalagem = document.getElementById("embalagem").value;
  const maceneiro = document.getElementById("maceneiro").value;
  const origem = document.getElementById("origem").value;
  const tipoImovelAtual = document.getElementById("tipoImovelAtual").value;
  const destino = document.getElementById("destino").value;
  const tipoImovelDestino = document.getElementById("tipoImovelDestino").value;
  const infoAdicional = document.getElementById("infoAdicional").value;

  // Função para formatar a data
  function formatarData(dataISO) {
    const opcoes = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'America/Sao_Paulo' };
    const data = new Date(dataISO + 'T00:00:00-03:00'); // Ajuste para o fuso horário de Brasília
    return data.toLocaleDateString('pt-BR', opcoes);
  }

  // Formatar a data da mudança
  const dataFormatada = formatarData(dataInput);

  // Montar a mensagem
  const mensagem = `*Nome completo:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Data da mudança:* ${dataFormatada}
*Horário da mudança:* ${horario}
*Tipo de serviço:* ${tipoServico}
*Número de moradores:* ${numResidentes}
*Serviço de embalagem:* ${embalagem}
*Montagem/desmontagem de móveis:* ${maceneiro}
*Endereço de origem:* ${origem} (${tipoImovelAtual})
*Endereço de destino:* ${destino} (${tipoImovelDestino})
*Informações adicionais:* ${infoAdicional || "Nenhuma"}`;

  // Enviar para o WhatsApp
  const telefoneTransportador = "5571997289355"; // Substitua pelo número do transportador
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefoneTransportador}&text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsApp, "_blank");

  // Enviar para o e-mail usando EmailJS
  emailjs.init("SEU_USER_ID"); // Substitua pelo seu User ID do EmailJS
  emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", {
    from_name: nome,
    from_email: email,
    message: mensagem,
  }).then(
    function (response) {
      alert("E-mail enviado com sucesso!");
      console.log("E-mail enviado:", response.status, response.text);
    },
    function (error) {
      alert("Erro ao enviar o e-mail.");
      console.error("Erro ao enviar o e-mail:", error);
    }
  );
}
