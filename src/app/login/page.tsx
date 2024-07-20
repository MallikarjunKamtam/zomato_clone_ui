"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "@/api/auth";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const handleSubmit = async (
    values: { username: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const { username, password } = values;
      const isSigninSuccess = await signIn(username, password);

      if (isSigninSuccess) {
        window.location.href = "/";
      } else {
        // Handle failed sign-in
        alert("Sign-in failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col">
              <label htmlFor="username" className="mb-2 text-sm">
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="p-2 mb-4 border border-gray-600 bg-gray-900 rounded"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 mb-2"
              />
              <label htmlFor="password" className="mb-2 text-sm">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="p-2 mb-4 border border-gray-600 bg-gray-900 rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 mb-2"
              />
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
