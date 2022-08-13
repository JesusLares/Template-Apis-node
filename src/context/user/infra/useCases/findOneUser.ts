import UserRepository from "@context/user/application/user.repository";

export default class FindOneUserUseCases {
  async exec(query: object) {
    const userRepository = new UserRepository();
    return userRepository.findOne(query);
  }
}
