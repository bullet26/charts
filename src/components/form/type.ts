export interface UserInfoSignUp {
  name: string
  email: string
  password: string
}

export type UserInfoLogin = Omit<UserInfoSignUp, 'name'>
