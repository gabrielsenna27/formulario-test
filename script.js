document.getElementById('formCadastro').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Coletar os dados do formulário
    const formData = new FormData(e.target);
    const data = { data: Object.fromEntries(formData.entries()) };
    const responseMessage = document.getElementById('responseMessage');

    // URL do seu SheetDB
    const apiURL = 'https://sheetdb.io/api/v1/ufa64vhfre5pa';

    try {
        // Enviar os dados para o SheetDB
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            responseMessage.textContent = "Formulário enviado com sucesso!";
            responseMessage.style.color = "green";
            e.target.reset(); // Limpa os campos do formulário
        } else {
            throw new Error('Erro ao enviar os dados');
        }
    } catch (error) {
        responseMessage.textContent = "Erro ao enviar o formulário.";
        responseMessage.style.color = "red";
        console.error('Erro:', error);
    }
});