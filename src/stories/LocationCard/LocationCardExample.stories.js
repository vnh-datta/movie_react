import LocationCardExample from "./LocationCardExample";

export default {
  title: "Example/LocationCardExample",
  component: LocationCardExample,
  argTypes: {
    title: { control: "text" },
    subHeader: { control: "text" },
    description: { control: "text" },
    requirements: { control: "text" },
    selected: { control: "boolean" },
    status: { control: "text" },
    showStatusButton: { control: "boolean" },
    showSelectButton: { control: "boolean" },
    showMoreButton: { control: "boolean" },
  },
};

export const Card1 = {
  args: {
    id: 3,
    title: "Natasha Romanoff",
    status: "In Progress",
    totalScenes: "test",
    selected: true,
    showStatusButton: false,
    showSelectButton: true,
    showMoreButton: true,
    description:
      "Natasha Romanoff, also known as Black Widow, is a skilled spy and assassin. She's highly trained in hand-to-hand combat and espionage.",
    requirements: "Red hair, athletic build, striking and confident look",
  },
};

export const Card2 = {
  args: {
    id: 8,
    title: "Carol Danvers",
    status: "Scheduled",
    totalScenes: "test",
    selected: false,
    showStatusButton: false,
    showSelectButton: true,
    showMoreButton: true,
    description:
      "Carol Danvers, also known as Captain Marvel, is a superhero with incredible cosmic powers. She's a fierce protector of the universe.",
    requirements: "Captain Marvel suit, cosmic energy aura, determined look",
  },
};
