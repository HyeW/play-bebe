import ReviewCard from "./ReviewCard";
import {SeeMoreButton} from "../../Place/NormalPlace/NormalPlace";
import {useDispatch, useSelector} from "react-redux";
import {SeeReviewAction} from "./SeeReviewReducer";
import {RootState} from "../../../store";
import {getReviewData} from "../../../api/review";

export default function ReviewList(props: { isOnePlace: boolean }) {
  const dispatch = useDispatch();
  const reviewData = useSelector((state: RootState) => state.SeeReviewReducer.reviewData);
  const seeMoreCount = useSelector((state: RootState) => state.SeeReviewReducer.seeMoreCount);

  const handleClickSeeMoreButton = () => {
    getReviewData(seeMoreCount + 1, (newData) => dispatch(SeeReviewAction.setReviewData(reviewData.concat(newData))));
    dispatch(SeeReviewAction.setSeeMoreCount(seeMoreCount + 1));
  };

  return (
    <div>
      {reviewData.map((data, index) =>
        <ReviewCard establishmentName={data.establishmentName} address={data.address} content={data.content}
                    visitDate={data.visitDate}
                    createDate={data.createDate} nickname={data.nickname} rating={data.rating} index={index}
                    isOnePlace={props.isOnePlace} key={index} reviewId={data.reviewId}/>
      )}
      {!props.isOnePlace &&
          <SeeMoreButton handleClickSeeMoreButton={handleClickSeeMoreButton}/>
      }
    </div>
  );
}