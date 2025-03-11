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

interface User {
  name: string;
  age: number;
  lastName?: string;
  sayHello(): string;
  sayBye(): void;
  showAge(userAge: number): string;
}

const student: User = {
  name: "Bob",
  age: 12,
  sayHello() {
    return "Hello";
  },
  sayBye() {
    console.log("Bye");
  },
  showAge(userAge) {
    return `My age is ${userAge}`;
  },
};
