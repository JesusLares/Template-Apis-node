import {
  connectMemoryDB,
  clearDataBase,
  closeDataBase,
} from "../../src/config/db/mongo-memory";
import CreateUser from "../../src/context/user/infra/useCases/createUser";
import UpdateUser from "../../src/context/user/infra/useCases/updateUser";
import { UserModel } from "../../src/context/user/domain/UserModel";
import UserFactory from "../mocks/factories/userFactory";

let userMock: UserModel;
let updateUser: UpdateUser;
beforeAll(() => connectMemoryDB());
beforeEach(async () => {
  updateUser = new UpdateUser();
  const createUser = new CreateUser();
  userMock = await createUser.exec(UserFactory.createDefault());
});
afterEach(() => clearDataBase());
afterAll(() => closeDataBase());

describe("update user useCase", () => {
  test("update user with correct params", async () => {
    const user = await updateUser.exec(userMock._id, {
      ...userMock,
      name: "updated name",
    });
    expect(user?.name).toBe(userMock.name);
  });

  test("it should return null if the client does not exist", async () => {
    const user = await updateUser.exec("61326791179c3ebd6ca44441", userMock);
    expect(user).toBeNull();
  });
});
