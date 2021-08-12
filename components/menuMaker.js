/* eslint-disable no-debugger */
export default function menuMaker(menuItems){
	const menu = document.createElement('div')
	menu.classList.add('menu')
	const ul = document.createElement('ul')
	menu.appendChild(ul)

	menuItems.forEach(el =>{
		let li = document.createElement('li')
		li.innerText = el
		ul.appendChild(li)
	})

	document.querySelector('img.menu-button').addEventListener('click', ()=>{
		
		menu.classList.toggle('menu--open')
		
	})

	
	return menu	

}


{/* <div class="menu">
<ul>
	{each menu item as an <li>}
</ul>
</div> */}