import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  src,
  place,
  about,
  title,
  Convention_Center,
  date
}) => {

  return (
    <ContentModal media_type={'media_type'} id={'id'}>
      <img
        className="poster"
        src={`${src}`}
        alt={title}
      />

      <span className="index-date mt-3 mb-2">{place}</span>
      <b className="title mb-2">{about}</b>
      <b className="index-date mb-2">Booth: {title}</b>
      <b className="index-date mb-2"> Convention Center: {Convention_Center}</b>
      <b className="borderLine"></b>
      <span className="subTitle">
        <span className="subTitle index-date mt-2 mb-4">{date}</span>
      </span>

    </ContentModal>
  );
};

export default SingleContent;
