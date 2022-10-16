import { NewsWrapper, NewsDetail, ImageContainer, NewsImage, NewsText, NewsTitle, NewsData } from '../styles/News'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function NewsItem({ imgSrc, title, category, date }) {
    return (
        <NewsWrapper as="a" href="#">
            <ImageContainer>
                <NewsImage src={imgSrc} />                    
            </ImageContainer>
            <NewsDetail>
                <NewsText>
                    <NewsTitle>
                        {title}
                    </NewsTitle>
                    <NewsData>
                        <b>{category}</b>
                        {date}
                    </NewsData>
                </NewsText>
                <ArrowForwardIcon sx={{ width: 40, height: 40 }} />
            </NewsDetail>
    </NewsWrapper>
    )
}