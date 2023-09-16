const tempCrewData = {
  columns: [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "department",
      headerName: "Department",
      width: 200,
      editable: true,
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 200,
      editable: true,
    },
    {
      field: "subDepartment",
      headerName: "Sub Department",
      width: 200,
      editable: true,
    },
  ],
  rows: [
    {
      id: 1,
      name: "Tony Stark",
      department: "Stark Industries",
      designation: "CEO",
      subDepartment: "Technology",
    },
    {
      id: 2,
      name: "Steve Rogers",
      department: "Avengers",
      designation: "Super Soldier",
      subDepartment: "Superheroes",
    },
    {
      id: 3,
      name: "Natasha Romanoff",
      department: "S.H.I.E.L.D.",
      designation: "Black Widow",
      subDepartment: "Espionage",
    },
    {
      id: 4,
      name: "Peter Parker",
      department: "Daily Bugle",
      designation: "Photographer",
      subDepartment: "Journalism",
    },
    {
      id: 5,
      name: "Wanda Maximoff",
      department: "Wakanda",
      designation: "Scarlet Witch",
      subDepartment: "Mystic Arts",
    },
    {
      id: 6,
      name: "Bruce Banner",
      department: "Gamma Labs",
      designation: "Scientist",
      subDepartment: "Research",
    },
    {
      id: 7,
      name: "Matt Murdock",
      department: "Nelson & Murdock",
      designation: "Lawyer",
      subDepartment: "Legal Services",
    },
    {
      id: 8,
      name: "Wade Wilson",
      department: "Mercenaries Inc.",
      designation: "Deadpool",
      subDepartment: "Mercenary",
    },
    {
      id: 9,
      name: "Ororo Munroe",
      department: "X-Mansion",
      designation: "Storm",
      subDepartment: "Weather Control",
    },
    {
      id: 10,
      name: "Scott Summers",
      department: "X-Mansion",
      designation: "Cyclops",
      subDepartment: "Team Leader",
    },
    {
      id: 11,
      name: "Jean Grey",
      department: "X-Mansion",
      designation: "Phoenix",
      subDepartment: "Telepathy",
    },
    {
      id: 12,
      name: "Loki Laufeyson",
      department: "Asgard",
      designation: "Trickster",
      subDepartment: "Mischief",
    },
    {
      id: 13,
      name: "Peter Quill",
      department: "Guardians of the Galaxy",
      designation: "Star-Lord",
      subDepartment: "Space Exploration",
    },
    {
      id: 14,
      name: "Gamora",
      department: "Guardians of the Galaxy",
      designation: "Assassin",
      subDepartment: "Combat",
    },
    {
      id: 15,
      name: "T'Challa",
      department: "Wakanda",
      designation: "Black Panther",
      subDepartment: "Wakandan Affairs",
    },
    {
      id: 16,
      name: "Carol Danvers",
      department: "Kree Starforce",
      designation: "Captain Marvel",
      subDepartment: "Cosmic Protection",
    },
    {
      id: 17,
      name: "Doctor Strange",
      department: "Sanctum Sanctorum",
      designation: "Sorcerer Supreme",
      subDepartment: "Mystic Arts",
    },
    {
      id: 18,
      name: "Nick Fury",
      department: "S.H.I.E.L.D.",
      designation: "Director",
      subDepartment: "Strategic Operations",
    },
    {
      id: 19,
      name: "Clint Barton",
      department: "Avengers",
      designation: "Hawkeye",
      subDepartment: "Archery",
    },
    {
      id: 20,
      name: "Erik Lehnsherr",
      department: "X-Mansion",
      designation: "Magneto",
      subDepartment: "Magnetic Control",
    },
    {
      id: 21,
      name: "Nebula",
      department: "Guardians of the Galaxy",
      designation: "Cyborg",
      subDepartment: "Technology",
    },
    {
      id: 22,
      name: "Hank Pym",
      department: "Pym Technologies",
      designation: "Ant-Man",
      subDepartment: "Particle Physics",
    },
    {
      id: 23,
      name: "Diana Prince",
      department: "Themyscira",
      designation: "Wonder Woman",
      subDepartment: "Amazonian Warriors",
    },
    {
      id: 24,
      name: "Barry Allen",
      department: "Central City Police",
      designation: "The Flash",
      subDepartment: "Speed Force",
    },
    {
      id: 25,
      name: "Arthur Curry",
      department: "Atlantis",
      designation: "Aquaman",
      subDepartment: "Oceanic Guardians",
    },
    {
      id: 26,
      name: "Victor Stone",
      department: "S.T.A.R. Labs",
      designation: "Cyborg",
      subDepartment: "Cybernetics",
    },
    {
      id: 27,
      name: "Logan",
      department: "X-Mansion",
      designation: "Wolverine",
      subDepartment: "Mutant Operations",
    },
    {
      id: 28,
      name: "Groot",
      department: "Guardians of the Galaxy",
      designation: "I am Groot",
      subDepartment: "Flora Colossus",
    },
    {
      id: 29,
      name: "Rocket",
      department: "Guardians of the Galaxy",
      designation: "Rocket Raccoon",
      subDepartment: "Engineering",
    },
    {
      id: 30,
      name: "Pietro Maximoff",
      department: "Avengers",
      designation: "Quicksilver",
      subDepartment: "Super Speed",
    },
    {
      id: 31,
      name: "Stephen Strange",
      department: "Sanctum Sanctorum",
      designation: "Doctor Strange",
      subDepartment: "Mystic Arts",
    },
    {
      id: 32,
      name: "J. Jonah Jameson",
      department: "Daily Bugle",
      designation: "Editor-in-Chief",
      subDepartment: "Journalism",
    },
    {
      id: 33,
      name: "Rhodey Rhodes",
      department: "U.S. Air Force",
      designation: "War Machine",
      subDepartment: "Military Technology",
    },
    {
      id: 34,
      name: "Pepper Potts",
      department: "Stark Industries",
      designation: "COO",
      subDepartment: "Corporate Affairs",
    },
    {
      id: 35,
      name: "Gwen Stacy",
      department: "Daily Bugle",
      designation: "Reporter",
      subDepartment: "Journalism",
    },
    {
      id: 36,
      name: "Frank Castle",
      department: "NYPD",
      designation: "The Punisher",
      subDepartment: "Vigilante Justice",
    },
    {
      id: 37,
      name: "Jean Grey",
      department: "X-Mansion",
      designation: "Jean Grey",
      subDepartment: "Telepathy",
    },
    {
      id: 38,
      name: "Loki Laufeyson",
      department: "Asgard",
      designation: "Loki",
      subDepartment: "Mischief",
    },
    {
      id: 39,
      name: "Erik Killmonger",
      department: "Wakanda",
      designation: "Killmonger",
      subDepartment: "Warrior",
    },
    {
      id: 40,
      name: "Sam Wilson",
      department: "Avengers",
      designation: "Falcon",
      subDepartment: "Aerial Recon",
    },
    {
      id: 41,
      name: "Jessica Jones",
      department: "Alias Investigations",
      designation: "Private Investigator",
      subDepartment: "Detective Work",
    },
    {
      id: 42,
      name: "Luke Cage",
      department: "Heroes for Hire",
      designation: "Power Man",
      subDepartment: "Strength",
    },
    {
      id: 43,
      name: "Peggy Carter",
      department: "S.H.I.E.L.D.",
      designation: "Agent Carter",
      subDepartment: "Espionage",
    },
    {
      id: 44,
      name: "Hank McCoy",
      department: "X-Mansion",
      designation: "Beast",
      subDepartment: "Scientific Research",
    },
    {
      id: 45,
      name: "T'Chaka",
      department: "Wakanda",
      designation: "Black Panther",
      subDepartment: "Former King",
    },
    {
      id: 46,
      name: "J. Jonah Jameson",
      department: "Daily Bugle",
      designation: "Editor-in-Chief",
      subDepartment: "Journalism",
    },
    {
      id: 47,
      name: "Carol Danvers",
      department: "Kree Starforce",
      designation: "Captain Marvel",
      subDepartment: "Cosmic Protection",
    },
    {
      id: 48,
      name: "Thor Odinson",
      department: "Asgard",
      designation: "Thor",
      subDepartment: "God of Thunder",
    },
    {
      id: 49,
      name: "Scott Lang",
      department: "Pym Technologies",
      designation: "Ant-Man",
      subDepartment: "Size Manipulation",
    },
    {
      id: 50,
      name: "Diana Prince",
      department: "Themyscira",
      designation: "Wonder Woman",
      subDepartment: "Amazonian Warriors",
    },
  ],
};

exports.tempCrewData = tempCrewData;