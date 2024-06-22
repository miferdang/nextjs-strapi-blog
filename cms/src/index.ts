export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  // register(/*{ strapi }*/) {},

  register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");

    extensionService.use(({ nexus }) => {
      // Mutation - create message
      const createMessageMutation = nexus.extendType({
        type: "Mutation",
        definition(t) {
          // Define - create message mutation
          t.field("createMessage", {
            // Type - response
            type: nexus.objectType({
              name: "CreateMessageResponse",
              definition(t) {
                t.string("id");
              },
            }),

            // Type - arguments
            args: {
              data: nexus.nonNull("MessageInput"),
            },

            // Handle - resolver
            async resolve(_parent, args, _context) {
              const { name, phone, email, message } = args.data || {};

              try {
                const createdMessage = await strapi.services[
                  "api::message.message"
                ].create({
                  data: { ...args.data, publishedAt: null }, // Only send message draft not public
                });

                // Handle - throw error if create message fail
                if (!createdMessage) {
                  throw new Error("Failed to create message");
                }

                // Handle - send email to admin
                const sendedEmail = await strapi
                  .plugin("email")
                  .service("email")
                  .send({
                    to: "dangphuong19vn@gmail.com",
                    from: "dangphuong19vn@gmail.com",
                    subject: "Message from nextjs strapi blog",
                    html: `<div><span><h4>Name: </h4>${name}</span></div>
                    <div><span><h4>Phone number: </h4>${phone}</span></div>
                    <div><span><h4>Email: </h4>${email}</span></div>
                    <div><p><h4>Message: </h4>${message}</p></div>`,
                  });

                // Handle - log error when sending message fail
                if (!sendedEmail) {
                  console.error("Cannot sending email");
                }

                // Return - response
                return {
                  id: createdMessage.id,
                };
              } catch (error) {
                console.error("Error creating message:", error);
                throw error;
              }
            },
          });
        },
      });

      return { types: [createMessageMutation] };
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
