// let isDone: boolean = false;
// const name: string = "Bob";
// const LastName: string = "Jonson";
// const age: number = 12;
// const isHappy: boolean = true;
// const budget: null = null;
// const status: undefined = undefined;

// type userProfile = {
//   userName: string;
//   age: number;
//   isActive: boolean;
// };

// const user = {
//   userName: "Bob",
//   age: 12,
//   isActive: true,
// };

// function displayUserProfile(user: userProfile) {
//   return `User name is ${user.userName} his is ${user.age} years old and hes is ${user.isActive}`;
// }

// console.log(displayUserProfile(user));

// function logName(name: string) {
//   return `${name}`;
// }

//* типізація масиву обєктів

// function calcTotal(arr: { name: string; age: number }[]) {
// }

// type User = {
//   name: string;
//   age: number;
// };

// function calcTotal(arr: User[]) {
//   //
// }

// const users = [
//   {
//     name: "bob",
//     age: 12,
//   },
//   {
//     name: "kop",
//     age: 15,
//   },
//   {
//     name: "fob",
//     age: 16,
//   },
// ];

// console.log(calcTotal(users));

//* unknow
// підходить для сценаріїв, коли ви не знаєте точного типу даних, але все ж таки хочете підтримувати сувору перевірку типів. Змінні цього типу слід перевіряти перед їх використанням.
// Найчастіше вик при роботі з бекендом

// Якщо немає помилки ми повертаємо обєкт, якщо є повертаємо null;
// function safelyPerseJson(jsonString: string): unknown {
//   try {
//     const result: unknown = JSON.parse(jsonString);
//     if (typeof result === "object" && result !== null) {
//       return result;
//     }
//   } catch (error) {
//     console.error("Failed to parse JSON:", error);
//   }
//   return null;
// }

//* any
// Any — це тип даних, який використовується, коли ви не знаєте, який тип даних може міститися у змінній.Однак, варто уникати використання типу any, оскільки це обходить переваги суворої типізації у TypeScript.

// function logDetails(value: any) {
//   console.log(`Value: ${value}, Type of value: ${typeof value}`);
// }

//* enum
// Вик для того щоб організувати, зібрати якісь значення, які будемо перевикористовувати надалі.

// enum VehicleType {
//   Car = "BMW",
//   Truck = "Scania",
//   Motorcycle = "Ducati",
// }

// function getVehicleType(vehicle: VehicleType): string {
//   return `The vehicle type is ${vehicle}`;
// }

// console.log(getVehicleType(VehicleType.Car));
// console.log(getVehicleType(VehicleType.Motorcycle));

//* Union Type
// Union Type у TypeScript дозволяє вказати, що значенням може бути один із кількох типів. Це дуже зручно, коли хочемо визначити змінну, яка може приймати різні типи даних. Типи перераховуються через вертикальну риску |
// Найчастіше використовується в React

// function formatInput(input: string | number) {
//   if (typeof input === "number") {
//     return input.toFixed(2);
//   } else {
//     return input.toUpperCase();
//   }
// }

//* Literal Type
// Literal Type — це тип, що набуває конкретного значення. З ним ви можете визначити тип змінної так, щоб він набував лише певних значень.
// Найчастіше вик

// function lightShower(color: string) {
//   if (color === "green") {
//     console.log("go");
//   } else if (color === "yellow") {
//     console.log("wait");
//   } else if (color === "red") {
//     console.log("ready");
//   }
// }

// lightShower("black"); // допускає

// function lightShower(color: "green" | "yellow" | "red") {
//   if (color === "green") {
//     console.log("go");
//   } else if (color === "yellow") {
//     console.log("ready");
//   } else if (color === "red") {
//     console.log("ready");
//   }
// }

// lightShower("black"); // підсвідчує червоним

//*******   Типи для методів та функцій  ********/

//* Return Type
//* Найч вик при роботі з бекендом, при запиті

// function logName2(name: string): string {
//   return `${name}`;
// } // рядок приймаємо і рядок повертаємо

// function greet(): string {
//   return 100; // Error: Type 'number' is not assignable to type 'string'
// }

// let result = greet();

// export {};

//* Void
// Коли фція нічого не повертає

// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage("Hello, world!");

// export {};

//* Never

// Функція, яка завжди викидає помилку
// function throwError(message: string): never {
//   throw new Error(message);
// }

// throwError("lalala");

// Функція з нескінченним циклом
// function infiniteLoop(): never {
//   while (true) {}
// }

// export {};

//* Різниця між Type та Interface
// Interface являє собою якийсь 'інтерфейс', який має описувати структуру об'єктів, їхні методи та властивості.
// Інтерфейси переважно призначені для опису класів. Через це вони не можуть зберігати в собі примітивні значення, як це може робити Type, а також масиви та інші структури даних, які не є об'єктами. Ми просто не зможемо їх туди зберегти, оскільки за синтаксисом відразу йдуть фігурні дужки {}.

// type User = {
//   name: string;
//   age: number;
// };

// interface User {
//   name: string;
//   age: number;
// }

//* Опціональні параметри та властивості
// Найчастіше вик в типізації пропсів в реакті

// interface User {
//   name: string;
//   age: number;
//   lastName?: string;
// }

//* Інтерфейси об'єктів, типізація методів з аргументом і без, з поверненням(return) і без
//*

// interface User {
//   name: string;
//   age: number;
//   lastName?: string;
//   sayHello(): string;
//   sayBye(): void;
//   showAge(userAge: number): string;
// }

// const user = {
//   name: "Bob",
//   age: 12,
//   sayHello() {
//     return "Hello";
//   },
//   sayBye() {
//     console.log("Bye");
//   },
//   showAge(userAge: number) {
//     return `My age is ${userAge}`;
//   },
// };

// interface User {
//   name: string;
//   age: number;
//   lastName?: string;
//   sayHello(): string;
//   sayBye(): void;
//   showAge(userAge: number): string;
// }

// const student: User = {
//   name: "Bob",
//   age: 12,
//   sayHello() {
//     return "Hello";
//   },
//   sayBye() {
//     console.log("Bye");
//   },
//   showAge(userAge) {
//     return `My age is ${userAge}`;
//   },
// };

//* Index properties Індексовані властівості/
// Використання індексних властивостей дозволяє вам створювати словники або карти, де ключі та значення мають певний тип.

// const Fruits = {
//   apples: number,
//   bananas: number,
//   oranges: number,
// };

// const fruits: Fruits = {
//   apples: 10,
//   bananas: 5,
//   oranges: 8,
// };

// const electronics = {
//   phones: 25,
//   laptops: 10,
//   tablets: 7,
// };

// const books = {
//   fiction: 15,
//   history: 20,
//   fantasy: 9,
// };

// щоб не порописувати тип для кожного обєкта (як вище) використовуємо індексовані властивості:
interface Dictionary {
  [key: string]: number | null;
}

let fruits: Dictionary = {
  apples: 10,
  bananas: 5,
  oranges: 8,
};

let electronics: Dictionary = {
  phones: 25,
  laptops: 10,
  tablets: 7,
};

let books: Dictionary = {
  fiction: 15,
  history: 20,
  fantasy: 9,
  peach: null,
};

//* Simple generic /
// Замість того, щоб визначати окремі функції для кожного можливого типу даних, ви можете визначити одну функцію, яка працює з "будь-яким" типом даних.
// підставляється динамічно тип аргумента фції

// function getFirstElement(arr: number[]) {
//   return arr[0];
// } // буде помилка з всіма іншими типами даними крім number

// function getFirstElement<T>(array: T[]): T | undefined {
//   return array[0];
// }

// const numberArray = [10, 20, 30];
// const stringArray = ["hello", "world", "typescript"];
// const objectArray = [{ name: "Alice" }, { name: "Bob" }];

// console.log(getFirstElement(numberArray)); //  10
// console.log(getFirstElement(stringArray)); // "hello"
// console.log(getFirstElement(objectArray)); //  { name: "Alice" }

//* Extends, keyof
// Потрібно достукати до динамічного ключа

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

const personName = getProperty(person, "name"); // "John"
const age = getProperty(person, "age"); // 30
// const errorExample = getProperty(person, "salary"); // This line would cause a compile-time error

console.log(personName); // "John"
console.log(age); // 30

//* Partial in generic
// Утилітний тип Partial<T> створює новий тип на основі типу T, але робить всі його властивості необов'язковими. Це дуже корисно в ситуаціях, коли ви хочете створити об'єкт, заснований на певному типі, але не хочете або не можете вказати значення всіх властивостей відразу.
// кейс оновлення профілю

interface UserProfile {
  username: string;
  email: string;
  age: number;
}

function updateProfile(
  profile: UserProfile,
  updates: Partial<UserProfile>
): UserProfile {
  return { ...profile, ...updates };
} // другим аргументом приймає обєкт, який містить ключі, які не мають сталої кількості

const originalProfile: UserProfile = {
  username: "johndoe",
  email: "john.doe@example.com",
  age: 28,
};

const updatedProfile = updateProfile(originalProfile, {
  email: "new.john.doe@example.com",
  age: 29,
  // gender: "male", // бути помилка, що немає такого ключа
});
console.log(updatedProfile);

//* Readonly

// interface User {
//   id: number;
//   name: string;
// }

// function displayUser(user: Readonly<User>): void {
//   console.log(`User ID: ${user.id}, Name: ${user.name}`);
//   // Attempt to modify the properties (this should cause a TypeScript error)
//   // user.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
//   // user.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property.
// }

// const user: Readonly<User> = {
//   id: 101,
//   name: "John",
// };

// displayUser(user);
// Attempt to modify outside the function (should also cause a TypeScript error)
// user.name = "Changed Name"; // Error: Cannot assign to 'name' because it is a read-only property.

//* Pick <T, K>
// Ств фцію, яка буде показувати базову інф (name, email) про нашого працівника
interface Emoployee {
  id: number;
  name: string;
  email: string;
  department: string;
  hireDate: Date;
}

const fullEmployeeInfo: Emoployee = {
  id: 101,
  name: "John Doe",
  email: "john.doe@example.com",
  department: "Engineering",
  hireDate: new Date("2020-01-10"),
};

// function displayInfo(fullEmployeeInfo: Emoployee): {
//   name: string;
//   email: string;
// } {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }

function displayInfo(
  fullEmployeeInfo: Emoployee
): Pick<Emoployee, "name" | "email"> {
  return {
    name: fullEmployeeInfo.name,
    email: fullEmployeeInfo.email,
  };
} // перший арг приймає обєкт, з якого буде витягувати ключі, а другим приймає перелік ключів, які він буде витягувати

// можна ще так зробити, але краще попередній варіант
// interface BasicInfo {
//   name: string;
//   email: string;
// }

// function displayInfo(fullEmployeeInfo: Emoployee): BasicInfo {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }

// ще один приклад
interface ApiResponse {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

function displayPost(
  post: ApiResponse
): Pick<ApiResponse, "title" | "content"> {
  return {
    title: post.title,
    content: post.content,
  };
}

//******* */ Omit<T,K> ********/
// Це Pick, але навпаки. Дозволяє створити новий тип на основі типу T шляхом виключення набору властивостей, зазначених у K.

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date; // hide info
// }

// type EmployeeBasicInfo = Omit<Employee, "hireDate">;

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string; // Sensitive information
}

function createContactInfo(user: Omit<User, "password">) {
  // Функція повертає об'єкт без password
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    age: user.age,
  };
}

// Example usage:
const fullUserInfo: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  password: "s3cr3t", // This should not be included in contact info
};

const contactInfo = createContactInfo(fullUserInfo);
console.log(contactInfo);

//********* Record<K, T> ******/
//Record<K, T> — це утилітний тип, що дозволяє створювати типи із заздалегідь відомими властивостями. Це дуже корисно, коли вам потрібно створити об'єкт із певними ключами та значеннями, типи яких ви заздалегідь знаєте.
// Принцип роботи Record наступний: ви вказуєте набір ключів K і тип T, який буде присвоєно кожному з цих ключів.

function recordTemperatures(temps: number[]): Record<string, number> {
  let temperatureRecord: Record<string, number> = {};

  temps.forEach((temp, index) => {
    temperatureRecord[`day${index + 1}`] = temp;
  });

  return temperatureRecord;
}

// Example usage:
const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
const tempRecord = recordTemperatures(weeklyTemps);
console.log(tempRecord);
// Output: { day1: 22, day2: 24, day3: 23, day4: 25, day5: 24, day6: 26, day7: 27 }
