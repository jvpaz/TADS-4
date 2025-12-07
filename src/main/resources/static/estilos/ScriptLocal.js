document.addEventListener('DOMContentLoaded', function() {

    /* Ajuda da IA para JS, se quiserem podem mudar para ser mais fácil de compreender o código */

  
    /**
     * Esta é uma função "ajudadora" que configura uma galeria.
     * Ela "liga" um grupo de botões (pelo seletor) a um grupo de imagens (pelo seletor).
     * @param {string} seletorBotoes - A classe dos botões (ex: ".botI")
     * @param {string} seletorImagens - A classe das imagens (ex: ".imgsI")
     */
    function configurarGaleria(seletorBotoes, seletorImagens) {
        
        // Seleciona os botões e imagens ESPECÍFICOS desta galeria
        let bts = document.querySelectorAll(seletorBotoes);
        let imgs = document.querySelectorAll(seletorImagens);

        // Se não encontrar os elementos, não faz nada (evita erros)
        if (bts.length === 0 || imgs.length === 0) {
            return;
        }

        // --- Define o Estado Inicial ---
        // 1. Esconde todas as imagens desta galeria
        imgs.forEach(function(img) {
            img.style.display = 'none';
        });

        // 2. Mostra apenas a primeira imagem (se ela existir)
        if (imgs[0]) {
            imgs[0].style.display = 'inline'; // ou 'block' se preferir
        }

        // --- Adiciona os Eventos de Clique ---
        // Itera sobre cada botão deste grupo
        bts.forEach(function(bt, index) {
            
            // Adiciona o listener de clique
            bt.addEventListener('click', function() {
                
                // Verifica se o índice do botão (0, 1 ou 2) corresponde a uma imagem
                if (index < imgs.length) {
                    
                    // Esconde todas as imagens SOMENTE DESTA GALERIA
                    imgs.forEach(function(img) {
                        img.style.display = 'none';
                    });
                    
                    // Mostra a imagem correspondente ao botão clicado
                    imgs[index].style.display = 'inline';
                }
            });
        });
    }

    // --- Inicia as 3 galerias independentemente ---

    // Configura a Galeria 1: Liga botões ".botI" com imagens ".imgsI"
    configurarGaleria('.botI', '.imgsI');
    
    // Configura a Galeria 2: Liga botões ".botII" com imagens ".imgsII"
    configurarGaleria('.botII', '.imgsII');
    
    // Configura a Galeria 3: Liga botões ".botIII" com imagens ".imgsIII"
    configurarGaleria('.botIII', '.imgsIII');

});
