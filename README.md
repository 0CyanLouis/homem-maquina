 

Centro Universitario Alvares Faria 

Curso de Engenharia da computação 

Disciplina Interação Homem 

Professor(a): Lucas Hermeto 

 

Trabalho de Avaliação e Documentação Heurísticas 

Protótipo da Interface: ALFA SAÚDE CENTER 

 

      Integrantes do Grupo: 

Luis Gustavo dos Passos 

Fabio Junior 

João Marcelo 

Carlos Eduardo 

 

 

 

 

 

 

Trabalho de Avaliação e Documentação Heurística do Protótipo da Interface ALFA SAÚDE CENTER 

 

Introdução 

A interface web ALFA SAÚDE CENTER foi desenvolvida com o objetivo de atender pessoas que buscam informações sobre planos de saúde e agendamento de consultas médicas. O público-alvo é composto por usuários leigos em tecnologia, mas que desejam encontrar informações claras e rápidas sobre serviços médicos. O foco principal do projeto é garantir uma navegação intuitiva, funcionalidade eficiente e usabilidade, permitindo que o usuário realize suas tarefas com o mínimo de esforço e dificuldade. 

 

Protótipo de Baixa Fidelidade 

Para a concepção do protótipo, foi adotado o método de wireframes desenhados à mão, representando os principais fluxos da interface: 

Página inicial: opções de navegação, informações sobre planos de saúde e botão de agendamento. 

Página de planos: descrição detalhada dos serviços, preços e comparações. 

Página de agendamento: formulário simples com campos básicos (nome, data, especialidade e horário). 

As imagens dos esboços estão incluídas ao longo do documento para facilitar a visualização do layout inicial. O design focou na simplicidade e no uso de padrões convencionais para evitar confusão ao usuário. 

 

 

Análise das Heurísticas de Nielsen 

A seguir, cada uma das heurísticas é analisada, com os problemas de usabilidade identificados e suas respectivas sugestões de melhoria. 

Visibilidade do status do sistema 

Problema: Não há feedback imediato após o envio do formulário de agendamento. 

Sugestão: Implementar mensagens de confirmação visíveis, como "Agendamento realizado com sucesso" ou "Erro ao enviar, tente novamente". 

Correspondência entre o sistema e o mundo real 

Problema: Termos técnicos como "especialidade médica" podem ser confusos para leigos. 

Sugestão: Substituir por linguagem mais acessível, como "Escolha o tipo de consulta". 

Controle e liberdade do usuário 

Problema: Não há botão para "Cancelar" ou "Voltar" nas páginas. 

Sugestão: Adicionar opções visíveis para o usuário desfazer ações ou retornar à página anterior. 

Consistência e padrões 

Problema: Ícones não seguem padrões comuns; por exemplo, um símbolo genérico é usado para agendamento, em vez de um calendário. 

Sugestão: Substituir ícones por elementos reconhecíveis universalmente. 

Prevenção de erros 

Problema: O campo de data permite inserções inválidas (como 32/13/2024). 

Sugestão: Adicionar validações automáticas para impedir entradas incorretas. 

Reconhecimento em vez de memorização 

Problema: Links para as páginas de planos e agendamento não possuem descrições claras. 

Sugestão: Usar rótulos explicativos, como "Veja os planos disponíveis" e "Agende sua consulta". 

Flexibilidade e eficiência de uso 

Problema: Não há atalhos ou sugestões para usuários experientes. 

Sugestão: Incluir funcionalidades como preenchimento automático e histórico de agendamentos. 

Design estético e minimalista 

Problema: A página inicial apresenta excesso de informações em texto longo. 

Sugestão: Reduzir o texto e destacar as principais opções com botões visuais. 

Ajuda aos usuários para reconhecer, diagnosticar e corrigir erros 

Problema: Mensagens de erro genéricas, como "Erro no formulário". 

Sugestão: Exibir mensagens detalhadas, como "Preencha o campo nome corretamente". 

Ajuda e documentação 

Problema: Não há seção de FAQ ou ajuda na interface. 

Sugestão: Criar uma página dedicada com perguntas frequentes e orientações passo a passo. 

Contextualização e Análise do Código 

O protótipo da interface ALFA SAÚDE CENTER foi desenvolvido utilizando HTML, CSS e JavaScript, com foco na acessibilidade e usabilidade. Abaixo, apresentamos o código comentado e como ele contribui para o objetivo geral da interface. 

Código HTML 

O código HTML define a estrutura da interface. 

Cabeçalho 

O elemento <header> contém a logomarca e o menu de navegação, permitindo acesso rápido às principais seções. 

Um botão de emergência foi adicionado para acesso rápido a serviços críticos. 

Seção Principal (Main) 

Contém um banner com uma chamada para ação (CTA) e informações sobre os serviços oferecidos. 

As seções de serviços e agendamento são apresentadas com clareza, enfatizando a navegação e funcionalidade. 

Formulário de Agendamento 

Estruturado com campos básicos: nome, data, hora e tipo de consulta. 

Possui validações integradas e elementos de feedback para erros e sucesso. 

Rodapé 

Informações de contato e links para redes sociais são apresentados de forma acessível. 

 

Código CSS 

O CSS define a aparência e a organização visual. 

Estilos Globais 

Definição de uma tipografia padrão e uso de cores consistentes com a identidade visual. 

Elementos de Navegação 

O menu de navegação utiliza flexbox para organização e permite fácil interação visual. 

Links e botões têm estilos interativos (hover) para melhorar a usabilidade. 

Banner e CTA 

A imagem de fundo no banner é responsiva, garantindo boa visualização em diferentes dispositivos. 

Seções e Formulário 

A seção de serviços é destacada com bordas e cores consistentes. 

O formulário é organizado em coluna, com espaçamento adequado para facilitar o preenchimento. 

 

Código JavaScript 

O JavaScript gerencia a interatividade e validações. 

Rolagem Suave e indicação 

O clique no link de agendamento rola suavemente até a seção correspondente, e indica a secção que o usuário precisa acessar, melhorando a experiência de navegação. 

Função de rolagem 

Function scrollToAppointment(){ 

AppointmentSection.scrollIntoView({behavior:”smooth”});} 

Document.querySelectorAll(‘#service-link’).forEach(link => { 

 Link.addEventListener(‘click’,(event)=>{ 

 Event.preventDefault(); 

 HighlightButton(); 

 ScrollToAppointment(); 

}); 

}); 

Função de indicação 

Function highlightButton(){ 

ScheduleButton.style.backgroundColor = “lightblue”; 

SetTimeout(() => {} 

ScheduleButton.style.background = “”; 

},1000);} 

 
 

Validação do Formulário 

A validação impede o envio de dados inválidos e fornece feedback visual para erros. 

 

document.getElementById("myForm").addEventListener("submit", function(event) { 
    event.preventDefault(); 
}); 
 

Função de Ano Bissexto 

Uma verificação adicional para garantir que datas como 29 de fevereiro sejam válidas apenas em anos bissextos. 

function isLeapYear(year) { 
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); 
} 

Função de Erro 

 

 Função para indicar que as funções ainda não foram implementadas, usada por todo o código para que o usuário tenha uma resposta ao clicar em cada botão mesmo sem função. 

Function error() { 

alert(‘Função não está disponível’); 

} 

 
 

 

Integração ao Texto 

A análise do código complementa a descrição do protótipo e é relevante para a avaliação heurística. 

Visibilidade do status do sistema 

O feedback visual no formulário já é parcialmente implementado, mas pode ser aprimorado para maior clareza e acessibilidade. 

Consistência e padrões 

O uso de cores e estilos segue uma identidade visual coesa, mas ícones podem ser padronizados para maior reconhecimento. 

Prevenção de erros 

As validações do JavaScript ajudam a evitar erros de preenchimento, atendendo à heurística de Nielsen. 

Conclusão 

A integração das tecnologias e das boas práticas de design demonstra o compromisso em atender às necessidades do público-alvo, proporcionando uma interface funcional e intuitiva. Este detalhamento técnico reforça a importância do uso de linguagens e ferramentas bem estruturadas para o sucesso de um projeto de interface web. 

 

Conclusão 

O processo de avaliação heurística da interface ALFA SAÚDE CENTER destacou a importância de priorizar a experiência do usuário desde a concepção do protótipo. Identificamos diversos problemas de usabilidade, a maioria relacionados à falta de feedback claro e linguagem técnica inadequada para o público-alvo. A implementação das melhorias sugeridas pode proporcionar uma experiência mais satisfatória, intuitiva e eficiente para os usuários, reforçando o papel central da usabilidade no design de interfaces. 

Este projeto evidenciou como as 10 heurísticas de Nielsen servem como uma ferramenta indispensável para identificar e corrigir problemas em interfaces, garantindo que estas sejam acessíveis e eficazes. 
