import axios from 'axios'

export class PennyService {
  constructor(private baseUrl: string) {}

  async signIn(email: string, pass: string) {
    const res = await axios.post(this.baseUrl + '/auth', {
      email,
      password: pass,
    })
    return res.data
  }
}
