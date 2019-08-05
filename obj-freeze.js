var o1 = {name:`kim`, score:[1,2]}
Object.freeze(o1)
Object.freeze(o1.score)
o1.score = 'lee'
// o1.score.push(3) 오류발생.
console.log(o1)


const o3 = {name:`park`} //cost의 의미는 가리키고 있는 레퍼런스를 바꿀 수 없음을 뜻한다. 따라서 o3 = o1 처럼 작성하면 오류가 난다.
//o3 = o1