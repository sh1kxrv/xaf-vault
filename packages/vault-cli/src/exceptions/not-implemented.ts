export class NotImplementedError extends Error {
  constructor() {
    super('Not implemented')
    Object.setPrototypeOf(this, NotImplementedError.prototype)
  }
}
