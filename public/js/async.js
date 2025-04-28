function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ok = Math.random() > 0.5;
            if (ok) resolve("✅ 데이터 불러오기 성공!");
            else reject("❌ 데이터 불러오기 실패!");
        }, 2000);
    });
}

console.log("Promise 예제 시작!");

fetchData()
    .then(result => {
        console.log("then 결과:", result);
    })
    .catch(error => {
        console.error("catch 에러:", error);
    })
    .finally(() => {
        console.log("Promise 예제 끝!");
    });

    console.log("async/await 예제 시작!");

async function testAsync() {
  try {
    const result = await fetchData();
    console.log("await 결과:", result);
  } catch (error) {
    console.error("catch 에러:", error);
  } finally {
    console.log("async/await 예제 끝!");
  }
}

testAsync();
