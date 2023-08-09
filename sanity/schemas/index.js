export const schemaTypes = [
  {
    name: "home",
    title: "Home",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
    ],
  },
  {
    name: "about",
    title: "About",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        validation: (Rule) => Rule.required(),
      },
    ],
  },
];
