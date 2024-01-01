export default class Person {
  #name
  constructor(name: string) {
    this.#name = name
  }
  getName() {
    return this.#name
  }
}
