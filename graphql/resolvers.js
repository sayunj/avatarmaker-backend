import {Person} from "../db";
const resolvers = {
    Query: {
        people: () => people,
        person: (_, {id}) => Person.findById(id)
    }
}

export default resolvers;