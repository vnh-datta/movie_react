const tempCharacterSetupData = {
  columns: [
    {
      field: "characterName",
      headerName: "Character Name",
      flex: 1,
    },
    {
      field: "noOfScenes",
      headerName: "No of Scenes",
      flex: 1,
      editable: true,
    },
    {
      field: "characterType",
      headerName: "Character Type",
      flex: 1,
      editable: true,
    },
    {
      field: "shootTime",
      headerName: "Shoot Time",
      flex: 1,
      editable: true,
    },
    {
      field: "screenTime",
      headerName: "Screen Time",
      flex: 1,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      editable: true,
    },
    {
      field: "assignedTo",
      headerName: "Assigned To",
      flex: 1,
      editable: true,
    },
    {
      field: "assignedDate",
      headerName: "Assigned Date",
      flex: 1,
      editable: true,
    },
  ],
  rows: [
    {
      id: 1,
      characterName: "Tony Stark",
      description: "He is Iron Man",
      noOfScenes: 5,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-15",
    },
    {
      id: 2,
      characterName: "Steve Rogers",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2.5 hours",
      screenTime: "20 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-14",
    },
    {
      id: 3,
      characterName: "Natasha Romanoff",
      noOfScenes: 6,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "18 minutes",
      status: "Completed",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 4,
      characterName: "Peter Parker",
      noOfScenes: 7,
      characterType: "Superhero",
      shootTime: "3 hours",
      screenTime: "25 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-18",
    },
    {
      id: 5,
      characterName: "Wanda Maximoff",
      noOfScenes: 3,
      characterType: "Superhero",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-17",
    },
    {
      id: 6,
      characterName: "Bruce Banner",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-20",
    },
    {
      id: 7,
      characterName: "Matt Murdock",
      noOfScenes: 2,
      characterType: "Superhero",
      shootTime: "1 hour",
      screenTime: "10 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-19",
    },
    {
      id: 8,
      characterName: "Wade Wilson",
      noOfScenes: 3,
      characterType: "Antihero",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 9,
      characterName: "Ororo Munroe",
      noOfScenes: 5,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-21",
    },
    {
      id: 10,
      characterName: "Scott Summers",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2.5 hours",
      screenTime: "20 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-14",
    },
    {
      id: 11,
      characterName: "Jean Grey",
      noOfScenes: 5,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-15",
    },
    {
      id: 12,
      characterName: "Loki Laufeyson",
      noOfScenes: 4,
      characterType: "Villain",
      shootTime: "2.5 hours",
      screenTime: "20 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-14",
    },
    {
      id: 13,
      characterName: "Peter Quill",
      noOfScenes: 6,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "18 minutes",
      status: "Completed",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 14,
      characterName: "Gamora",
      noOfScenes: 7,
      characterType: "Superhero",
      shootTime: "3 hours",
      screenTime: "25 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-18",
    },
    {
      id: 15,
      characterName: "T'Challa",
      noOfScenes: 3,
      characterType: "Superhero",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-17",
    },
    {
      id: 16,
      characterName: "Carol Danvers",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-20",
    },
    {
      id: 17,
      characterName: "Doctor Strange",
      noOfScenes: 2,
      characterType: "Superhero",
      shootTime: "1 hour",
      screenTime: "10 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-19",
    },
    {
      id: 18,
      characterName: "Nick Fury",
      noOfScenes: 3,
      characterType: "Superhero",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 19,
      characterName: "Clint Barton",
      noOfScenes: 5,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-21",
    },
    {
      id: 20,
      characterName: "Erik Lehnsherr",
      noOfScenes: 4,
      characterType: "Villain",
      shootTime: "2.5 hours",
      screenTime: "20 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-14",
    },
    {
      id: 21,
      characterName: "Nebula",
      noOfScenes: 6,
      characterType: "Antihero",
      shootTime: "2 hours",
      screenTime: "18 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-15",
    },
    {
      id: 22,
      characterName: "Hank Pym",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2.5 hours",
      screenTime: "20 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-14",
    },
    {
      id: 23,
      characterName: "Diana Prince",
      noOfScenes: 6,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "18 minutes",
      status: "Completed",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 24,
      characterName: "Barry Allen",
      noOfScenes: 7,
      characterType: "Superhero",
      shootTime: "3 hours",
      screenTime: "25 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-18",
    },
    {
      id: 25,
      characterName: "Arthur Curry",
      noOfScenes: 3,
      characterType: "Superhero",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-17",
    },
    {
      id: 26,
      characterName: "Victor Stone",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-20",
    },
    {
      id: 27,
      characterName: "Logan",
      noOfScenes: 2,
      characterType: "Antihero",
      shootTime: "1 hour",
      screenTime: "10 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-19",
    },
    {
      id: 28,
      characterName: "Groot",
      noOfScenes: 3,
      characterType: "Superhero",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 29,
      characterName: "Rocket",
      noOfScenes: 5,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-21",
    },
    {
      id: 30,
      characterName: "Pietro Maximoff",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2.5 hours",
      screenTime: "20 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-14",
    },
    {
      id: 31,
      characterName: "Stephen Strange",
      noOfScenes: 6,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "18 minutes",
      status: "Completed",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 32,
      characterName: "J. Jonah Jameson",
      noOfScenes: 7,
      characterType: "Reporter",
      shootTime: "3 hours",
      screenTime: "25 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-18",
    },
    {
      id: 33,
      characterName: "Rhodey Rhodes",
      noOfScenes: 3,
      characterType: "Superhero",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-17",
    },
    {
      id: 34,
      characterName: "Pepper Potts",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-20",
    },
    {
      id: 35,
      characterName: "Gwen Stacy",
      noOfScenes: 2,
      characterType: "Superhero",
      shootTime: "1 hour",
      screenTime: "10 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-19",
    },
    {
      id: 36,
      characterName: "Frank Castle",
      noOfScenes: 3,
      characterType: "Vigilante",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 37,
      characterName: "Jean Grey",
      noOfScenes: 5,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-21",
    },
    {
      id: 38,
      characterName: "Loki Laufeyson",
      noOfScenes: 4,
      characterType: "Villain",
      shootTime: "2.5 hours",
      screenTime: "20 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-14",
    },
    {
      id: 39,
      characterName: "Erik Killmonger",
      noOfScenes: 6,
      characterType: "Villain",
      shootTime: "2 hours",
      screenTime: "18 minutes",
      status: "Completed",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 40,
      characterName: "Sam Wilson",
      noOfScenes: 7,
      characterType: "Superhero",
      shootTime: "3 hours",
      screenTime: "25 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-18",
    },
    {
      id: 41,
      characterName: "Jessica Jones",
      noOfScenes: 3,
      characterType: "Private Investigator",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-17",
    },
    {
      id: 42,
      characterName: "Luke Cage",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-20",
    },
    {
      id: 43,
      characterName: "Peggy Carter",
      noOfScenes: 2,
      characterType: "Superhero",
      shootTime: "1 hour",
      screenTime: "10 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-19",
    },
    {
      id: 44,
      characterName: "Hank McCoy",
      noOfScenes: 3,
      characterType: "Superhero",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 45,
      characterName: "T'Chaka",
      noOfScenes: 5,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-21",
    },
    {
      id: 46,
      characterName: "J. Jonah Jameson",
      noOfScenes: 4,
      characterType: "Reporter",
      shootTime: "2.5 hours",
      screenTime: "20 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-14",
    },
    {
      id: 47,
      characterName: "Carol Danvers",
      noOfScenes: 6,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "18 minutes",
      status: "Completed",
      assignedTo: "Director",
      assignedDate: "2023-09-16",
    },
    {
      id: 48,
      characterName: "Thor Odinson",
      noOfScenes: 7,
      characterType: "Superhero",
      shootTime: "3 hours",
      screenTime: "25 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-18",
    },
    {
      id: 49,
      characterName: "Scott Lang",
      noOfScenes: 3,
      characterType: "Superhero",
      shootTime: "1.5 hours",
      screenTime: "12 minutes",
      status: "Scheduled",
      assignedTo: "Director",
      assignedDate: "2023-09-17",
    },
    {
      id: 50,
      characterName: "Diana Prince",
      noOfScenes: 4,
      characterType: "Superhero",
      shootTime: "2 hours",
      screenTime: "15 minutes",
      status: "In Progress",
      assignedTo: "Director",
      assignedDate: "2023-09-20",
    },
  ],
};

exports.tempCharacterSetupData = tempCharacterSetupData;
