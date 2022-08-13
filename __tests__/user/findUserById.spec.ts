import {
  connectMemoryDB,
  clearDataBase,
  closeDataBase,
} from "../../src/config/db/mongo-memory";
import CreateUser from "../../src/context/user/infra/useCases/createUser";
import FindUserById from "../../src/context/user/infra/useCases/findUserById";
import UserFactory from "../mocks/factories/userFactory";

beforeAll(() => connectMemoryDB());
afterEach(() => clearDataBase());
afterAll(() => closeDataBase());

describe("find client by id useCase", () => {
  const findUserById = new FindUserById();
  const createUser = new CreateUser();
  const userFactory = UserFactory.createDefault();

  test("it should return null if the user does not exist", async () => {
    const user = await findUserById.exec("61326791179c3ebd6ca44441");
    expect(user).toBeNull();
  });

  test("it should return an CastError if the id is not provided", (done) => {
    findUserById.exec("").catch((err) => {
      expect(err.name).toBe("CastError");
      done();
    });
  });

  test("It should return the user name with the id that we are requesting", async () => {
    const { name, _id: id } = await createUser.exec(userFactory);
    const user = await findUserById.exec(id);
    expect(user?.name).toBe(name);
  });
});
