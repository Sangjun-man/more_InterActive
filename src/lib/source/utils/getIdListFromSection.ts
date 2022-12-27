import { SectionElem } from "../interface";

const getIdListFromSection = (section: Array<SectionElem>) => {
  let idList;
  for (let i of section) {
    if (
      i.startPoint <= window.pageYOffset &&
      window.pageYOffset <= i.endPoint
    ) {
      idList = i.idList;
    }
  }
  return idList;
};
export default getIdListFromSection;
