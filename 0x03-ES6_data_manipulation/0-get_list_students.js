export default function getListStudents() {
  class Students {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }
  }

  const array = [new Students(1, 'Guillame', 'San Francisco'), new Students(2, 'James', 'Columbia'), new Students(5, 'Serena', 'San Francisco')];

  return array;
}
