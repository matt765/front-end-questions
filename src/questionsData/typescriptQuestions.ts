export const typescriptQuestionsData = [
  {
    id: 4001,
    question: "What is Typescript?",
    answer:
      "A superset of JavaScript that introduces optional static typing, classes, and interfaces. Enhances code editor support for error detection. Makes JS more maintainable and scalable, compiling down to pure JS.",
  },
  {
    id: 4002,
    question: "What are the 3 components of Typescript?",
    answer: "The language itself, the Compiler, and the Language Service.",
  },
  {
    id: 4003,
    question: "What's the difference between JS and TS?",
    answer: "JS doesn't support static typing or native modules.",
  },
  {
    id: 4004,
    question: "What is static typing?",
    answer: "Variables types are declared and enforced at compile time.",
  },
  {
    id: 4005,
    question: "List some user-defined data types.",
    answer:
      "Enumerations (sets of constants), classes, interfaces, arrays, and tuples (arrays with a fixed number of elements).",
  },
  {
    id: 4006,
    question: "List some built-in data types.",
    answer: "Number, String, Boolean, Null, Undefined, Void.",
  },
  {
    id: 4007,
    question: "What is an interface in TS?",
    answer:
      "An interface is a contract for a structure. If a class implements an interface, it must define all its properties/methods.",
  },
  {
    id: 4008,
    question: "What are access modifiers in TS?",
    answer:
      "Public (accessible to all), Private (accessible only within the declaring class), Protected (accessible within declaring class and its subclasses).",
  },
  {
    id: 4009,
    question: "Definition and usage: 'any' type.",
    answer:
      "A type that represents any JavaScript value. Used when we don’t know the variable type in advance. Example: const employee: any = JSON.parse(employeeData);",
  },
  {
    id: 4010,
    question: "Definition and usage: 'void' type",
    answer:
      "Represents absence of type. Can only be assigned null or undefined. Used in functions that don’t return value. Example: function notify(): void { alert('Hi'); }",
  },
  {
    id: 4011,
    question: "Definition and usage: 'unknown' type.",
    answer:
      "A type-safe counterpart of 'any'. Anything can be assigned to 'unknown', but 'unknown' isn't assignable to anything but itself and 'any' without type assertion or control flow based narrowing. Example: let foo: unknown = 'xd'; // Type 'unknown' not assignable to type 'string'",
  },
  {
    id: 4012,
    question: "Definition and usage: 'generic' types.",
    answer:
      "Generics allow creating reusable code components that work with different types. Example: function identity<T>(arg: T): T { return arg; }",
  },
  {
    id: 4013,
    question: "What is a module in TS?",
    answer:
      "A container for related code, enhancing maintainability. Example: module name { class x {} class y {} export class z{} }; var obj = new name.z{};",
  },
  {
    id: 4014,
    question: "How do arrays work in Typescript?",
    answer:
      "They store multiple values of a specified type. Example: let values: number[] = [1, 2, 3, 4];",
  },
  {
    id: 4015,
    question: "What are primitive types in Typescript?",
    answer: "Number, String, Boolean, Null, Undefined, Symbol, and BigInt.",
  },
  {
    id: 4016,
    question: "Syntax for function with type annotations?",
    answer:
      "Example: function greet(name: string): string { return Hello, ${name}; }",
  },
  {
    id: 4017,
    question: "How to create objects in Typescript?",
    answer:
      "Object type refers to any value with properties, which can be defined using an object literal. Example: let point: {x: number, y: number} = {x: 10, y: 20};",
  },
  {
    id: 4018,
    question: "Does TS support all object-oriented principles?",
    answer:
      "Yes, Typescript supports Encapsulation, Inheritance, Abstraction, and Polymorphism.",
  },
  {
    id: 4019,
    question: "How to define class constants in TS?",
    answer:
      "Use the 'readonly' modifier. Example: class Example { readonly constant: string = 'constant'; }",
  },
  {
    id: 4020,
    question: "What is function overloading in TS?",
    answer:
      "Allows defining multiple function signatures with the same name but different parameter types and/or return types. The implementation must be compatible with all signatures. Example: function add(a: number, b: number): number; function add(a: string, b: string): string; function add(a: any, b: any): any;",
  },
  {
    id: 4021,
    question: "What is a Tuple in TypeScript?",
    answer:
      "A type that allows expressing an array where the type of certain elements is known. Example: let x: [string, number] = ['hello', 10];",
  },
  {
    id: 4022,
    question: "What is an Enum in TypeScript?",
    answer:
      "A way of giving friendly names to sets of numeric values. Example: enum Color {Red, Green, Blue}; let c: Color = Color.Green;",
  },
  {
    id: 4023,
    question: "What is the never type in TypeScript?",
    answer:
      "Represents the type of values that never occur. For instance, a function that always throws an error never returns a value. Example: function error(message: string): never { throw new Error(message); }",
  },
  {
    id: 4024,
    question: "What is type assertion in TypeScript?",
    answer:
      "A way to tell the compiler 'trust me, I know what I'm doing.' TypeScript assumes that you, the programmer, have performed any special checks that you need. Example: let strAny: any = 'this is a string'; let strLength: number = (strAny as string).length;",
  },
  {
    id: 4025,
    question: "How to define a class in TypeScript?",
    answer:
      "Classes are the fundamental entities used to create reusable components. They include properties and methods. Example: class Person { constructor(public name: string) { } }",
  },
  {
    id: 4026,
    question: "What are optional parameters in TypeScript?",
    answer:
      "In TypeScript, parameters can be made optional by appending a '?' to the end of parameter name. Optional parameters must follow required parameters. Example: function buildName(firstName: string, lastName?: string) { /.../ }",
  },
  {
    id: 4027,
    question: "What are default parameters in TypeScript?",
    answer:
      "Default-initialized parameters that come after all required parameters. They are automatically optional. Example: function buildName(firstName: string, lastName = 'Smith') { /.../ }",
  },
  {
    id: 4028,
    question: "What is a union type in TypeScript?",
    answer:
      "Union types are a way of declaring a variable that could contain multiple different types. Example: let val: string | number; val = 12; val = 'Hello';",
  },
  {
    id: 4029,
    question: "What are interfaces with optional properties in TypeScript?",
    answer:
      "In TypeScript, interfaces can include optional properties, marked by a '?'. Example: interface SquareConfig { color?: string; width?: number; }",
  },
  {
    id: 4030,
    question: "What is Type Inference in TypeScript?",
    answer:
      "TypeScript automatically infers the data type if it's not explicitly declared, e.g. in variable initialization or function return types. Example: let x = 3; // TypeScript infers x is a number",
  },
  {
    id: 4031,
    question: "What are getters and setters in TypeScript?",
    answer:
      "They are a way of encapsulating and controlling access and assignment to class member variables. Example: class Employee { private _fullName: string; get fullName(): string { return this._fullName; } set fullName(newName: string) { this._fullName = newName; } }",
  },
  {
    id: 4032,
    question: "What are mixins in TypeScript?",
    answer:
      "A way to create classes taking multiple classes as input, leading to a composition of functionality. Example: class Activatable { isActive = false; }",
  },
  {
    id: 4033,
    question: "What is namespace in TypeScript?",
    answer:
      "A way to logically group related code. This is a TypeScript specific feature and it's not available in ES6. Example: namespace MyMath { export function add(a: number, b: number): number { return a + b; } }",
  },
  {
    id: 4034,
    question: "How does inheritance work in TypeScript?",
    answer:
      "Inheritance is a way for classes to extend a base class, inheriting its properties and methods. Example: class Animal { move() { /.../ } } class Dog extends Animal { /* Inherits move from Animal / }",
  },
  {
    id: 4035,
    question: "What is an abstract class in TypeScript?",
    answer:
      "Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Example: abstract class Animal { abstract makeSound(): void; move(): void { /...*/ } }",
  },
  {
    id: 4036,
    question: "What is a static property/method in TypeScript?",
    answer:
      "A static member exists on the class itself rather than on instances. Example: class Grid { static origin = { x: 0, y: 0 }; }",
  },
];
