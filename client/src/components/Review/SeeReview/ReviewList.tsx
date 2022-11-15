import ReviewCard from "./ReviewCard";

export default function ReviewList() {
  return (
    <div>
      {reviewData.map((data, index) =>
        <ReviewCard placeName={data.placeName} address={data.address} content={data.content} visitDate={data.visitDate}
                    createDate={data.createDate} nickname={data.nickname} rating={data.rating} index={index}/>
      )}
    </div>
  );
}

const reviewData = [
  {
    placeName: '성남큐브미술관',
    address: '경기도 성남시',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    visitDate: '2022-11-04',
    createDate: '2022-11-15',
    nickname: '도희맘',
    rating: 3,
  },
  {
    placeName: '장소A',
    address: '경기도 성남시',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    visitDate: '2022-11-04',
    createDate: '2022-11-15',
    nickname: '도희맘',
    rating: 3,
  },
  {
    placeName: '장소B',
    address: '경기도 성남시',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    visitDate: '2022-11-04',
    createDate: '2022-11-15',
    nickname: '도희맘',
    rating: 3,
  },
  {
    placeName: '장소C',
    address: '경기도 성남시',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    visitDate: '2022-11-04',
    createDate: '2022-11-15',
    nickname: '도희맘',
    rating: 3,
  }
];