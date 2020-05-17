export default class User {
  constructor (uid, username) {
    this._uid = uid
    this._username = username
  }

  get uid () {
    return this._uid;
  }

  get username () {
    return this._username;
  }

  set username (newName) {
    return this._username = newName
  }
}