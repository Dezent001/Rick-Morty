const axios = require('axios')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Player Type
const PlayerType = new GraphQLObjectType({
    name:'Player',
    fields:() => ({
        group: {type:GraphQLString},
        name: {type: GraphQLString},
        progress: {type: GraphQLString},
        timeStart: {type: GraphQLString},
        timeEnd: {type: GraphQLString},
        penalty: {type: GraphQLInt},
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        player:{
            type: PlayerType,
            args:{
                id:{type: GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/players/'+ args.id)
                    .then(res => res.data);

            }
        },
        players:{
            type: new GraphQLList(PlayerType),
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/players/')
                .then(res => res.data);
            }
        }
    }
});

// Mutation
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addPlayer:{
            type: PlayerType,
            args: {
                group: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                progress: {type: new GraphQLNonNull(GraphQLString)},
                timeStart: {type: new GraphQLNonNull(GraphQLString)},
                timeEnd: {type: new GraphQLNonNull(GraphQLString)},
                penalty: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parentValue, args){
                return axios.post('http://localhost:3000/players', {
                    group: args.group,
                    name: args.name,
                    progress: args.progress,
                    timeStart: args.timeStart,
                    timeEnd: args.timeEnd,
                    penalty: args.penalty 
                })
                .then(res => res.data);
            }
        },
        deletePlayer:{
            type: PlayerType,
            args: {
                id:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args){
                return axios.delete('http://localhost:3000/players/'+ args.id)
                .then(res => res.data);
            }
        },
        editPlayer:{
            type: PlayerType,
            args: {
                id:{type: new GraphQLNonNull(GraphQLString)},
                group: {type:GraphQLString},
                name: {type: GraphQLString},
                progress: {type: GraphQLString},
                timeStart: {type: GraphQLString},
                timeEnd: {type: GraphQLString},
                penalty: {type: GraphQLInt}
            },
            resolve(parentValue, args){
                return axios.patch('http://localhost:3000/players/'+args.id, args)
                .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});