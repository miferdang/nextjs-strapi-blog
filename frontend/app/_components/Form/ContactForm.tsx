import { CreateMessageDocument } from "@/graphql/codegen/graphql";
import { useMutation } from "@apollo/client";
import { Box, Button, Callout, Flex, Grid, Spinner, Text, TextArea, TextField } from "@radix-ui/themes";
import { Form, Formik } from "formik";
import { Check, X } from "lucide-react";
import { useCallback } from "react";
import * as y from "yup";

// Schema - contact form values
const ContactFormSchema = y.object({
    name: y.string().max(300).required(),
    phone: y.string().required(),
    email: y.string().email().required(),
    message: y.string().max(5000).required(),
});

// Type - contact from values exact from schema
type TContactFormValues = y.InferType<typeof ContactFormSchema>;

// Define - initial values
const initialValues: TContactFormValues = { name: "", phone: "", email: "", message: "" };

// Component - form contact
const ContactForm = () => {
    // Graphql - create message
    const [createMessage, createMessageStatus] = useMutation(CreateMessageDocument);

    // Handle - submit form
    const onSubmit = useCallback(
        async (
            values: TContactFormValues,
            { resetForm }: { resetForm: (initialValues: TContactFormValues) => void }
        ) => {
            createMessage({ variables: values }).then(() => {
                resetForm(initialValues);
            });
        },
        []
    );

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={ContactFormSchema}>
            {({ handleChange, values, errors, touched }) => (
                <Form>
                    <Flex direction="column" gap="5" width={{ initial: "100%", sm: "480px" }}>
                        {/* Callout - alert message */}
                        {createMessageStatus.called && !createMessageStatus.loading && !createMessageStatus.error ? (
                            <Callout.Root color="green">
                                <Callout.Icon>
                                    <Check />
                                </Callout.Icon>
                                <Callout.Text>Thank you for contacting me. Have a nice day!</Callout.Text>
                            </Callout.Root>
                        ) : null}

                        {createMessageStatus.called && !createMessageStatus.loading && createMessageStatus.error ? (
                            <Callout.Root color="red">
                                <Callout.Icon>
                                    <X />
                                </Callout.Icon>
                                <Callout.Text>Your message failed to send. Please try again!</Callout.Text>
                            </Callout.Root>
                        ) : null}

                        {/* Row - name & phone */}
                        <Grid columns="2" gap="4">
                            {/* Component - name */}
                            <Box>
                                {/* Label - name */}
                                <Text htmlFor="name" size="2">
                                    Name *
                                </Text>

                                {/* Input - name */}
                                <TextField.Root
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="Please enter your name…"
                                />

                                {/* Error - name */}
                                {errors.name && touched.name ? (
                                    <Text color="red" size="2">
                                        {errors.name}
                                    </Text>
                                ) : null}
                            </Box>

                            {/* Component - phone */}
                            <Box>
                                {/* Label - phone */}
                                <Text htmlFor="phone" size="2">
                                    Phone *
                                </Text>

                                {/* Input - phone */}
                                <TextField.Root
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder="Please enter your phone…"
                                />

                                {/* Error - phone */}
                                {errors.phone && touched.phone ? (
                                    <Text color="red" size="2">
                                        {errors.phone}
                                    </Text>
                                ) : null}
                            </Box>
                        </Grid>

                        {/* Component - email */}
                        <Box>
                            {/* Label - email */}
                            <Text htmlFor="email" size="2">
                                Email *
                            </Text>

                            {/* Input - email */}
                            <TextField.Root
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Please enter your email…"
                            />

                            {/* Error - email */}
                            {errors.email && touched.email ? (
                                <Text color="red" size="2">
                                    {errors.email}
                                </Text>
                            ) : null}
                        </Box>

                        {/* Component - message */}
                        <Box>
                            {/* Label - message */}
                            <Text htmlFor="message" size="2">
                                Message *
                            </Text>

                            {/* TextArea - message */}
                            <TextArea
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                placeholder="Please enter your message…"
                            />

                            {/* Error - message */}
                            {errors.message && touched.message ? (
                                <Text color="red" size="2">
                                    {errors.message}
                                </Text>
                            ) : null}
                        </Box>

                        {/* Button - submit */}
                        <Button type="submit" highContrast disabled={createMessageStatus.loading}>
                            <Spinner loading={createMessageStatus.loading} />
                            {createMessageStatus.loading ? " Your contact are submiting..." : "Submit"}
                        </Button>
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
