import {
  connectMemoryDB,
  clearDataBase,
  closeDataBase,
} from "../../src/config/db/mongo-memory";
import CreateUser from "../../src/context/user/infra/useCases/createUser";
import DeleteUser from "../../src/context/user/infra/useCases/deleteUser";
import { UserModel } from "../../src/context/user/domain/UserModel";
import UserFactory from "../mocks/factories/userFactory";

beforeAll(() => connectMemoryDB());
afterEach(() => clearDataBase());
afterAll(() => closeDataBase());

describe("update user useCase", () => {
  const createUser = new CreateUser();
  const deleteUser = new DeleteUser();
  test("update user with correct params", async () => {
    const userMock = await createUser.exec(UserFactory.createDefault());
    const user = await deleteUser.exec(userMock._id);
    expect(user?.name).toBe(userMock.name);
  });

  test("it should return null if the client does not exist", async () => {
    const user = await deleteUser.exec("61326791179c3ebd6ca44441");
    expect(user).toBeNull();
  });
});
