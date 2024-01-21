export interface LoginForm {
  username: string
  password: string
}

interface dataType {
  token: string
}

export interface LoginResponseData {
  code: number,
  data?: dataType
}

interface userInfo {
  userId: number,
  avatar: string,
  userName: string,
  password: string,
  dosc: string,
  roles: string [],
  buttons: string[],
  routes: string[],
  token: string
}

interface user {
  checkUser: userInfo
}

export interface userResponseData {
  code: number,
  data: user
}
