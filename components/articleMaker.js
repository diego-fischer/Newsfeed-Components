export default function articleMaker(articleData){

		const article = document.createElement('div')
		article.classList.add('article')

		const h2 = document.createElement('h2')
		article.appendChild(h2)
		h2.innerHTML = articleData.title


		const date = document.createElement('p')
		article.appendChild(date)
		date.classList.add('date')
		date.innerHTML = articleData.date

		const p1 = document.createElement('p')
		article.appendChild(p1)
		p1.innerHTML = articleData.firstParagraph


		const p2 = document.createElement('p')
		article.appendChild(p2)
		p2.innerHTML = articleData.secondParagraph

		const p3 = document.createElement('p')
		article.appendChild(p3)
		p3.innerHTML = articleData.thirdParagraph


		const span = document.createElement('span')
		article.appendChild(span)
		span.classList.add('expandButton')
		span.innerHTML = '+'

		span.addEventListener('click', () => {
			article.classList.toggle('article-open')
		})

		return article
	
}

