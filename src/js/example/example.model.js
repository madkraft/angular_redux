class ExampleModel {
  constructor () {
    this.examples = [
      {'id': 1, 'title': 'AngularJS'},
      {'id': 2, 'title': 'Egghead.io'},
      {'id': 3, 'title': 'A List Apart'},
      {'id': 4, 'title': 'One Page Love'},
      {'id': 6, 'title': 'MobilityWOD'},
      {'id': 7, 'title': 'Robb Wolf'},
      {'id': 8, 'title': 'Senor Gif'},
      {'id': 9, 'title': 'Wimp'},
      {'id': 10, 'title': 'ViralViralVideos'}
    ]
  }

  getExamples () {
    return this.examples
  }

  createExample (example) {
    this.examples.push(example)
  }
}

export default ExampleModel
