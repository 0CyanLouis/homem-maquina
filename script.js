// Adiciona um ouvinte de evento ao formulário
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var messageDiv = document.getElementById("message");
    
    var errorDiv = document.getElementById("error");

    messageDiv.style.display = "none"; // Oculta mensagem de sucesso

    errorDiv.style.display = "none"; // Oculta mensagem de erro

    var dateInput = document.getElementById("date").value;

    var selectedDate = new Date(dateInput);

    var currentDate = new Date();

    var year = selectedDate.getFullYear();

    var month = selectedDate.getMonth(); // Janeiro é 0

    var day = selectedDate.getDate();

    // Verifica se o ano está fora do intervalo permitido
    if (year < 2024 || year > 2025) {
        errorDiv.textContent = "Por favor, selecione uma data entre 2024 e 2025.";
        errorDiv.style.display = "block";
        return;
    }

    // Verifica se a data é válida
    if (month > 11 || (month === 11 && day > 30) || (month === 1 && day > 28 && !isLeapYear(year))) {
        errorDiv.textContent = "Data inválida. Verifique o dia e o mês.";
        errorDiv.style.display = "block";
        return;
    }

    // Exibe a mensagem de agendamento concluído
    messageDiv.textContent = "Agendamento concluído"; // Define o texto da mensagem
    messageDiv.style.display = "block"; // Torna a mensagem visível

    // Remove a mensagem após 3 segundos
    setTimeout(function() {
        messageDiv.style.display = "none"; // Oculta a mensagem
    }, 3000); // 3000 milissegundos = 3 segundos
});



// Função para verificar se um ano é bissexto
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function error() {
    alert('Função não está disponível');
}


  
    const scheduleButton = document.getElementById("schedule");
    const appointmentSection = document.getElementById("appointment");


    function highlightButton() {
        scheduleButton.style.backgroundColor = "lightblue";
        setTimeout(() => {
            scheduleButton.style.backgroundColor = "";
        }, 1000);
    }


    function scrollToAppointment() {
        appointmentSection.scrollIntoView({ behavior: "smooth" });
    }


    document.querySelectorAll('#service-link').forEach(link => {
        link.addEventListener('click', (event) => {

            event.preventDefault(); 

            highlightButton(); 

            scrollToAppointment(); 
        });
    });



  
