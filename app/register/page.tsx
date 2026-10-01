import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create an Account - ByteSpace",
  description: "Sign up quickly, easily, and at no cost to join ByteSpace.",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
