const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
	const fonts = [
		{
			name: 'baloo',
			link: 'https://fonts.googleapis.com/css?family=Baloo:400'
		},
		{
			name: 'nunito',
			link: 'https://fonts.googleapis.com/css?family=Nunito:400,900'
		}
	]

	fonts.map(font => {
		const link = document.createElement('link')
		link.href = font.link
		link.rel = 'stylesheet'
		document.head.appendChild(link)
	});

  const baloo = new FontFaceObserver('Baloo')
  const nunito = new FontFaceObserver('Nunito')

	Promise.all([
		baloo.load(),
		nunito.load()
	])
	.then(() => {
		console.log('Fonts loaded')
  })
}

export default Fonts