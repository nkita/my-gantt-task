// 日付変換用関数
export const dateConverter = {
  /** 
   * Date()をYYYY-MM-DDの文字列で返却します。
   * @module data2str
   * @param {Date} date - Dateオブジェクト
   * @return {{string,boolean}} - 日付 or false (例)2022-01-01
   */
  data2str(date) {
    const str = Object.prototype.toString;
    if (str(date) === str(new Date())) {
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    } else {
      return false
    }
  }
}


