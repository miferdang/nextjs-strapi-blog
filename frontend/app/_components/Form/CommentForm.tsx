import { CreateCommentDocument } from "@/graphql/codegen/graphql";
import { useMutation } from "@apollo/client";
import { Box, Button, Callout, Flex, Grid, Spinner, Text, TextArea, TextField } from "@radix-ui/themes";
import { Form, Formik } from "formik";
import { Check, X } from "lucide-react";
import { useCallback } from "react";
import * as y from "yup";

// Schema - comment form values
const CommentFormSchema = y.object({
    name: y.string().max(300).required(),
    email: y.string().email().required(),
    content: y.string().max(5000).required(),
    articleId: y.string().max(999999999).required(),
});

// Type - comment from values exact from schema
type TConmmentFormValues = y.InferType<typeof CommentFormSchema>;

// Type - props
type TProps = {
    articleId: string;
};

// Define - initial values

// Component - form comment
const CommentForm = ({ articleId }: TProps) => {
    const initialValues: TConmmentFormValues = { name: "", email: "", content: "", articleId };

    // Graphql - create comment
    const [createComment, createCommentStatus] = useMutation(CreateCommentDocument);

    // Handle - submit form
    const onSubmit = useCallback(
        async (
            values: TConmmentFormValues,
            { resetForm }: { resetForm: (initialValues: TConmmentFormValues) => void }
        ) => {
            createComment({ variables: values }).then(() => {
                resetForm(initialValues);
            });
        },
        []
    );

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={CommentFormSchema}>
            {({ handleChange, values, errors, touched }) => (
                <Form>
                    <Flex direction="column" gap="5" width="100%">
                        {/* Callout - alert comment */}
                        {createCommentStatus.called && !createCommentStatus.loading && !createCommentStatus.error ? (
                            <Callout.Root color="green">
                                <Callout.Icon>
                                    <Check />
                                </Callout.Icon>
                                <Callout.Text>Your comment was sending, thank you for your opinion!</Callout.Text>
                            </Callout.Root>
                        ) : null}

                        {createCommentStatus.called && !createCommentStatus.loading && createCommentStatus.error ? (
                            <Callout.Root color="red">
                                <Callout.Icon>
                                    <X />
                                </Callout.Icon>
                                <Callout.Text>Your comment failed to send. Please try again!</Callout.Text>
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

                            {/* Component - Email */}
                            <Box>
                                {/* Label - Email */}
                                <Text htmlFor="Email" size="2">
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
                        </Grid>

                        {/* Component - content */}
                        <Box>
                            {/* Label - content */}
                            <Text htmlFor="content" size="2">
                                content *
                            </Text>

                            {/* TextArea - content */}
                            <TextArea
                                name="content"
                                value={values.content}
                                onChange={handleChange}
                                placeholder="Please enter your content…"
                            />

                            {/* Error - content */}
                            {errors.content && touched.content ? (
                                <Text color="red" size="2">
                                    {errors.content}
                                </Text>
                            ) : null}
                        </Box>

                        {/* Button - submit */}
                        <Button
                            type="submit"
                            highContrast
                            disabled={createCommentStatus.loading}
                            className="!w-[100px]"
                        >
                            <Spinner loading={createCommentStatus.loading} />
                            {createCommentStatus.loading ? " Your comment are submiting..." : "Submit"}
                        </Button>
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};

export default CommentForm;
