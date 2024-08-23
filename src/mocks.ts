import { users } from "./data";

// A map of functions which return data for the schema.
export const resolvers = {
  Query: {
    user: (_: any, { page = 1, pageSize = 10 }: any) => {
      const totalRecords = users.length;
      const totalPages = Math.ceil(totalRecords / pageSize);
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      const data = users.slice(startIndex, endIndex);

      return {
        page,
        pageSize,
        totalRecords,
        totalPages,
        data,
      };
    },
  },
};
