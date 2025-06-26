function gerarCurriculoPDF() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const corFundo = "#0a0a0a";
    const corTexto = "#fff";
    const corTitulo = "#50bfff";
    const corSecao = "#ffd700";

    doc.setFillColor(10, 10, 10);  
    doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');  

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(corTitulo);
    doc.text("Currículo - Will Dantas", 20, 20);

   
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(corTexto);  
    doc.text("Nome: Will Dantas", 20, 40);
    doc.text("Profissão: DevOps & Desenvolvedor", 20, 50);

   
    doc.setFontSize(12);
    doc.text("Descrição:", 20, 60);
    doc.text("DevOps e desenvolvedor que vive para automatizar tudo.", 20, 70);


    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(corSecao);  
    doc.text("Experiência Profissional", 20, 90);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(corTexto);
    doc.text("Banco Santander - 2020 → 2022", 20, 100);
    doc.text("Elera - 2023 → 2025", 20, 110);
    doc.text("Accenture - 2025 → Atual", 20, 120);


    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(corSecao);  
    doc.text("Formação Acadêmica", 20, 140);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(corTexto);
    doc.text("ETEC de Guaianazes - 2020 → 2021 Curso Técnico", 20, 150);
    doc.text("São Paulo Tech School - 2023 → 2024 Curso Superior", 20, 160);


    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(corSecao);  
    doc.text("Habilidades", 20, 180);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(corTexto);
    doc.text("HTML, CSS, JavaScript, Node.js, React, Java, Docker, Salesforce, MySQL, AWS, SQL Server", 20, 190);


    doc.save("Curriculo_Will_Dantas.pdf");


    document.addEventListener("DOMContentLoaded", function() {
        const experiences = document.querySelectorAll('.job');
    
        const checkIfInView = () => {
            experiences.forEach(experience => {
                const rect = experience.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    experience.classList.add('animate');
                }
            });
        };
    
        window.addEventListener('scroll', checkIfInView);
        checkIfInView();  
    });
    
    
}
