import './HeaderSubtitle.scss'

export default function HeaderSubtitle({ title, description }) {
	return (
		<div className='header__div'>
			<h2 className='header__h2'>{title}</h2>
			<p className='header__p'>{description}</p>
		</div>
	)
}
