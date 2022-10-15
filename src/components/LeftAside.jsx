import asideLeft from './../assets/asideLeft.svg'

import './../styles/responsivity.css'

function LeftAside() {
	return (
		<aside 
			className="
				w-[50%]
				min-h-[100vh] 
				flex 
				justify-center 
				items-center 
				bg-white-200
			" 
			id="aside-left"
		>
	    	<img src={asideLeft}/>
	    </aside>
	)
}

export default LeftAside