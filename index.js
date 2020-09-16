/*
AtCoderの問題より
  問題
    整数 a,b,c,d が与えられます。 a≤x≤b,c≤y≤d を満たす整数 x,y について、x×y の最大値はいくつですか。
  制約
    −10^9≤a≤b≤10^9
    −10^9≤c≤d≤10^9
    入力はすべて整数
*/
'use strict';

function productMax(a, b, c, d) {
  return Math.max(Math.max(a * c, a * d), Math.max(b * c, b * d));
  //return Math.max(a * c, a * d, b * c, b * d);
}
module.exports = {
  productMax: productMax
};