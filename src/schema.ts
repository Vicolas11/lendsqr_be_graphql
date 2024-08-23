export const typeDefs = `#graphql
  type Query {
    user(page: Int, pageSize: Int): UserPage
  }

  type UserPage {
    page: Int
    pageSize: Int
    totalRecords: Int
    totalPages: Int
    data: [User]
  }

  type User {
    id: ID
    userTier: Int
    profile: Profile
    maritalDetails: Marital
    bankDetails: Bank
    guarantor: [Guarantor]
    socials: Socials
    education: Education
  }

  enum Gender {
    Male
    Female
  }

  enum Status {
    Active
    Inactive
    Pending
    Blacklisted
  }

  type Profile {
    firstName: String
    lastName: String
    lendsqrId: String
    organization: String
    username: String
    email: String
    status: Status
    gender: Gender
    phoneNumber: String
    avatar: String
    createdAt: String
  }

  type Marital {
    maritalStatus: String
    children: Int
    typeOfResidence: String
  }

  type Bank {
    currency: String
    bank: String
    accountNumber: String
    accountBalance: Int
    bvn: String
  }

  type Guarantor {
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    relationship: String
  }

  type Socials {
    facebook: String
    instagram: String
    twitter: String
  }

  type Education {
    level: String
    employmentStatus: String
    sector: String
    duration: String
    officeEmail: String
    loanRepayment: String
    monthlyIncome: [Int]
  }
`;
