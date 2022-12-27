//현재 보고있는 기기 디스플레이에 대한 정보, 너비, 높이
interface IDisplayModel {
  innerWidth: number;
  innerHeight: number;
  type: "mobile" | "web" | null;
  configure(
    userAgent: string,
    { innerHeight, innerWidth }: { innerHeight: number; innerWidth: number }
  ): void;
}

class DisplayModel implements IDisplayModel {
  innerWidth;
  innerHeight;
  type: "mobile" | "web" | null;
  constructor() {
    this.innerWidth = 0;
    this.innerHeight = 0;
    this.type = null;
  }

  /**
   *
   * @param userAgent : navigator.userAgent
   * @param {innerHeight, innerWidth} : 클라이언트 윈도우 객체의 높이와 너비
   */
  configure(
    userAgent: string,
    { innerHeight, innerWidth }: { innerHeight: number; innerWidth: number }
  ) {
    if (
      userAgent.match(
        /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/
      ) != null ||
      userAgent.match(/LG|SAMSUNG|Samsung/) != null
    ) {
      this.type = "mobile";
    } else {
      this.type = "web";
    }

    this.innerHeight = innerHeight;
    this.innerWidth = innerWidth;
  }
}

export default DisplayModel;
