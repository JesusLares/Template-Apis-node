import UserRepository from "@context/user/application/user.repository";

export default class FindUserByIdUseCases {
  async exec(id: string) {
    const userRepository = new UserRepository();
    return userRepository.findById(id);
  }
}
