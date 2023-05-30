class Image {
  constructor(name, path) {
    this.name = name
    this.path = path
  }

  getPath() {
    return this.path
  }

  getData() {
    return {
      name: this.name,
      path: this.path,
    }
  }
}

