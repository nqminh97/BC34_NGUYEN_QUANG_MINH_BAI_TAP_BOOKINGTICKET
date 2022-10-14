const stateDefault = {
  danhSachDatGhe: [],
};

export const BookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      let danhSachGheDangDat = [...state.danhSachDatGhe];
      let index = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );

      if (index !== -1) {
        danhSachGheDangDat.splice(index, 1);
      } else {
        danhSachGheDangDat.push(action.ghe);
      }
      state.danhSachDatGhe = danhSachGheDangDat;
      return { ...state };
    }
    case "HUY": {
      let danhSachGheDangDat = [...state.danhSachDatGhe];
      let index = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );

      if (index !== -1) {
        danhSachGheDangDat.splice(index, 1);
      }
      state.danhSachDatGhe = danhSachGheDangDat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
