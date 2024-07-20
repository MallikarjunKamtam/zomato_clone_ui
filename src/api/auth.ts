import { axios } from "@/lib/interceptor";

const baseEndPoint = process.env.NEXT_PUBLIC_ZOMATO_CLONE_SERVICE;

export async function signIn(
  username: string,
  password: string
): Promise<boolean> {
  try {
    const response = await axios.post(
      `${baseEndPoint}/auth/signin`,
      { username, password },
      { withCredentials: true }
    );

    if (response.status === 200) {
      console.log("Sign in successful");
      return true;
    } else {
      console.error("Sign in failed");
    }
  } catch (error) {
    console.error("Error signing in:", error);
    return false;
  }
}

export async function signout() {
  try {
    const response = await axios.post(`${baseEndPoint}/auth/signout`);

    if (response.status === 200) {
      window.location.href = "/login";
    } else {
      console.error("Sign in failed");
    }
  } catch (error) {
    window.location.href = "/login";
    console.error("Error signing in:", error);
  }
}
