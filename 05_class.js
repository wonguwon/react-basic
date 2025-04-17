// 📘 CHXX. JavaScript 클래스(Class) 문법 정리

// ✅ 1. 클래스 선언 (Class Declaration)
// - 객체를 생성하는 템플릿 (붕어빵 틀)
// - 생성자(constructor)와 메서드(method)를 가질 수 있음

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // 메서드 정의
    sayHi() {
      console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    }
  
    getOlder() {
      this.age += 1;
    }
  }
  
  // 인스턴스 생성
  const user1 = new Person("지민", 25);
  console.log(user1); // Person { name: '지민', age: 25 }
  
  user1.sayHi(); // 출력: 안녕하세요, 저는 지민입니다.
  user1.getOlder();
  console.log(user1.age); // 출력: 26
  
  // ------------------------------------------------------------
  
  // ✅ 2. 클래스 표현식 (Class Expression)
  // - 변수에 클래스를 할당 (익명 또는 이름 지정 가능)
  
  const Animal = class {
    constructor(type) {
      this.type = type;
    }
  
    speak() {
      console.log(`이 동물은 ${this.type}입니다.`);
    }
  };
  
  const dog = new Animal("강아지");
  dog.speak(); // 출력: 이 동물은 강아지입니다.
  
  // ------------------------------------------------------------
  
  // ✅ 3. 클래스 상속 (Inheritance)
  // - extends 키워드로 부모 클래스의 속성과 메서드 상속
  // - super()로 부모 생성자 호출
  
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age); // 부모 생성자 호출
      this.grade = grade;
    }
  
    introduce() {
      console.log(`${this.name}은 ${this.grade}학년입니다.`);
    }
  }
  
  const student1 = new Student("지원", 20, 2);
  student1.sayHi();      // Person 메서드 사용
  student1.introduce();  // Student 전용 메서드 사용
  
  // ------------------------------------------------------------
  
  // ✅ 4. 클래스와 객체 리터럴 비교
  // - 둘 다 객체를 생성하지만 클래스는 템플릿으로 재사용하기 쉬움
  
  // 객체 리터럴 방식
  const car1 = {
    brand: "Hyundai",
    drive: function () {
      console.log("달립니다!");
    }
  };
  
  // 클래스 방식
  class Car {
    constructor(brand) {
      this.brand = brand;
    }
  
    drive() {
      console.log(`${this.brand}가 달립니다!`);
    }
  }
  
  const car2 = new Car("Kia");
  car2.drive(); // 출력: Kia가 달립니다!
  
  // ------------------------------------------------------------
  
  // ✅ 5. 클래스 필드 (Class Fields, 실험적 문법)
  // - constructor 없이도 속성 정의 가능 (최신 브라우저 지원)
  
  class Counter {
    count = 0;
  
    increment() {
      this.count += 1;
      console.log("카운트:", this.count);
    }
  }
  
  const c = new Counter();
  c.increment(); // 출력: 카운트: 1
  
  // ------------------------------------------------------------
  
  // ✅ 6. static 키워드
  // - 클래스 자체에 속한 메서드 (인스턴스가 아닌 클래스에서 직접 호출)
  
  class MathHelper {
    static add(a, b) {
      return a + b;
    }
  }
  
  console.log(MathHelper.add(3, 4)); // 출력: 7
  // MathHelper 인스턴스 없이 바로 호출 가능
  