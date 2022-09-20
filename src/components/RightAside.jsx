import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

import googleIcon from './../assets/googleIcon.svg'

import './../styles/responsivity.css'

function RightAside() {
	return (
		<aside className="py-16 px-8 flex flex-col items-center justify-center w-[50%]" id="aside-right">
	        <div className="flex flex-col gap-2 max-w-[374px]">
	          <p className="font-[merriweather] text-gray font-normal text-base">Bem vindo de volta</p>
	          <h1 className="font-[merriweather] font-bold text-2xl text-gray">Faça login na sua conta</h1>
	        </div>
	        <form className="flex flex-col gap-3 mt-10 max-w-[374px]">
	          <div className="flex flex-col gap-3">
	            <label htmlFor="email" className="font-[lato] text-gray font-normal text-base">
	              Email
	            </label>
	            <input id="email" type="email" className="py-4 px-5 rounded border-[1px] border-[#E8E8E8] border-solid text-black placeholder:text-gray" placeholder="Digite seu email aqui!"/>
	          </div>
	          <div className="flex flex-col gap-3">
	            <label htmlFor="password" className="font-[lato] text-gray font-normal text-base">
	              Senha
	            </label>
	            <input id="password" type="password" className="py-4 px-5 rounded border-[1px] border-[#E8E8E8] border-solid text-black placeholder:text-gray" placeholder="Digite sua senha aqui!"/>
	          </div>
	          <div className="flex justify-between mt-7">
	            <div className="flex items-center">
	              <label className="flex items-center justify-center gap-[11px] font-[lato] font-normal text-sm text-gray">
	                <Checkbox.Root className="flex items-center justify-center rounded-[50%] border-[1px] border-gray border-solid w-[15px] h-[15px]">
	                  <Checkbox.Indicator>
	                    <Check size={15}/>
	                  </Checkbox.Indicator>
	                </Checkbox.Root>
	                Lembre de mim
	              </label>
	            </div>
	            <a href="#" className="font-[lato] font-normal text-sm text-purple-light hover:underline">Esqueceu sua senha?</a>
	          </div>
	          <div className="flex flex-col gap-4 mt-7">
	            <button type="submit" className="bg-green-light font-[lato] font-bold text-base text-[white] flex items-center justify-center rounded h-12 hover:bg-[#057C3C]">Entrar</button>
	            <a href="#" className="bg-gray font-[lato] font-bold text-base text-[white] flex items-center justify-center rounded h-12 gap-3 hover:bg-[#0B0E13]"><img src={googleIcon} alt="Ícone do google."/>Ou faça login com o Google</a>
	          </div>
	          <a href="#" className="text-center mt-[100px] font-[lato] font-normal text-base text-gray">Não tem uma conta? <span className="text-purple-light hover:underline">Cadastre-se</span></a>
	        </form>
	      </aside>
	)
}

export default RightAside