export const useAuth = () => {
  const client = useSupabaseClient();
  const login = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.frontendBaseUrl;
    await client.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${baseUrl}/confirm` },
    });
  };
  const logOut = () => {
    client.auth.signOut().then(() => {
      navigateTo({ name: "index", replace: true });
    });
  };
  return { logOut, login };
};
