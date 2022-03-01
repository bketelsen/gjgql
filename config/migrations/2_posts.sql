-- Write your migrate up statements here

CREATE TABLE posts (
  id VARCHAR(255) NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  person_id VARCHAR(255) REFERENCES people(id),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

---- create above / drop below ----

-- Write your down migrate statements here. If this migration is irreversible
-- then delete the separator line above.

DROP TABLE posts

