
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


const posts = data["posts"];

for (let i = 0; i < posts.length; i++) {
  let q = `
  mutation {
		posts(insert: $data) {
			id
		}
	}`;

  let res = graphql(q, {
    data: posts[i],
  });
}
