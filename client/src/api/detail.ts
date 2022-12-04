import axios from "axios";

type DETAIL_DIALOG_DATA = {
  placeName: string,
  placeAddress: string,
  placeTelephone: string,
  visitNum: number,
  weather: {
    sky: string,
    degree: string,
    rainyProb: string,
    rainyType: string,
    windSpeed: string,
  },
  reviewContent: string,
  pictureId: number,
  distance: string,
  rating: number,
  visitSelected: boolean,
}

// 콜백 수정하기

const getDetailDialogData = (placeId: number, userId: number, latitude: number, longitude: number, callback: (data: DETAIL_DIALOG_DATA) => void) => {
  const url = `api/detail/${placeId}/${userId}/${latitude}/${longitude}`;
  axios.get(url)
    .then(response=>{
      callback(response.data);
      console.log(response);
    }).catch(error=>{
      alert(error);
  })
};

const sendVisitData = (userId: number, placeId: number, callback: ()=>void) => {
  const url = '/api/visit';
  const data = {
    userId: userId,
    placeId: placeId,
  }
  axios.post(url, data)
    .then(response=>{
      console.log(response)
      callback();
    }).catch(error=>{
      alert(error);
  })
};

const deleteVisitData = (userId: number, placeId: number, callback: ()=>void) => {
  const url = `/api/visit/${userId}/${placeId}`;
  axios.delete(url)
    .then(response=>{
      console.log(response)
      callback();
    }).catch(error=>{
    alert(error);
  })
};

export {getDetailDialogData, sendVisitData, deleteVisitData};