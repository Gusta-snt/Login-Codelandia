import googleIcon from './assets/googleIcon.svg'

function App() {

  return (
    <aside className="py-16 px-8">
      <div className="flex flex-col gap-2">
        <p className="font-[merriweather] text-[#1A202C] font-normal text-base">Bem vindo de volta</p>
        <h1 className="font-[merriweather] font-bold text-2xl text-[#1A202C]">Faça login na sua conta</h1>
      </div>
      <form className="flex flex-col gap-3 mt-10">
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-[lato] text-[#1A202C] font-normal text-base">
            Email
          </label>
          <input id="email" type="email" className="py-4 px-5 rounded border-[1px] border-[#E8E8E8] border-solid text-black placeholder:text-[gray]" placeholder="Digite seu email aqui!"/>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="font-[lato] text-[#1A202C] font-normal text-base">
            Senha
          </label>
          <input id="password" type="password" className="py-4 px-5 rounded border-[1px] border-[#E8E8E8] border-solid text-black placeholder:text-[gray]" placeholder="Digite sua senha aqui!"/>
        </div>
        <div className="flex justify-between mt-7">
          <div>
            <input id="rememberMe" type="checkbox" />
            <label htmlFor="rememberMe" className="ml-3 font-[lato] font-normal text-base text-[#1A202C]">Lembre de mim</label>
          </div>
          <a href="#" className="ml-3 font-[lato] font-normal text-base text-[#2B6CB0]">Esqueceu sua senha?</a>
        </div>
        <div className="flex flex-col gap-4 mt-7">
          <button type="submit" className="bg-[#04C35C] font-[lato] font-bold text-base text-[white] flex items-center justify-center rounded h-12">Entrar</button>
          <button type="button" className="bg-[#1A202C] font-[lato] font-bold text-base text-[white] flex items-center justify-center rounded h-12 gap-3"><img src={googleIcon} alt="Ícone do google."/>Ou faça login com o Google</button>
        </div>
        <a href="" className="text-center mt-[100px] font-[lato] font-normal text-base text-[#1A202C]">Não tem uma conta? <span className="text-[#2B6CB0]">Cadastre-se</span></a>
      </form>
    </aside>
  )
}

export default App
