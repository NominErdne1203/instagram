// beforeAll(async () =>{
//     console.log("logging out before all of the function execute")
// })

// afterAll(async () => {
//     console.log("logging out after all of the function execute");
// })

// const helloName = (name) =>{
//     return `hello ${name}`
// }

// describe("first test", () => {
//     it("first taste case", async () => {
//         const a = 2
//         const b = "4"
//         const c = 7
//         console.log("logging of the first case");
//         const result = a+b+c
//         expect(result).toBe("247")
//     })

//     it("Second taste case", async () =>{
//         const result = helloName("ariel")
//         expect(result).toBe("hello ariel")
//     });

//     it("third taste case", async () => {
//         const result = helloName("nest")
//         expect(result).toBe("hello nest")
//     })
// });
const mongoose = require('mongoose');
const app = express();

const uri =
  "mongodb+srv://NominErdene:99305757@cluster0.rz1blnn.mongodb.net/database?retryWrites=true&w=majority";

describe('insert', () => {

  beforeAll(async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_DB_URI || '');
  });

  afterAll(async () => {
    console.log('connected');
  });

  it('', async () => {
    const users = db.collection('users');

    const mockUser = {_id: 'some-user-id', name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });
});