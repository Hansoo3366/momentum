const quotes = [
    {
        quote:"무사태평하게 보이는 사람들도 마음 속 깊은 곳을 두드려보면 어딘가 슬픈 소리가 난다.",
        author:"나쓰메 소세키",
    },
    {
        quote:"나는 신념에 가득 찬 자들을 신뢰하지 않습니다. 나는 오히려 의심에 가득 찬 자들을 신뢰합니다.",
        author:"김훈",
    },
    {
        quote:"단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author:"이드리스 샤흐",
    },
    {
        quote:"어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        author:"제임스 오펜하임",
    },
    {
        quote:"만족할 줄 아는 사람은 진정한 부자이고, 탐욕스러운 사람은 진실로 가난한 사람이다.",
        author:"솔론",
    },
    {
        quote:"운명은 용감한 자를 사랑한다",
        author:"버질",
    },
    {
        quote:"만족하게 살고 때때로 웃으며 많은 사람을 사랑한 삶이 성공한다.",
        author:"스탠 리",
    },
    {
        quote:"공이 튀는 방식을 불평하는 사람은 대개 그것을 받아치지 못하는 사람이다.",
        author:"루 홀츠",
    },
    {
        quote:"어른이란 못쓰게 된 어린아이다.",
        author:"수스",
    },
    {
        quote:"아름다운 여행을 할 때면, 시간을 셈하지 않고 순간을 누립니다. 시간을 기억하는 것이 아니라 아름다움을 기억하는 것입니다. 이것이 삶입니다.",
        author:"카이저링크",
    },
]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `" ${todaysQuote.quote} "`;
author.innerText = `- ${todaysQuote.author}`;