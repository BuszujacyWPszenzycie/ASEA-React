import HeaderSubtitle from './HeaderSubtitle'
import './Header.scss'
import { HEADER_SUBTITLE } from '../data/HeaderSubtitleData'

console.log(HEADER_SUBTITLE)

export default function Header() {
	return (
		<div className='header__div'>
			<h1 className='header__h1'>ASEA</h1>
			<div className='header__subdiv'>
				{HEADER_SUBTITLE.map(item => (
					<HeaderSubtitle key={item.title} {...item} />
				))}
				{/* <HeaderSubtitle {...HEADER_SUBTITLE[0]} />
				<HeaderSubtitle title='Kadry' />
				<HeaderSubtitle title='Podatki' /> */}
			</div>
		</div>
	)
}
