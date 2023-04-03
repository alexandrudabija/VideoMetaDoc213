export interface TestAll {
  result: Array<Question | UserData>;
}

// export interface Test {
//   0?: Question;
//   1?: Question;
//   2?: Question;
//   3: UserData;
// }


export interface Question {
  question?: string,
  answer?:string

}

export interface UserData {
data?:string,
  name?: string,
  phone?: string,
  location?:string



}

