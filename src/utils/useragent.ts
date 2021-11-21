import UAParser, { UAParserInstance } from 'ua-parser-js'

class UserAgent {
  static instance: UAParserInstance

  public static getInstance(): UAParserInstance {
    if (!UserAgent.instance) {
      UserAgent.instance = new UAParser()
    }

    return UserAgent.instance
  }
}

export default UserAgent
