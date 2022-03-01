
const people = data["people"];

for (let i = 0; i < people.length; i++) {
  let q = `
  mutation {
		people(insert: $data) {
			id
		}
	}`;

  let res = graphql(q, {
    data: people[i],
  });
}
