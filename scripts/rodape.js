function loadingFooter() {
  const footerHTML = `
    <div class="footer">
              <div class="footer-section">
                
                <div>
                <span class="paw-icon_footer">🐾</span>
                <span class="footer-logo_span">PetLove</span>
                </div>
                <p> Conectando pets e famílias desde 2020</p>
            </div>

            <div class="footer-section">
              <h4> Contato</h4>
              <a href="mailto:@gmail.com">📧 contato@petlove.com.br</a>
              <a href="tel: 0000000-0000"> 📱 (85) 99999-9999</a>
            </div>
            </div>
            
            <div class="footer-bottom">
              <p> © 2026 PetLove - Todos os direitos reservados </p>
            </div>
            `;
  document
    .getElementById("footer-container")
    .insertAdjacentHTML("afterbegin", footerHTML);
}
loadingFooter();
