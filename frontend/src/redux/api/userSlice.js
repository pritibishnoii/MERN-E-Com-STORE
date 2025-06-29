import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constant";

// injectEndpoints ---> add another api url to existing url
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
        body: { token: localStorage.getItem("token") }, // Send token in body
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
} = userApiSlice;

// http://localhost:5000/api/users ----> USERS_URL
// ` use${Login}Mutation `; // use+ endpoint name+mutation  --->useLoginMutation

// headers: {
//   'Content-Type': 'application/json',     // Data format
//   'Authorization': 'Bearer abc123',       // Authentication
//   'Accept': 'application/json',           // Response format
//   'User-Agent': 'Mozilla/5.0...',        // Browser info
//   'Cache-Control': 'no-cache',            // Caching behavior
// }
