const stateDefault = {
  isTai: true,
  arrHinh: [
    "./ImgXucXac/1.png",
    "./ImgXucXac/2.png",
    "./ImgXucXac/3.png",
    "./ImgXucXac/4.png",
    "./ImgXucXac/5.png",
    "./ImgXucXac/6.png",
  ],
  arrKetQua: ["./ImgXucXac/1.png", "./ImgXucXac/2.png", "./ImgXucXac/3.png"],
  ketQua: 0,
  soBanThang: 0,
  tongBanChoi: 0,
};

export const XucXacReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "THAY_DOI_CUOC": {
      state.isTai = payload;
      return { ...state };
    }
    case "KET_QUA": {
      let { soBanThang, tongBanChoi, isTai } = state;
      let arrHinh = [...state.arrHinh];
      let arrNew = [];
      let tong = 0;
      for (let index = 0; index < 3; index++) {
        let random = Math.floor(Math.random() * 6);
        let giaTriThuc = random + 1;
        tong += giaTriThuc;
        arrNew.push(arrHinh[random]);
      }

      let soBanThangNew = soBanThang;
      if (isTai == true && tong % 2 == 0) {
        soBanThangNew += 1;
      }
      if (isTai == false && tong % 2 != 0) {
        soBanThangNew += 1;
      }

      // if (isTai) {
      //   if (tong % 2 == 0) {
      //     soBanThangNew += 1;
      //   }
      // } else {
      //   if (tong % 2 != 0) {
      //     soBanThangNew += 1;
      //   }
      // }

      return {
        ...state,
        arrKetQua: arrNew,
        ketQua: tong,
        soBanThang: soBanThangNew,
        tongBanChoi: tongBanChoi + 1,
      };
    }
    default:
      return { ...state };
  }
};
