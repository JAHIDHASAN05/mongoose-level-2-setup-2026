export type userName = {
    firstName: string;
    middleName: string;
    lastName: string;
  }

  export type guardianInfo ={
    fatherName: String;
    fatherContactNo: string;
  }

export type user = {
  name:userName;
  email: string;
  gender: "male" | "female";
  guardian:guardianInfo ;
};
