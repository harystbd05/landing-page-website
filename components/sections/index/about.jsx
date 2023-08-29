// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="What We Do"
					subTitle="Collabin.id We help web3 start-up to expand their market to Indonesia. Based on data from the Indonesian Ministry of Trade, in July 2021 the number of cryptocurrency investors in Indonesia reached 7.4 million people and increased to 12.4 million people in July 2022. This number has exceeded the number of stock and mutual fund investors in the same period and is predicted to increase to reach 50 million by 2025."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/family-photo-data.jpg" alt="Nelson family photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Influencer Marketing"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Influencers are recognized to be more effective at activating audiences than traditional in-house marketing. We get you connected to top-tier and micro-influencers who can build hype and awareness."
						/>
						<BadgesBlock 
							title="Strategic Partnerships" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="Grow your company by partnering with other projects and communities.We drive growth for your business by reaching out to your ideal target market through collaboration and cooperation."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]