// 説明文を作る関数
function getDescription(name, price) {
  let res = '「' + name + '」' + price + '円';
  return res;
}

// 関数を利用した処理
console.log('メニュー' + getDescription('パフェ', 860));
