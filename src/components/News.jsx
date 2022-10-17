import { NewsSection, SectionTitle, NewsButton } from '../styles/News'
import NewsItem from './NewsItem';
import bdJams from '../assets/images/Jams-thumbnail-1.jpeg'
import ceo from '../assets/images/Ashley-Blog-Thumbnail.jpeg'
import design from '../assets/images/image-10.png'
import climate from '../assets/images/climateneutralblog.png'
import metaverse from '../assets/images/image_from_ios.png'
import webby from '../assets/images/WebbyWinBlogthumb_220427_185100.png'
import brixton from '../assets/images/BRX_thumb.jpeg'

export default function News() {
    return (
        <NewsSection>
            <SectionTitle>
                <h2>Featured News</h2>
                <NewsButton>View All</NewsButton>
            </SectionTitle>
            <NewsItem 
                imgSrc={bdJams}
                title="B/D® JAMS: By us for us"
                category="Press"
                date=" 08.18.22" 
            />
            <NewsItem 
                imgSrc={ceo}
                title="Ashley Reichel Takes the Reins as BASIC/DEPT®'s New CEO"
                category="Press"
                date=" 08.15.22" 
            />
            <NewsItem 
                imgSrc={design}
                title="Design Systems: Good for Business"
                category="Applied"
                date=" 07.07.22" 
            />
            <NewsItem 
                imgSrc={climate}
                title="BASIC/DEPT® is Climate Neutral Certified"
                category="Press"
                date=" 05.19.22" 
            />
            <NewsItem 
                imgSrc={metaverse}
                title="7 Ways to Create Inclusive Shopping Experiences in the Metaverse"
                category="Applied"
                date=" 05.16.22" 
            />
            <NewsItem 
                imgSrc={webby}
                title="DEPT® Takes Global Network of the Year at 26th Annual Webby Awards"
                category="Awards"
                date=" 04.27.22" 
            />
            <NewsItem 
                imgSrc={brixton}
                title="A Fresh Collab with Brixton Just in Time for Spring"
                category="Work"
                date=" 04.14.22" 
            />
        </NewsSection>
    )
}