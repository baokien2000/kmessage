import AuthRepository from '@/respositories/auth'

export async function signIn(email: string, password: string) {
    return await AuthRepository.signIn(email, password)
}
// export async function SignUp(email: string, password: string) {
//     return await AuthRepository.SignUp(email,password);
// }
// export async function resetPassword(email: string, password: string, token: string) {
//     return await AuthRepository.ResetPassword(email,password,token);
// }
// export async function changePassword(user: IUser,  oldPassword: string, newPassword: string) {
//     return await AuthRepository.changePassword(user,oldPassword,newPassword);
// }

export async function sendOTP(email: string) {
    return await AuthRepository.sendOTP(email)
}

// export async function verifyToken (accessToken:string,email:string) {
//     return await AuthRepository.verifyToken(accessToken,email);
// }
export async function verifyOTP(email: string, otp: string) {
    return await AuthRepository.verifyOTP(email, otp)
}

export async function createUser(email: string, password: string) {
    return await AuthRepository.createUser(email, password)
}
export async function getMe(accessToken: string) {
    return await AuthRepository.getMe(accessToken)
}

export async function signOut() {
    return await AuthRepository.signOut()
}

export async function refreshToken() {
    return await AuthRepository.refreshToken()
}

export async function resetPassword(email: string, password: string) {
    return await AuthRepository.resetPassword(email, password)
}
// export async function verifyCaptcha(token: string) {
//     return await AuthRepository.verifyCaptcha(token);
//  }
