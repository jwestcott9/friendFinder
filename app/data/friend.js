// ===============================================================================
// DATA
// Below data will hold all of the friends that are available to test against with friend compatibility.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Jeff",
    "photo": "https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/10286876_10152104126992083_2634932907229055612_o.jpg?_nc_cat=104&_nc_oc=AQkoWSmwMDCfqjBLtLvQ_3hg_UoEWkYYyFDssA04x5-mvpO3glK_IZejUZ2hp-RiCxewr1uHEsK8BVH79lU5XAJr&_nc_ht=scontent.fapa1-2.fna&oh=f7235a6fc9a70c0c0c960b462852e3d5&oe=5D997147",
    "scores":[
      3,
      4,
      1,
      5,
      2,
      4,
      5,
      1,
      2,
      3
  
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;