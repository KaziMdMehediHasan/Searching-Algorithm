const givenArr = [
  {
    id: 1,
    name: "Hassan",
    phone: "23452",
  },
  {
    id: 5,
    name: "Jamil",
    phone: "5964",
  },
  {
    id: 7,
    name: "Kamal",
    phone: "8594",
  },
  {
    id: 13,
    name: "Ahmad",
    phone: "86574",
  },
  {
    id: 17,
    name: "Jasmine",
    phone: "6694",
  },
];

function populate(arr) {
  //   console.log(givenArr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < givenArr.length; j++) {
      if (arr[i] === givenArr[j].id) {
        newArr.push(givenArr[j]);
      } else {
        continue;
      }
    }
  }
  return newArr;
}

console.log(populate([5, 17, 1]));
