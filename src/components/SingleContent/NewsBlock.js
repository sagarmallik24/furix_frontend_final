import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import { Link } from "react-router-dom";

function NewsBlock({
    src,
    discription,
    otherDisc,
    date
}) {
    return (
        <ContentModal >
                    <img
                        className="poster"
                        src={`${src}`}
                        alt={`news`}
                    />
            <Link to='#news data' target='_blank'>
                <div className="container-poster">
                    <p className="mt-3 mt-4 mb-4 ">{discription}</p>
                    <p className="index-date mt-3 mb-4">{otherDisc}</p>

                    <b className="borderLine" />

                    <p className="index-date mt-5 mb-4">{date}</p>
                </div>
            </Link>
        </ContentModal>
    );
}

export default NewsBlock