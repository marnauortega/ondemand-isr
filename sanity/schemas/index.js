export const schemaTypes = [
  {
    name: "test",
    title: "Test",
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
];
