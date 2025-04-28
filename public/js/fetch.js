fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => {
    console.log("포스트 데이터:", data);
  })
  .catch(err => {
    console.error("문제가 발생했습니다:", err);
  });

  async function getTodo() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/5");
      if (!res.ok) throw new Error("서버에서 오류 응답!");
      const data = await res.json();
      console.log("받은 할 일:", data);
    } catch (err) {
      console.error("문제 발생:", err);
    }
  }
  
  getTodo();