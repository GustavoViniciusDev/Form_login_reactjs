
import './App.css';

function App() {
  return (
    <main class="container">   
     <form>
      <div class="input-field">
        <input type="text" name="usuario" id="usuario" placeholder="Nome de Usuário"/>
      </div>

      <div clas="underline"></div>

      <div class="input-field">
        <input type="password" name="senha" id="senha" placeholder="Senha"/>
      </div>

      <div clas="underline"></div>
    <input type="submit" value="Logar"/>
    </form>
    <div class="footer">
        <span>Entrar com outros métodos</span>
        <div class="social-field">
          <div class="social-field twitter">
            <a href="#">
              <i class="fab fa-twitter"></i>
              Entrar com o Twitter
            </a>
          </div>
        </div>
        <div class="social-field">
          <div class="social-field facebook">
            <a href="#">
              <i class="fab fa-facebook"></i>
              Entrar com o Facebook
            </a>
          </div>
        </div>
      </div>
    </main>

  );
}

export default App;
